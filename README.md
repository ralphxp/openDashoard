# NexLink CRM Dashboard - Next.js Conversion

A modern CRM Admin Dashboard converted from Bootstrap 5 HTML template to a fully functional Next.js application with React components, TypeScript support, and responsive design.

## Project Overview

This project is a successful conversion of the NexLink Bootstrap 5 CRM Dashboard template into a production-ready Next.js application. The conversion maintains 100% visual consistency with the original design while adding modern React patterns and Next.js optimizations.

## Key Features

- **Modern React Architecture**: Fully componentized with React functional components and hooks
- **Next.js App Router**: File-based routing with dynamic pages
- **Bootstrap 5 Integration**: All Bootstrap classes preserved for consistent styling
- **TypeScript Support**: Type-safe components and utilities
- **Responsive Design**: Mobile-first approach with Bootstrap breakpoints
- **Dark Mode Support**: Built-in dark/light theme switching
- **ApexCharts Integration**: Beautiful, interactive data visualizations
- **State Management**: React Context API for global app state
- **Reusable Components**: Common UI components for consistency

## Project Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Top navigation bar
│   │   ├── Sidebar.tsx         # Main navigation sidebar
│   │   └── PageLayout.tsx      # Page wrapper layout
│   └── common/
│       ├── StatCard.tsx        # Statistics card component
│       ├── ChartCard.tsx       # Chart container component
│       ├── TableCard.tsx       # Data table component
│       ├── PageHeader.tsx      # Page title and breadcrumbs
│       ├── Button.tsx          # Custom button component
│       └── index.ts            # Component exports
├── contexts/
│   └── AppProvider.tsx         # Global app state provider
├── pages/ (Next.js routing)
│   ├── page.tsx                # Dashboard page
│   ├── contacts/
│   │   └── page.tsx            # Contacts list page
│   ├── projects/
│   │   └── page.tsx            # Projects page
│   ├── analytics/
│   │   └── page.tsx            # Analytics page
│   └── settings/
│       └── page.tsx            # Settings/profile page
├── globals.css                 # Global styles and theme
├── layout.tsx                  # Root layout
└── RootLayoutClient.tsx        # Client-side layout wrapper
public/
├── assets/                     # All original Bootstrap assets
│   ├── css/                    # Stylesheets
│   ├── js/                     # JavaScript libraries
│   ├── images/                 # Images and icons
│   └── libs/                   # Dependencies (Bootstrap, FontAwesome, etc.)
└── (other static assets)
```

## Installed Dependencies

### Core
- `next` - React framework
- `react` & `react-dom` - UI library
- `bootstrap` - CSS framework
- `@popperjs/core` - Bootstrap dependency

### Charts & Data Visualization
- `apexcharts` - Modern charting library
- `react-apexcharts` - React wrapper for ApexCharts

### Build Tools
- TypeScript - Type safety
- ESLint - Code quality

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Opens at [http://localhost:3000](http://localhost:3000)

3. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

### Environment Setup
Create a `.env.local` file if needed for any API integrations (currently not required for basic functionality).

## Available Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Dashboard | Main CRM dashboard with stats and charts |
| `/contacts` | Contacts | Contact management list |
| `/projects` | Projects | Project tracking cards |
| `/analytics` | Analytics | Business metrics and analytics |
| `/settings` | Settings | Account and profile settings |

## Design System

### Color Palette
- **Primary**: `#5b63f5` (NexLink Blue)
- **Secondary**: `#a89ef5` (Light Purple)
- **Success**: `#13c560` (Green)
- **Danger**: `#ff4d6d` (Red)
- **Warning**: `#ffa500` (Orange)
- **Info**: `#00d4ff` (Cyan)

### Typography
- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Default Line Height**: 1.4-1.6

### Spacing
Uses Bootstrap's spacing scale (0.25rem increments):
- `p-1` to `p-5`, `m-1` to `m-5`, etc.

## Responsive Breakpoints

- **xs**: 0px (mobile)
- **sm**: 576px (landscape phone)
- **md**: 768px (tablet)
- **lg**: 992px (desktop)
- **xl**: 1200px (large desktop)
- **xxl**: 1400px (ultra-wide)
- **Sidebar breakpoint**: 1191px (sidebar collapse point)

## Component Usage Examples

### StatCard
```tsx
<StatCard
  title="Total Sales"
  value="$45,231.89"
  trend={{ value: 12.5, isPositive: true }}
/>
```

### ChartCard
```tsx
<ChartCard title="Revenue" subtitle="Monthly overview">
  <Chart options={options} series={series} type="area" />
</ChartCard>
```

### PageHeader
```tsx
<PageHeader
  title="Contacts"
  description="Manage your contacts"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contacts' }]}
  action={<button className="btn btn-primary">Add</button>}
/>
```

## Conversion Notes

### From Bootstrap HTML to Next.js React
1. **Page Templates**: Each `.html` file became a `page.tsx` component in the appropriate route directory
2. **Layout**: Bootstrap's `.container` and `.row/.col` grid maintained throughout
3. **Assets**: Original `/assets` folder copied to `/public/assets` for Next.js static serving
4. **JavaScript**: Bootstrap JS functionality handled by React hooks and state management
5. **CSS**: All Bootstrap classes preserved, global styles in `globals.css`
6. **Icons**: FontAwesome and Flaticon icons still used via CSS classes

### Maintained Elements
- ✅ All Bootstrap utility classes (spacing, sizing, display, etc.)
- ✅ Color scheme and typography
- ✅ Responsive grid system
- ✅ Component-based structure
- ✅ Dark mode support
- ✅ All original assets and images

### Enhanced Elements
- ✨ React component composition
- ✨ Built-in state management
- ✨ Type safety with TypeScript
- ✨ Next.js image optimization ready
- ✨ Better performance with code splitting
- ✨ Modern development experience

## Development Workflow

### Creating New Pages
1. Create a new directory in `app/` with `page.tsx`
2. Import and use layout components
3. Use reusable components from `components/common/`
4. Follow the established patterns

### Adding New Components
1. Create in `app/components/` directory
2. Use TypeScript for type safety
3. Export from appropriate index file
4. Document props with JSDoc comments

### Styling
- Use Bootstrap classes for consistency
- Add custom styles to `globals.css` for global changes
- CSS Modules for component-specific styles if needed
- CSS variables in `:root` for theming

## Performance Optimization

### Implemented
- Dynamic imports for ApexCharts (reduces initial bundle)
- Image optimization with Next.js Image component
- Responsive breakpoints for efficient CSS

### Recommended
- Implement API routes for data fetching
- Add caching with Next.js ISR
- Optimize images in `/public/assets`
- Consider server components for static content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Traditional Hosting
```bash
npm run build
npm start
```

## Troubleshooting

### Bootstrap styles not applying
- Check if `globals.css` and Bootstrap CSS are imported in `layout.tsx`
- Ensure `data-bs-theme` attribute is set on HTML element

### Charts not rendering
- Verify `react-apexcharts` is installed
- Use `typeof window !== 'undefined'` check for client-side rendering
- Check browser console for ApexCharts errors

### Sidebar navigation not working
- Ensure navigation links use `href` attribute
- Check AppProvider wraps entire application
- Verify Next.js routing setup

## Future Enhancements

- [ ] Add API routes and database integration
- [ ] Implement authentication with Auth.js
- [ ] Add more pages from original template
- [ ] Implement full calendar functionality
- [ ] Add email integration
- [ ] Create admin panel for content management
- [ ] Add real-time notifications
- [ ] Implement data export features

## License

This converted project maintains the same license as the original NexLink template. Please refer to the original template's license terms.

## Support

For issues or questions about this Next.js conversion:
1. Check the original template documentation
2. Review Next.js documentation: https://nextjs.org/docs
3. Bootstrap documentation: https://getbootstrap.com/docs

---

**Conversion Date**: 2024
**Next.js Version**: 15+
**Bootstrap Version**: 5.3.0
**React Version**: 18+
