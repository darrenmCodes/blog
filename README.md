# Guide - Personal Blog Site

A Next.js blog site with markdown-based posts. Simply add markdown files to the `posts` folder to create new blog posts.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Blog Posts

To add a new blog post, simply create a new `.md` file in the `posts` folder with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "Jan 01, 2024"
category: "Category Name"
readTime: "5 min read"
---

Your post content here...
```

The `readTime` field is optional - it will be automatically calculated if not provided.

## Project Structure

- `src/app/` - Next.js app directory with pages
- `src/components/` - React components
- `src/lib/` - Utility functions for reading posts
- `posts/` - Markdown blog posts (add your posts here!)

## Features

- ✅ Next.js 14 with App Router
- ✅ Tailwind CSS for styling
- ✅ Dark mode support
- ✅ Markdown-based blog posts
- ✅ Automatic read time calculation
- ✅ Responsive design

# blog
