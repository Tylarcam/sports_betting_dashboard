# Sports Betting Policy Dashboard

**Interactive HTML dashboard for visualizing sports betting legislation adoption across US states.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

---

## 🔗 Live Dashboard

**[View Live Dashboard →](https://sportsbettingdashboard-production.up.railway.app/)**

Explore the interactive dashboard deployed on Railway.

---

## 📊 Overview

This repository contains an interactive web dashboard for exploring US sports betting policy adoption, featuring:

- 🗺️ **Interactive Maps**: Geographic visualization of adoption status across all US states
- 📈 **Timeline Charts**: Visualizing adoption waves from 2018 to present  
- 📊 **Scorecard Displays**: State-level rankings and metrics
- 🎯 **Policy Insights**: Methodology, data sources, and analytical framework
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

---

## 📁 Repository Structure

### Root Directory
- `index.html` - Main dashboard page
- `about.html` - About page
- `resources.html` - Resources page
- `main.js` - JavaScript functionality
- `resources/` - Images and assets
- `package.json` - Node.js dependencies
- `nixpacks.toml` - Deployment configuration

### Archive
- `archive/leaflet-version/` - Archived Leaflet map implementation

### Current Interactive Policy Report
- `Current_Interactive Policy Report/` - Interactive HTML dashboard and related assets

---

## 🚀 Quick Start

### View Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/Tylarcam/sports_betting_dashboard.git
   cd sports_betting_dashboard
   ```

2. Open in browser:
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use a local server:
     ```bash
     npx serve -s .
     ```

### Deployment to Railway

#### Prerequisites
- GitHub account
- Railway account (free at railway.app)

#### Option 1: Deploy via Railway Dashboard (Recommended)

1. Push to GitHub (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin master
   ```

2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub"
4. Select your repository
5. Railway will automatically deploy your site!

#### Option 2: Deploy via Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Navigate to project
cd sports_betting_dashboard

# Login to Railway
railway login

# Initialize and deploy
railway init
railway up
```

---

## 🌐 How It Works

- Railway/Nixpacks uses the configuration to set up a Node.js Alpine container
- The `npx serve -s . -l $PORT` command serves your static files
- Your dashboard will be available at your deployment URL

---

## ✨ Features

- Interactive sports betting policy dashboard
- State-by-state legalization status
- Revenue impact analysis
- Timeline visualization
- Responsive design
- Modern UI with Tailwind CSS
- Comprehensive data visualization with ECharts

---

## 📧 Contact

For questions or issues:
- Email: tylar@nobrainer.co
- Research inquiries: research@nobrainerco.com

---

## 📝 License

MIT License - See LICENSE file for details

---

**Created by Nobrainerco © 2025**
