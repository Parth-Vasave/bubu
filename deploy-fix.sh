#!/bin/bash

echo "🧹 Cleaning up Git and deploying to GitHub Pages..."

# Remove gh-pages cache that's causing issues
echo "Removing gh-pages cache..."
rm -rf node_modules/.cache/gh-pages/

# Reset any staged changes
echo "Resetting staged changes..."
git reset HEAD .

# Pull latest changes from remote
echo "Pulling latest changes..."
git pull origin main

# Add only the files we want to commit
echo "Adding deployment files..."
git add .github/
git add .gitignore
git add DEPLOYMENT.md
git add CHANGELOG.md
git add package.json
git add package-lock.json
git add src/
git add public/
git add README.md

# Commit the changes
echo "Committing changes..."
git commit -m "💖 Add GitHub Pages deployment setup"

# Push to main branch
echo "Pushing to main branch..."
git push origin main

echo "✅ Done! Check GitHub Actions for deployment status."
echo "🌐 Your app will be live at: https://parth-vasave.github.io/bubu"