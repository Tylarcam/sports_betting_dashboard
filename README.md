# Fair Chance Sports: US Sports Betting Policy Dashboard

**Comprehensive data analysis and interactive visualization system for tracking sports betting legislation adoption across all US states.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

---

## 📊 Project Overview

This project provides a comprehensive analysis and visualization system for tracking US sports betting legislation adoption across all 50 states plus DC, featuring real-time data updates, interactive dashboards, scorecard analytics, and detailed policy insights.

### Key Features

- 🗺️ **Geographic Visualizations**: Interactive choropleth maps showing adoption status
- 📈 **Timeline Analysis**: Track adoption waves from 2018 to present
- 📊 **Scorecard System**: Comparative metrics and state rankings
- 🔄 **Automated Data Pipeline**: Real-time updates as laws change
- 🎯 **Interactive Dashboard**: HTML-based policy report with interactive charts
- 📱 **Mobile-Responsive**: Modern web interface for all devices

---

## 🎯 Project Goals

1. **Track legislative adoption** across 50 US states + DC
2. **Visualize geographic trends** and temporal patterns
3. **Compare implementation efficiency** across jurisdictions
4. **Provide scorecard analytics** for policy analysis
5. **Enable real-time updates** as laws change

---

## 📁 Project Structure

```
fairChance_Sports/
├── Current_Interactive Policy Report/    # Interactive HTML dashboard
│   ├── index.html                        # Main dashboard page
│   ├── about.html                        # Methodology & team info
│   ├── resources.html                    # Data sources
│   ├── main.js                           # Interactive JavaScript
│   ├── design.md                         # Design documentation
│   ├── implementation_notes.md           # Implementation details
│   └── resources/                        # Images and assets
│
├── Sports_Betting_Policy_Dashboard/     # Analysis & data pipeline
│   ├── analysis/                         # Jupyter notebooks
│   │   ├── 00_setup_data.ipynb          # Data loading
│   │   ├── 01_eda_overview.ipynb        # Exploratory analysis
│   │   ├── 02_timeline_mapping.ipynb     # Visualizations
│   │   ├── 03_dashboard_prep.ipynb      # Dashboard data prep
│   │   ├── 04_scorecard_analysis.ipynb  # Scorecard metrics
│   │   └── scorecard_utils.py            # Utility functions
│   │
│   ├── data/                            # Data files
│   │   ├── source/                       # Raw CSV data
│   │   ├── processed/                    # Cleaned data
│   │   ├── html_reports/                 # Generated dashboards
│   │   └── documentation/               # Data dictionaries
│   │
│   ├── etl/                             # Data pipeline
│   │   └── refresh_data.py              # Data processing
│   │
│   ├── dashboard_app.py                 # Streamlit dashboard (optional)
│   ├── README.md                        # Dashboard documentation
│   ├── PROJECT_SUMMARY.md               # Project overview
│   └── SCORECARD_METHODOLOGY.md         # Scorecard methodology
│
├── notes/                                # Project documentation
│   ├── Analysis_Plan.md                 # Analysis methodology
│   └── jupyter_analysis_process.md      # Analysis workflow
│
└── Sports_Betting_Analysis_Final_Report (Review).pdf  # Final report
```

---

## 🚀 Quick Start

### Prerequisites

- Python 3.10 or higher
- Jupyter Notebook
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/fairChance-Sports.git
   cd fairChance-Sports
   ```

2. **Set up Python environment** (optional but recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install pandas matplotlib seaborn plotly jupyter
   ```

4. **Open the Interactive Dashboard**
   - Navigate to `Current_Interactive Policy Report/`
   - Open `index.html` in your web browser

### Running the Analysis

1. **Update data** (if needed)
   ```bash
   cd Sports_Betting_Policy_Dashboard
   python etl/refresh_data.py
   ```

2. **Run analysis notebooks**
   - Open Jupyter: `jupyter notebook`
   - Navigate to `analysis/` folder
   - Run notebooks sequentially from `00_setup_data.ipynb` to `04_scorecard_analysis.ipynb`

3. **View generated reports**
   - Open HTML files in `data/html_reports/`

---

## 📊 Key Metrics & Findings

### Adoption Status
- **Total Jurisdictions Tracked**: 41 (39 states + DC + Puerto Rico)
- **Online/Mobile Adoption**: 83% (34 states)
- **Retail Adoption**: 85% (35 states)
- **Pending States**: 1 (Missouri - expected 2025)
- **Non-Adopting States**: 9

### Implementation Speed
- **Average Days to Launch**: 245 days
- **Fastest Category**: < 180 days
- **Normal Category**: 180-365 days
- **Slow Category**: > 365 days

### Legalization Methods
- **Legislation**: ~60% of adoptions
- **Voter Referendum**: ~20% of adoptions
- **Tribal Compact**: ~12% of adoptions
- **Executive/Lottery Authority**: ~8% of adoptions

### Adoption Waves
- **2018 Wave**: Initial post-PASPA adoptions (NJ, PA, WV, etc.)
- **2019-2020 Wave**: Major expansion (18 states)
- **2021-2023 Wave**: Continued growth (13 states)
- **Future**: Missouri (2025 expected)

---

## 🔧 Components

### 1. Interactive Policy Report

A modern, responsive HTML dashboard featuring:
- **Geographic Maps**: Choropleth visualizations of adoption status
- **Timeline Charts**: Adoption trends over time
- **Scorecard Displays**: State rankings and metrics
- **Method Analysis**: Legalization approaches breakdown
- **Mobile-Responsive Design**: Works on all devices

**Location**: `Current_Interactive Policy Report/`

### 2. Analysis Notebooks

Modular Jupyter notebooks for data analysis:
- **00_setup_data.ipynb**: Data loading and validation
- **01_eda_overview.ipynb**: Exploratory data analysis
- **02_timeline_mapping.ipynb**: Geographic and temporal visualizations
- **03_dashboard_prep.ipynb**: Dashboard data preparation
- **04_scorecard_analysis.ipynb**: Scorecard metrics and rankings

### 3. Scorecard System

Comprehensive scoring framework tracking:
- **Adoption Scores**: Online/Mobile + Retail (range: -2 to 2)
- **Implementation Speed**: Days from signing to launch
- **Legalization Method**: Classification by process type
- **Adoption Wave**: Temporal categorization

See `SCORECARD_METHODOLOGY.md` for complete details.

### 4. Data Pipeline

Automated ETL process:
- Loads raw data from `data/source/`
- Cleans and normalizes values
- Calculates scorecard metrics
- Outputs processed data

**Run**: `python Sports_Betting_Policy_Dashboard/etl/refresh_data.py`

---

## 📈 Scorecard Rankings

### Top Adopters (Score = 2)
States with full online/mobile + retail adoption:
- Arizona, Arkansas, Colorado, Connecticut, Delaware
- Florida, Illinois, Indiana, Iowa, Kansas
- Kentucky, Louisiana, Maine, Maryland, Massachusetts
- Michigan, Nevada, New Hampshire, New Jersey, New York
- North Carolina, Ohio, Oregon, Pennsylvania, Rhode Island
- Virginia, West Virginia, Wyoming

### Fastest Implementations
- Delaware: < 1 day
- Nevada: Pre-existing (1949)
- Multiple states: < 200 days

---

## 💻 Usage Guide

### View the Interactive Dashboard

Simply open `Current_Interactive Policy Report/index.html` in your web browser.

### Update Data

When new legislation is passed:
1. Update `data/source/sports_betting_legislation_38_states.csv`
2. Run the ETL pipeline: `python etl/refresh_data.py`
3. Re-run analysis notebooks
4. Dashboards update automatically

### Add New Visualizations

1. Create new notebook in `analysis/` folder
2. Import required libraries and data
3. Generate visualizations
4. Export to HTML in `data/html_reports/`

---

## 📚 Documentation

- **[PROJECT_SUMMARY.md](Sports_Betting_Policy_Dashboard/PROJECT_SUMMARY.md)**: Comprehensive project overview
- **[SCORECARD_METHODOLOGY.md](Sports_Betting_Policy_Dashboard/SCORECARD_METHODOLOGY.md)**: Scorecard methodology
- **[Analysis_Plan.md](notes/Analysis_Plan.md)**: Analysis planning document
- **[design.md](Current_Interactive Policy Report/design.md)**: Dashboard design specifications

---

## 🛠️ Technical Stack

- **Python**: Data processing and analysis
- **Pandas**: Data manipulation
- **Plotly**: Interactive visualizations
- **Jupyter**: Analysis notebooks
- **HTML/CSS/JavaScript**: Interactive dashboard frontend
- **Tailwind CSS**: Modern styling framework

---

## 🎨 Features

### Geographic Visualizations
- Interactive choropleth maps
- Hover tooltips with detailed info
- Filter by adoption status
- Zoom and pan capabilities

### Timeline Analysis
- Adoption waves over time
- Cumulative adoption curve
- Regional patterns
- Method preferences

### Scorecard Analytics
- National KPIs
- State-level rankings
- Efficiency metrics
- Top performers

---

## 🔄 Update Workflow

### Regular Updates

1. **Data Collection**
   - Monitor legislative changes
   - Track launch dates
   - Note status updates

2. **Data Processing**
   ```bash
   python etl/refresh_data.py
   ```

3. **Analysis Refresh**
   - Run analysis notebooks
   - Generate updated dashboards
   - Refresh scorecard metrics

4. **Deployment**
   - Update HTML reports
   - Publish new versions
   - Archive old reports

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- Data sources from state legislative databases
- Regulatory bodies providing official implementation data
- Industry research firms for market insights
- Policy experts for analysis and validation

---

## 📞 Contact

**Project Maintainer**: TC  
**Email**: tylar@nobrainer.co  
**Organization**: Nobrainerco

---

## 📅 Project Timeline

- **Phase 1**: Data collection and ETL pipeline (✓ Complete)
- **Phase 2**: Analysis notebooks and visualizations (✓ Complete)
- **Phase 3**: Scorecard system implementation (✓ Complete)
- **Phase 4**: Interactive dashboard generation (✓ Complete)
- **Phase 5**: Documentation and methodology (✓ Complete)
- **Phase 6**: Ongoing updates and maintenance (✓ Active)

---

## 🎯 Use Cases

### For Policymakers
- Track legislative adoption progress
- Compare implementation speed
- Identify effective methods
- Monitor pending states

### For Analysts
- Benchmark state performance
- Analyze implementation patterns
- Predict future adoptions
- Research method effectiveness

### For Industry
- Understand market readiness
- Track regulatory trends
- Identify expansion opportunities
- Monitor competitive landscape

### For Researchers
- Policy diffusion analysis
- Comparative politics
- State-level variation
- Temporal pattern analysis

---

## 🚧 Future Enhancements

### Planned Additions
- Revenue data integration
- License count tracking
- Tax rate analysis
- Market share data
- Operator-specific data

### Advanced Analytics
- Predictive modeling for future adoptions
- Clustering analysis by similar states
- Network analysis of industry connections
- Sentiment analysis of public opinion

---

*Created by Nobrainerco Data Team © 2025*  
*Comprehensive sports betting policy analysis for informed decision making*

