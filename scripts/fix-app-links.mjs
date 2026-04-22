import { promises as fs } from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const appDir = path.join(repoRoot, 'app');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = [];
  for (const e of entries) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) {
      results.push(...(await walk(abs)));
    } else if (e.isFile() && e.name.endsWith('.tsx')) {
      results.push(abs);
    }
  }
  return results;
}

function rewriteInFileText(text) {
  let out = text;

  // HTTrack-style broken relative URLs.
  out = out.replace(/https?:\/\/\.\.\//g, '/');

  // CSS url(assets/...) -> url(/assets/...)
  out = out.replace(/url\((['"]?)assets\//gi, 'url($1/assets/');

  // href/action to .html -> Next routes
  out = out.replace(
    /(\b(?:href|action)=)(["'])(\/[^"']+?)\.html(#[^"']*)?(\2)/gi,
    (_m, attr, quote, urlPath, hash = '', endQuote) => {
      let normalized = urlPath;
      if (normalized === '/index') normalized = '/';
      normalized = normalized.replace(/\/index$/i, '');
      if (normalized === '') normalized = '/';
      return `${attr}${quote}${normalized}${hash}${endQuote}`;
    }
  );

  // href/action of the form "something.html" (no leading slash)
  out = out.replace(
    /(\b(?:href|action)=)(["'])(?!https?:|mailto:|tel:|#|javascript:)([^"']+?)\.html(#[^"']*)?(\2)/gi,
    (_m, attr, quote, urlPath, hash = '', endQuote) => {
      let normalized = `/${urlPath}`;
      if (normalized === '/index') normalized = '/';
      normalized = normalized.replace(/\/index$/i, '');
      if (normalized === '') normalized = '/';
      return `${attr}${quote}${normalized}${hash}${endQuote}`;
    }
  );

  return out;
}

async function main() {
  const files = await walk(appDir);
  let changed = 0;

  for (const file of files) {
    const before = await fs.readFile(file, 'utf8');
    const after = rewriteInFileText(before);
    if (after !== before) {
      await fs.writeFile(file, after, 'utf8');
      changed += 1;
    }
  }

  console.log(`Updated links in ${changed} TSX files under app/.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
