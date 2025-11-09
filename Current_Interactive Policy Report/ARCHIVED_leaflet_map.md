# Archived: Leaflet Interactive Map Code

**Date Archived:** November 9, 2025

**Reason for Archival:** The leaflet map interactive visual was lacking the depth required for the policy dashboard. This code is preserved in case additional data becomes available to enhance the map in the future.

**Potential Improvements for Future Implementation:**
- More detailed state boundary data
- Click-through to detailed state profiles
- Better tooltip/popup styling and information
- Integration with the state data CSV files for real-time updates
- Heat map overlays for revenue data
- Timeline slider to show progression of legalization
- Better mobile responsiveness

---

## HTML Section (Removed from index.html, lines 380-418)

```html
<!-- Interactive Map Section -->
<section id="map" class="py-20 bg-navy bg-opacity-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-white mb-4">Interactive State Map</h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore the current status of sports betting legalization across all 50 states. 
                Hover over states for detailed information and click for comprehensive analysis.
            </p>
        </div>
        
        <div class="glass-card rounded-lg p-8 animate-on-scroll">
            <div class="mb-6">
                <div class="flex flex-wrap justify-center gap-4 mb-4">
                    <div class="flex items-center">
                        <div class="w-4 h-4 bg-green-500 rounded mr-2"></div>
                        <span class="text-sm text-gray-300">Legal</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                        <span class="text-sm text-gray-300">Pending</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-4 h-4 bg-red-500 rounded mr-2"></div>
                        <span class="text-sm text-gray-300">Not Legal</span>
                    </div>
                </div>
            </div>
            
            <div id="map" class="w-full"></div>
            
            <div class="mt-6 text-center">
                <p class="text-sm text-gray-400">
                    Interactive map showing sports betting status by state. Click on any state for detailed information.
                </p>
            </div>
        </div>
    </div>
</section>
```

---

## CSS Styles (Removed from index.html, lines 223-236)

```css
#map {
    height: 500px;
    border-radius: 8px;
    border: 1px solid rgba(255, 107, 71, 0.3);
}

.leaflet-container {
    background: rgba(15, 20, 25, 0.9);
}

.leaflet-control-container .leaflet-control {
    background: rgba(26, 35, 50, 0.9);
    border: 1px solid rgba(255, 107, 71, 0.3);
}
```

---

## Library References (Removed from index.html head section, lines 16-17)

```html
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
```

---

## JavaScript - Map Initialization Function (Removed from index.html, lines 864-944)

```javascript
// Map initialization
function initMap() {
    const map = L.map('map').setView([39.8283, -98.5795], 4);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        opacity: 0.7
    }).addTo(map);
    
    // State data with coordinates and status
    const states = [
        {name: 'Arizona', code: 'AZ', lat: 33.4484, lng: -112.0740, status: 'legal', online: true, retail: true, taxRate: 10},
        {name: 'Arkansas', code: 'AR', lat: 34.7465, lng: -92.2896, status: 'legal', online: true, retail: true, taxRate: 13},
        {name: 'Colorado', code: 'CO', lat: 39.7392, lng: -104.9903, status: 'legal', online: true, retail: true, taxRate: 10},
        {name: 'Connecticut', code: 'CT', lat: 41.7658, lng: -72.6734, status: 'legal', online: true, retail: true, taxRate: 13.75},
        {name: 'Delaware', code: 'DE', lat: 39.1582, lng: -75.5244, status: 'legal', online: true, retail: true, taxRate: 50},
        {name: 'Florida', code: 'FL', lat: 30.4518, lng: -84.2807, status: 'legal', online: true, retail: true, taxRate: 0},
        {name: 'Illinois', code: 'IL', lat: 39.8017, lng: -89.6437, status: 'legal', online: true, retail: true, taxRate: 15},
        {name: 'Indiana', code: 'IN', lat: 39.7684, lng: -86.1581, status: 'legal', online: true, retail: true, taxRate: 9.5},
        {name: 'Iowa', code: 'IA', lat: 41.5868, lng: -93.6250, status: 'legal', online: true, retail: true, taxRate: 6.75},
        {name: 'Kansas', code: 'KS', lat: 39.0483, lng: -95.6780, status: 'legal', online: true, retail: true, taxRate: 10},
        {name: 'Kentucky', code: 'KY', lat: 38.2009, lng: -84.8733, status: 'legal', online: true, retail: true, taxRate: 9.75},
        {name: 'Louisiana', code: 'LA', lat: 30.9843, lng: -91.9623, status: 'legal', online: true, retail: true, taxRate: 15},
        {name: 'Maine', code: 'ME', lat: 44.3106, lng: -69.7795, status: 'legal', online: true, retail: true, taxRate: 10},
        {name: 'Maryland', code: 'MD', lat: 38.9072, lng: -77.0369, status: 'legal', online: true, retail: true, taxRate: 15},
        {name: 'Massachusetts', code: 'MA', lat: 42.3601, lng: -71.0589, status: 'legal', online: true, retail: true, taxRate: 20},
        {name: 'Michigan', code: 'MI', lat: 42.3314, lng: -84.5467, status: 'legal', online: true, retail: true, taxRate: 8.4},
        {name: 'Mississippi', code: 'MS', lat: 32.2988, lng: -90.1848, status: 'legal', online: false, retail: true, taxRate: 12},
        {name: 'Montana', code: 'MT', lat: 46.8797, lng: -110.3626, status: 'legal', online: false, retail: true, taxRate: 0},
        {name: 'Nevada', code: 'NV', lat: 39.1638, lng: -119.7674, status: 'legal', online: true, retail: true, taxRate: 6.75},
        {name: 'New Hampshire', code: 'NH', lat: 43.2081, lng: -71.5376, status: 'legal', online: true, retail: true, taxRate: 51},
        {name: 'New Jersey', code: 'NJ', lat: 40.2238, lng: -74.7640, status: 'legal', online: true, retail: true, taxRate: 13},
        {name: 'New Mexico', code: 'NM', lat: 34.5199, lng: -105.8701, status: 'legal', online: false, retail: true, taxRate: 0},
        {name: 'New York', code: 'NY', lat: 42.6526, lng: -73.7562, status: 'legal', online: true, retail: true, taxRate: 51},
        {name: 'North Carolina', code: 'NC', lat: 35.5397, lng: -79.8431, status: 'legal', online: true, retail: true, taxRate: 14},
        {name: 'Ohio', code: 'OH', lat: 39.9612, lng: -82.9988, status: 'legal', online: true, retail: true, taxRate: 10},
        {name: 'Oregon', code: 'OR', lat: 44.9378, lng: -123.0351, status: 'legal', online: true, retail: true, taxRate: 51},
        {name: 'Pennsylvania', code: 'PA', lat: 40.2732, lng: -76.8867, status: 'legal', online: true, retail: true, taxRate: 36},
        {name: 'Rhode Island', code: 'RI', lat: 41.5801, lng: -71.4774, status: 'legal', online: true, retail: true, taxRate: 51},
        {name: 'South Dakota', code: 'SD', lat: 44.3683, lng: -100.3364, status: 'legal', online: false, retail: true, taxRate: 9},
        {name: 'Tennessee', code: 'TN', lat: 36.1627, lng: -86.7816, status: 'legal', online: true, retail: false, taxRate: 20},
        {name: 'Vermont', code: 'VT', lat: 44.2627, lng: -72.5715, status: 'legal', online: true, retail: false, taxRate: 20},
        {name: 'Virginia', code: 'VA', lat: 37.5407, lng: -77.4360, status: 'legal', online: true, retail: true, taxRate: 15},
        {name: 'Washington', code: 'WA', lat: 47.0379, lng: -122.9007, status: 'legal', online: false, retail: true, taxRate: 0},
        {name: 'West Virginia', code: 'WV', lat: 38.3498, lng: -81.6326, status: 'legal', online: true, retail: true, taxRate: 10},
        {name: 'Wisconsin', code: 'WI', lat: 43.0731, lng: -89.4012, status: 'legal', online: false, retail: true, taxRate: 0},
        {name: 'Wyoming', code: 'WY', lat: 43.0759, lng: -107.2903, status: 'legal', online: true, retail: false, taxRate: 10}
    ];
    
    states.forEach(state => {
        const color = state.status === 'legal' ? '#10b981' : state.status === 'pending' ? '#f59e0b' : '#ef4444';
        
        const marker = L.circleMarker([state.lat, state.lng], {
            radius: 8,
            fillColor: color,
            color: '#ffffff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);
        
        const popupContent = `
            <div class="text-navy">
                <h3 class="font-bold text-lg mb-2">${state.name} (${state.code})</h3>
                <p class="mb-2"><strong>Status:</strong> ${state.status.charAt(0).toUpperCase() + state.status.slice(1)}</p>
                <p class="mb-2"><strong>Online:</strong> ${state.online ? 'Yes' : 'No'}</p>
                <p class="mb-2"><strong>Retail:</strong> ${state.retail ? 'Yes' : 'No'}</p>
                <p><strong>Tax Rate:</strong> ${state.taxRate}%</p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        
        marker.on('mouseover', function() {
            this.setRadius(12);
        });
        
        marker.on('mouseout', function() {
            this.setRadius(8);
        });
    });
}
```

---

## Function Call Removed (from index.html embedded script, line 839)

```javascript
// Initialize map
initMap();
```

---

## Navigation Link (Removed from index.html, line 250)

```html
<a href="#map" class="nav-link text-white hover:text-copper px-3 py-2 text-sm font-medium">Map</a>
```

---

## Notes for Future Implementation

**Current Limitations:**
1. Simple circle markers don't provide geographic context of state boundaries
2. Basic popup information lacks visual appeal and interactivity
3. No integration with the existing ECharts map used in the analysis section
4. Redundant with the better ECharts choropleth map already in the analysis section (line 563)
5. OpenStreetMap tiles at this zoom level don't provide clear state boundaries

**Recommended Enhancements:**
1. Use actual state boundary GeoJSON data for proper polygons
2. Add choropleth coloring by revenue or tax rate
3. Integrate with existing CSV data sources
4. Add click-through to detailed state profiles
5. Consider consolidating with the existing ECharts map for consistency
6. Add legend and better tooltips
7. Mobile-responsive design improvements
8. Loading states and error handling

**Data Sources for Future Use:**
- State boundary GeoJSON: https://code.highcharts.com/mapdata/countries/us/us-all.geo.json (already used in ECharts map)
- Sports betting data CSVs in `../Sports_Betting_Policy_Dashboard/data/processed/AI_assisted_data_gathering_perplexity/`


