# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro. The site features a blog, projects showcase, and personal information sections. It uses Astro's content collections for managing blog posts and project data.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## Architecture

### Content Collections
The site uses Astro's content collections system for structured content:

- **Projects Collection** (`src/content/projects/`): Markdown files with frontmatter defining project metadata (title, description, technologies, dates, status, etc.). Projects can either have detailed writeups or link to external URLs
- **Blog Collection** (`src/content/blog/`): Blog posts with frontmatter for title, description, publication date, tags, etc.
- **Content Schema** (`src/content/config.ts`): Zod schemas defining the structure and validation for both collections

### Page Structure
- `src/pages/index.astro`: Main homepage with hero, about, projects, and contact sections
- `src/pages/blog.astro`: Blog listing page
- `src/pages/projects.astro`: Projects showcase page
- `src/pages/blog/[slug].astro`: Dynamic blog post pages
- `src/pages/projects/[slug].astro`: Dynamic project detail pages

### Components
- `src/components/`: Reusable Astro components for sections (Hero, About, Projects, Contact, Navbar, Footer)
- `src/layouts/`: Base layouts including main Layout.astro with global styles and metadata
  - `src/layouts/BlogPost.astro`: Legacy blog post layout (not currently used)

### Blog Post Rendering
**Important**: Blog posts are rendered using the dynamic page template at `src/pages/blog/[slug].astro`, NOT the `BlogPost.astro` layout. This template handles:
- Hero image display (`.featured-image` class)
- Blog metadata and tags
- Content rendering
- Navigation back to blog listing

### Utilities
- `src/utils/projects.ts`: Helper functions for working with project data including filtering, sorting, and formatting

### Styling
Global styles are defined in `src/layouts/Layout.astro` with CSS custom properties for theming. The site uses Inter font from Google Fonts.

## Content Management

### Adding Projects
1. Create a new `.md` file in `src/content/projects/`
2. Follow the schema defined in `src/content/config.ts` for frontmatter
3. Include required fields: title, description, image, technologies, status, startDate, category
4. Set `hasWriteup: true` for projects with detailed content or `hasWriteup: false` for external links
5. For external projects, provide `externalUrl` to redirect users to GitHub repos or live applications

### Adding Blog Posts
1. Create a new `.md` file in `src/content/blog/`
2. Follow the blog schema for frontmatter with title, description, pubDate, and optional tags

### Project Status Values
- `completed`: Finished projects
- `in-progress`: Currently active projects  
- `planned`: Future projects

### Project Types
- **Writeup Projects** (`hasWriteup: true`): Projects with detailed case studies and content. These display a book icon (📖) and "Read More" button
- **External Projects** (`hasWriteup: false`): Projects that redirect to external URLs. These show "View Project" and link directly to GitHub repos or live applications

## Key Files to Understand
- `src/content/config.ts`: Content collection schemas and validation
- `src/utils/projects.ts`: Project data utilities and helper functions
- `src/layouts/Layout.astro`: Base layout with global styles and metadata
- `astro.config.mjs`: Astro configuration including markdown syntax highlighting