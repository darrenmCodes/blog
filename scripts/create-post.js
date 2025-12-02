#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the post name from command line arguments
const postName = process.argv[2];

if (!postName) {
  console.error('Error: Please provide a post name');
  console.log('Usage: npm run blog <post-name>');
  process.exit(1);
}

// Convert post name to slug (lowercase, replace spaces with hyphens)
const slug = postName
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^a-z0-9-]/g, '');

// Get current date in the format "MMM DD, YYYY"
const now = new Date();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formattedDate = `${months[now.getMonth()]} ${String(now.getDate()).padStart(2, '0')}, ${now.getFullYear()}`;

// Create posts directory if it doesn't exist
const postsDir = path.join(process.cwd(), 'posts');
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// Create the file path
const filePath = path.join(postsDir, `${slug}.md`);

// Check if file already exists
if (fs.existsSync(filePath)) {
  console.error(`Error: A post with the name "${slug}" already exists!`);
  process.exit(1);
}

// Template for the new post
const template = `---
title: "${postName}"
date: "${formattedDate}"
category: "Uncategorized"
---

Write your post content here...

`;

// Write the file
fs.writeFileSync(filePath, template, 'utf8');

console.log(`✅ Created new blog post: posts/${slug}.md`);
console.log(`📝 Edit the file to add your content!`);

