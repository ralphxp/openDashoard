import { promises as fs } from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const appDir = path.join(repoRoot, 'app');

const IGNORE_DIRS = new Set([
  'node_modules',
  '.next',
  '.git',
  'public',
  'assets',
  'app',
]);

function escapeForTemplateLiteral(raw) {
  return raw.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function stripScripts(html) {
  return html.replace(/<script[\s\S]*?<\/script>\s*/gi, '');
}

function rewriteAssetPaths(html) {
  // Prefix relative "assets/..." references (template expects /assets served from public/assets)
  return html.replace(
    /(\b(?:src|href|data-src|data-srcset|srcset|poster)=)(["'])(?!https?:|mailto:|tel:|#|javascript:)(assets\/)/gi,
    (_m, attr, quote, assetsPrefix) => `${attr}${quote}/${assetsPrefix}`
  );
}

function rewriteHtmlLinks(html) {
  // Rewrite links/actions that point to .html pages into Next routes.
  // Examples:
  //  - "index.html" -> "/"
  //  - "customers.html" -> "/customers"
  //  - "email/inbox.html" -> "/email/inbox"
  //  - "/pages/profile.html#tab" -> "/pages/profile#tab"
  return html.replace(
    /(\b(?:href|action)=)(["'])([^"']+?\.html(?:#[^"']*)?)(\2)/gi,
    (_m, attr, quote, url) => {
      const lowered = url.toLowerCase();
      if (
        lowered.startsWith('http://') ||
        lowered.startsWith('https://') ||
        lowered.startsWith('//') ||
        lowered.startsWith('mailto:') ||
        lowered.startsWith('tel:') ||
        lowered.startsWith('javascript:')
      ) {
        return `${attr}${quote}${url}${quote}`;
      }

      const [pathPart, hash = ''] = url.split('#');
      let normalized = pathPart;

      if (!normalized.startsWith('/')) normalized = `/${normalized}`;
      normalized = normalized.replace(/\.html$/i, '');

      // Map /index -> /
      if (normalized === '/index') normalized = '/';
      // Map */index -> *
      normalized = normalized.replace(/\/index$/i, '');
      if (normalized === '') normalized = '/';

      const newUrl = hash ? `${normalized}#${hash}` : normalized;
      return `${attr}${quote}${newUrl}${quote}`;
    }
  );
}

function extractBodyContent(fullHtml) {
  const bodyOpenIdx = fullHtml.search(/<body\b/i);
  if (bodyOpenIdx === -1) return null;
  const bodyOpenEnd = fullHtml.indexOf('>', bodyOpenIdx);
  if (bodyOpenEnd === -1) throw new Error('Malformed <body> tag');
  const bodyCloseIdx = fullHtml.search(/<\/body\s*>/i);
  if (bodyCloseIdx === -1) throw new Error('No </body> tag found');

  return fullHtml.slice(bodyOpenEnd + 1, bodyCloseIdx);
}

async function walkHtmlFiles(dir, relBase = '') {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const name = entry.name;
    const rel = path.join(relBase, name);
    const abs = path.join(dir, name);

    if (entry.isDirectory()) {
      const top = rel.split(path.sep)[0];
      if (IGNORE_DIRS.has(top)) continue;
      results.push(...(await walkHtmlFiles(abs, rel)));
      continue;
    }

    if (entry.isFile() && name.toLowerCase().endsWith('.html')) {
      // Only convert template pages, not random html inside ignored dirs.
      const top = rel.split(path.sep)[0];
      if (IGNORE_DIRS.has(top)) continue;
      results.push(abs);
    }
  }

  return results;
}

function routeSegmentsFromHtmlPath(absHtmlPath) {
  const rel = path.relative(repoRoot, absHtmlPath);
  const parts = rel.split(path.sep);
  const file = parts.pop();
  if (!file) return [];

  const base = file.replace(/\.html$/i, '');
  if (base.toLowerCase() === 'index') {
    return parts; // /dir/index.html -> /dir
  }
  return [...parts, base];
}

function pagePathFromRouteSegments(segments) {
  if (segments.length === 0) return path.join(appDir, 'page.tsx');
  return path.join(appDir, ...segments, 'page.tsx');
}

async function ensureDirForFile(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function main() {
  const htmlFiles = await walkHtmlFiles(repoRoot);
  if (htmlFiles.length === 0) {
    console.log('No HTML files found to convert.');
    return;
  }

  const generated = [];

  for (const absHtmlPath of htmlFiles) {
    const fullHtml = await fs.readFile(absHtmlPath, 'utf8');
    const extractedBody = extractBodyContent(fullHtml);
    let bodyInner = extractedBody ?? fullHtml;

    if (bodyInner.trim().length === 0) {
      bodyInner = `<div class="container-fluid"><div class="alert alert-warning mb-0">Empty template source: ${path
        .relative(repoRoot, absHtmlPath)
        .replace(/"/g, '&quot;')}</div></div>`;
    }

    bodyInner = stripScripts(bodyInner);
    bodyInner = rewriteAssetPaths(bodyInner);
    bodyInner = rewriteHtmlLinks(bodyInner);
    bodyInner = bodyInner.trim();

    const segments = routeSegmentsFromHtmlPath(absHtmlPath);
    const outPath = pagePathFromRouteSegments(segments);

    const safeHtml = escapeForTemplateLiteral(bodyInner);

    const routeLabel = segments.length === 0 ? '/' : `/${segments.join('/')}`;

    const tsx = `// Auto-generated from ${path.relative(repoRoot, absHtmlPath)}\n// Route: ${routeLabel}\n\nexport default function Page() {\n  return (\n    <div\n      suppressHydrationWarning\n      dangerouslySetInnerHTML={{\n        __html: \`${safeHtml}\`,\n      }}\n    />\n  )\n}\n`;

    await ensureDirForFile(outPath);
    await fs.writeFile(outPath, tsx, 'utf8');
    generated.push({ absHtmlPath, outPath });
  }

  // Verify outputs exist, then delete source html files
  for (const { outPath } of generated) {
    await fs.access(outPath);
  }

  for (const { absHtmlPath } of generated) {
    await fs.unlink(absHtmlPath);
  }

  console.log(`Converted ${generated.length} HTML pages into Next.js routes under app/, then deleted the original HTML files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
