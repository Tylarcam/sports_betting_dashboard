# Sports Betting Policy Dashboard - Deployment Package

This folder contains all the necessary files to deploy the Sports Betting Policy Dashboard to Railway.

## 📁 Contents

- `index.html` - Main dashboard page
- `about.html` - About page
- `resources.html` - Resources page
- `main.js` - JavaScript functionality
- `resources/` - Images and assets
- `railpack.json` - Railway Railpack configuration
- `package.json` - Node.js dependencies
- `.gitignore` - Git ignore rules

## 🚀 Deployment to Railway

### Prerequisites
- GitHub account
- Railway account (free at railway.app)

### Option 1: Deploy via Railway Dashboard (Recommended)

1. Push this folder to GitHub:
   ```bash
   cd C:\Users\tylar\code\sports-betting-dashboard
   git init
   git add .
   git commit -m "Initial deployment"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub"
4. Select your repository
5. Railway will automatically deploy your site!

### Option 2: Deploy via Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Navigate to project
cd C:\Users\tylar\code\sports-betting-dashboard

# Login to Railway
railway login

# Initialize and deploy
railway init
railway up
```

## 🌐 How It Works

- Railway uses the `railpack.json` configuration to set up a Node.js Alpine container
- The `npx serve -s . -l $PORT` command serves your static files
- Your dashboard will be available at `https://your-project-name.up.railway.app`

## 📝 Configuration Details

### railpack.json
Configures Railway to:
- Use Node.js 18 Alpine Linux base image
- Run `npx serve` to serve static files
- Listen on the PORT environment variable
- Include all files in the deployment

### package.json
Provides the `start` script for Railway to execute.

## ✨ Features

- Interactive sports betting policy dashboard
- State-by-state legalization status
- Revenue impact analysis
- Timeline visualization
- Responsive design
- Modern UI with Tailwind CSS

## 📧 Support

For questions or issues, contact: research@nobrainerco.com

---

Created by Nobrainerco © 2025

