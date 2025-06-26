# Antiraedus Portfolio

A personal portfolio website that serves as a digital representation of ambition, creativity, and technical prowess. Built with Astro for optimal performance and modern web standards.

## Vision

This website embodies the philosophy that a personal site should be a representation of your soul. It features an immersive, long-scroll experience with:

- **Epic Opening**: A floating poem about ambition with a sick space-esque background
- **Personal Journey**: About section with timeline of experiences
- **Written Thoughts**: Blog posts exploring ideas and insights
- **Creative Works**: Showcase of projects and technical achievements

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── HeroSection.astro
│   │   ├── AboutSection.astro
│   │   ├── ProjectsSection.astro
│   │   └── ...
│   ├── content/            # Content collections
│   │   ├── blog/           # Blog posts (markdown)
│   │   ├── projects/       # Project showcases (markdown)
│   │   └── config.ts       # Content schemas
│   ├── layouts/
│   │   ├── Layout.astro    # Base layout with global styles
│   │   └── BlogPost.astro  # Blog post layout
│   ├── pages/
│   │   ├── index.astro     # Epic scrolling homepage
│   │   ├── blog.astro      # Blog listing
│   │   └── projects.astro  # Projects showcase
│   └── utils/              # Helper functions
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✨ Features

- **Content Collections**: Structured content management for blogs and projects
- **Responsive Design**: Optimized for all devices and screen sizes  
- **Performance Focused**: Built with Astro for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Space Theme**: Immersive cosmic design with floating elements
- **Smooth Scrolling**: Epic long-scroll experience with scroll-triggered animations

## 🛠️ Built With

- **Astro** - Static site generator with modern tooling
- **TypeScript** - Type-safe development
- **Content Collections** - Structured content management
- **CSS Custom Properties** - Maintainable theming system

## 📝 Content Management

### Adding Blog Posts
Create new `.md` files in `src/content/blog/` with proper frontmatter:

```yaml
---
title: "Your Post Title"
description: "Brief description"
pubDate: "2024-01-01"
tags: ["tag1", "tag2"]
---
```

### Adding Projects
Create new `.md` files in `src/content/projects/` with project details:

```yaml
---
title: "Project Name"
description: "Project description"
technologies: ["Tech1", "Tech2"]
status: "completed"
startDate: "2024-01-01"
category: "web"
---
```
