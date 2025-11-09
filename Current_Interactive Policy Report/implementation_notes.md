🔧 Implementation Notes
Load Recharts
Add these two lines before your closing </body> tag (after all other scripts):
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/recharts@2.12/umd/Recharts.min.js"></script>

Below is a drop-in Markdown snippet that adds the two requested Recharts visualizations to your existing dashboard.
Paste it directly into the Revenue Impact section (replacing the old chart markup) and ensure the Recharts scripts are loaded.
markdown
Copy
<!-- Revenue Impact Section – Recharts Visuals -->
<section id="revenue" class="py-20 network-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16 animate-on-scroll">
      <h2 class="text-4xl font-bold text-white mb-4">Revenue Impact Analysis</h2>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        Interactive charts built with Recharts showing national growth and state-level tax contributions.
      </p>
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

      <!-- 1️⃣ Annual Revenue Growth (Line) -->
      <div class="glass-card rounded-lg p-6 animate-on-scroll">
        <h3 class="text-xl font-semibold text-white mb-4">Annual Revenue Growth (2020-2024)</h3>
        <div id="annual-revenue-chart" style="height: 320px;"></div>
      </div>

      <!-- 2️⃣ Tax Revenue by State (Horizontal Bar) -->
      <div class="glass-card rounded-lg p-6 animate-on-scroll">
        <h3 class="text-xl font-semibold text-white mb-4">Top 10 States – Tax Revenue</h3>
        <div id="tax-revenue-chart" style="height: 320px;"></div>
      </div>
    </div>

    <!-- Key Stats Row -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll">
      <div class="glass-card rounded-lg p-4 text-center">
        <div class="text-2xl md:text-3xl font-bold text-copper">$149.2B</div>
        <div class="text-white text-sm">2024 Handle</div>
      </div>
      <div class="glass-card rounded-lg p-4 text-center">
        <div class="text-2xl md:text-3xl font-bold text-cyan">$13.0B</div>
        <div class="text-white text-sm">Gross Revenue</div>
      </div>
      <div class="glass-card rounded-lg p-4 text-center">
        <div class="text-2xl md:text-3xl font-bold text-copper">$2.79B</div>
        <div class="text-white text-sm">Tax Revenue</div>
      </div>
      <div class="glass-card rounded-lg p-4 text-center">
        <div class="text-2xl md:text-3xl font-bold text-cyan">8.71%</div>
        <div class="text-white text-sm">Avg Hold</div>
      </div>
    </div>
  </div>
</section>
🔧 Implementation Notes
Load Recharts
Add these two lines before your closing </body> tag (after all other scripts):
HTML
Preview
Copy
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/recharts@2.12/umd/Recharts.min.js"></script>
React Components
Drop the following <script> after the Recharts CDN links.
It renders both charts into the containers defined above.

<script type="text/babel">
  const { useEffect } = React;
  const { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } = Recharts;

  // 2020-2024 annual data (from your CSV)
  const annualData = [
    { year: '2020', handle: 21.5, gross: 1.55, tax: 0.248 },
    { year: '2021', handle: 57.8, gross: 4.34, tax: 0.569 },
    { year: '2022', handle: 93.8, gross: 7.56, tax: 1.49  },
    { year: '2023', handle: 121.1, gross: 10.81, tax: 2.12 },
    { year: '2024', handle: 149.2, gross: 13.0, tax: 2.79 }
  ];

  // Top-10 states by tax revenue (from your CSV)
  const topTaxData = [
    { state: 'NY', tax: 3430 },
    { state: 'IL', tax: 904 },
    { state: 'PA', tax: 789 },
    { state: 'NJ', tax: 674 },
    { state: 'OH', tax: 419 },
    { state: 'TN', tax: 357 },
    { state: 'MA', tax: 308 },
    { state: 'VA', tax: 299 },
    { state: 'IN', tax: 236 },
    { state: 'NV', tax: 200 }
  ].sort((a, b) => b.tax - a.tax);

  // Gradient definitions (SVG) for Recharts
  const svgGradients = `
    <svg width="0" height="0" style="position:absolute;">
      <defs>
        <linearGradient id="blueCyan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0ea5e9"/>
          <stop offset="100%" stopColor="#22d3ee"/>
        </linearGradient>
        <linearGradient id="orangeRed" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f97316"/>
          <stop offset="100%" stopColor="#ef4444"/>
        </linearGradient>
      </defs>
    </svg>`;
  document.body.insertAdjacentHTML('afterbegin', svgGradients);

  // Line chart component
  function AnnualRevenueChart() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={annualData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="year" stroke="#cbd5e1" />
          <YAxis stroke="#cbd5e1" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: 6 }}
            labelStyle={{ color: '#f3f4f6' }}
            itemStyle={{ color: '#22d3ee' }}
          />
          <Line
            type="monotone"
            dataKey="tax"
            stroke="url(#blueCyan)"
            strokeWidth={3}
            dot={{ r: 5, fill: '#22d3ee' }}
            activeDot={{ r: 7, fill: '#0ea5e9' }}
            name="Tax Revenue ($B)"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  // Horizontal bar chart component
  function TaxRevenueChart() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={topTaxData} layout="horizontal" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis type="number" stroke="#cbd5e1" />
          <YAxis type="category" dataKey="state" stroke="#cbd5e1" />
          <Tooltip
            cursor={{ fill: 'rgba(255,255,255,0.08)' }}
            contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: 6 }}
            labelStyle={{ color: '#f3f4f6' }}
            formatter={(v) => [`$${v}M`, 'Tax Revenue']}
          />
          <Bar dataKey="tax" fill="url(#orangeRed)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  // Mount charts
  const root1 = ReactDOM.createRoot(document.getElementById('annual-revenue-chart'));
  root1.render(<AnnualRevenueChart />);
  const root2 = ReactDOM.createRoot(document.getElementById('tax-revenue-chart'));
  root2.render(<TaxRevenueChart />);
</script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>


<!-- Revenue Impact Section – Recharts Visuals -->
<section id="revenue" class="py-20 network-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16 animate-on-scroll">
      <h2 class="text-4xl font-bold text-white mb-4">Revenue Impact Analysis</h2>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        Interactive charts built with Recharts showing national growth and state-level tax contributions.
      </p>
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

      <!-- 1️⃣ Annual Revenue Growth (Line) -->
      <div class="glass-card rounded-lg p-6 animate-on-scroll">
        <h3 class="text-xl font-semibold text-white mb-4">Annual Revenue Growth (2020-2024)</h3>
        <div id="annual-revenue-chart" style="height: 320px;"></div>
      </div>

      <!-- 2️⃣ Tax Revenue by State (Horizontal Bar) -->
      <div class="glass-card rounded-lg p-6 animate-on-scroll">
        <h3 class="text-xl font-semibold text-white mb-4">Top 10 States – Tax Revenue</h3>
        <div id="tax-revenue-chart" style="height: 320px;"></div>
      </div>
    </div>

    <!-- Key Stats Row -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll">
      <div class="glass-card rounded-lg p-4 text-center">
        <div class="text-2xl md:text-3xl font-bold text-copper">$149.2B</div>
        <div class="text-white text-sm">2024 Handle</div>
      </div>
      <div class="glass-card rounded-lg p-4 text-center">
        <div class="text-2xl md:text-3xl font-bold text-cyan">$13.0B</div>
        <div class="text-white text-sm">Gross Revenue</div>
      </div>
      <div class="glass-card rounded-lg p-4 text-center">
        <div class="text-2xl md:text-3xl font-bold text-copper">$2.79B</div>
        <div class="text-white text-sm">Tax Revenue</div>
      </div>
      <div class="glass-card rounded-lg p-4 text-center">
        <div class="text-2xl md:text-3xl font-bold text-cyan">8.71%</div>
        <div class="text-white text-sm">Avg Hold</div>
      </div>
    </div>
  </div>
</section>

---

## 📦 ARCHIVED: Leaflet Interactive Map (November 9, 2025)

**Status:** Removed and archived

**Reason:** The leaflet map lacked the depth and detail needed for the policy dashboard. The map has been replaced by the more robust ECharts choropleth visualization in the Analysis section.

**Archive Location:** `ARCHIVED_leaflet_map.md`

**What was removed:**
- Leaflet.js library references (CDN links)
- Leaflet CSS styles
- Interactive map section with circle markers
- `initMap()` function and initialization code
- Navigation link to map section

**Current Solution:** 
The dashboard now uses a single, more powerful ECharts-based choropleth map in the State-by-State Analysis section that provides:
- Better visual representation of state boundaries
- Interactive filtering by status and region
- Click-to-view detailed state information
- Integration with comprehensive state data
- Consistent styling with other dashboard visualizations

**Future Considerations:**
If additional data becomes available (detailed state boundaries, revenue overlays, timeline animations), the archived leaflet code can be enhanced and reintegrated. See `ARCHIVED_leaflet_map.md` for detailed notes on potential improvements.
