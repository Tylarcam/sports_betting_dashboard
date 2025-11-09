// Sports Betting Policy Dashboard - Main JavaScript
// Complete interactive functionality

// Complete state data for the dashboard
const statesData = [
    {name: 'Arizona', code: 'AZ', status: 'legal', date: '2021', online: true, retail: true, taxRate: 10, restrictions: 'None', region: 'West'},
    {name: 'Arkansas', code: 'AR', status: 'legal', date: '2019', online: true, retail: true, taxRate: 13, restrictions: 'None', region: 'South'},
    {name: 'Colorado', code: 'CO', status: 'legal', date: '2020', online: true, retail: true, taxRate: 10, restrictions: 'None', region: 'West'},
    {name: 'Connecticut', code: 'CT', status: 'legal', date: '2021', online: true, retail: true, taxRate: 13.75, restrictions: 'Tribal exclusivity', region: 'Northeast'},
    {name: 'Delaware', code: 'DE', status: 'legal', date: '2018', online: true, retail: true, taxRate: 50, restrictions: 'Lottery controlled', region: 'Northeast'},
    {name: 'Florida', code: 'FL', status: 'legal', date: '2021', online: true, retail: true, taxRate: 0, restrictions: 'Tribal compact', region: 'South'},
    {name: 'Illinois', code: 'IL', status: 'legal', date: '2020', online: true, retail: true, taxRate: 15, restrictions: 'In-person registration', region: 'Midwest'},
    {name: 'Indiana', code: 'IN', status: 'legal', date: '2019', online: true, retail: true, taxRate: 9.5, restrictions: 'None', region: 'Midwest'},
    {name: 'Iowa', code: 'IA', status: 'legal', date: '2019', online: true, retail: true, taxRate: 6.75, restrictions: 'None', region: 'Midwest'},
    {name: 'Kansas', code: 'KS', status: 'legal', date: '2022', online: true, retail: true, taxRate: 10, restrictions: 'None', region: 'Midwest'},
    {name: 'Kentucky', code: 'KY', status: 'legal', date: '2023', online: true, retail: true, taxRate: 9.75, restrictions: 'None', region: 'South'},
    {name: 'Louisiana', code: 'LA', status: 'legal', date: '2021', online: true, retail: true, taxRate: 15, restrictions: 'Parish-by-parish', region: 'South'},
    {name: 'Maine', code: 'ME', status: 'legal', date: '2022', online: true, retail: true, taxRate: 10, restrictions: 'None', region: 'Northeast'},
    {name: 'Maryland', code: 'MD', status: 'legal', date: '2021', online: true, retail: true, taxRate: 15, restrictions: 'None', region: 'South'},
    {name: 'Massachusetts', code: 'MA', status: 'legal', date: '2022', online: true, retail: true, taxRate: 20, restrictions: 'None', region: 'Northeast'},
    {name: 'Michigan', code: 'MI', status: 'legal', date: '2021', online: true, retail: true, taxRate: 8.4, restrictions: 'None', region: 'Midwest'},
    {name: 'Mississippi', code: 'MS', status: 'legal', date: '2018', online: false, retail: true, taxRate: 12, restrictions: 'On-premises only', region: 'South'},
    {name: 'Missouri', code: 'MO', status: 'pending', date: '2024', online: false, retail: false, taxRate: 0, restrictions: 'Launching 2025', region: 'Midwest'},
    {name: 'Montana', code: 'MT', status: 'legal', date: '2019', online: false, retail: true, taxRate: 0, restrictions: 'Lottery terminals', region: 'West'},
    {name: 'Nebraska', code: 'NE', status: 'legal', date: '2021', online: false, retail: true, taxRate: 20, restrictions: 'Casino only', region: 'Midwest'},
    {name: 'Nevada', code: 'NV', status: 'legal', date: '1949', online: true, retail: true, taxRate: 6.75, restrictions: 'None', region: 'West'},
    {name: 'New Hampshire', code: 'NH', status: 'legal', date: '2019', online: true, retail: true, taxRate: 51, restrictions: 'State monopoly', region: 'Northeast'},
    {name: 'New Jersey', code: 'NJ', status: 'legal', date: '2018', online: true, retail: true, taxRate: 13, restrictions: 'None', region: 'Northeast'},
    {name: 'New Mexico', code: 'NM', status: 'legal', date: '2018', online: false, retail: true, taxRate: 0, restrictions: 'Tribal only', region: 'West'},
    {name: 'New York', code: 'NY', status: 'legal', date: '2021', online: true, retail: true, taxRate: 51, restrictions: 'None', region: 'Northeast'},
    {name: 'North Carolina', code: 'NC', status: 'legal', date: '2023', online: true, retail: true, taxRate: 14, restrictions: 'None', region: 'South'},
    {name: 'Ohio', code: 'OH', status: 'legal', date: '2023', online: true, retail: true, taxRate: 10, restrictions: 'None', region: 'Midwest'},
    {name: 'Oregon', code: 'OR', status: 'legal', date: '2019', online: true, retail: true, taxRate: 51, restrictions: 'State monopoly', region: 'West'},
    {name: 'Pennsylvania', code: 'PA', status: 'legal', date: '2019', online: true, retail: true, taxRate: 36, restrictions: 'None', region: 'Northeast'},
    {name: 'Rhode Island', code: 'RI', status: 'legal', date: '2018', online: true, retail: true, taxRate: 51, restrictions: 'None', region: 'Northeast'},
    {name: 'South Dakota', code: 'SD', status: 'legal', date: '2020', online: false, retail: true, taxRate: 9, restrictions: 'Deadwood only', region: 'Midwest'},
    {name: 'Tennessee', code: 'TN', status: 'legal', date: '2019', online: true, retail: false, taxRate: 20, restrictions: 'Online only', region: 'South'},
    {name: 'Vermont', code: 'VT', status: 'legal', date: '2023', online: true, retail: false, taxRate: 20, restrictions: 'Online only', region: 'Northeast'},
    {name: 'Virginia', code: 'VA', status: 'legal', date: '2020', online: true, retail: true, taxRate: 15, restrictions: 'None', region: 'South'},
    {name: 'Washington', code: 'WA', status: 'legal', date: '2020', online: false, retail: true, taxRate: 0, restrictions: 'Tribal only', region: 'West'},
    {name: 'West Virginia', code: 'WV', status: 'legal', date: '2018', online: true, retail: true, taxRate: 10, restrictions: 'None', region: 'South'},
    {name: 'Wisconsin', code: 'WI', status: 'legal', date: '2021', online: false, retail: true, taxRate: 0, restrictions: 'Tribal only', region: 'Midwest'},
    {name: 'Wyoming', code: 'WY', status: 'legal', date: '2021', online: true, retail: false, taxRate: 10, restrictions: 'Online only', region: 'West'},
    // States where sports betting is not legal
    {name: 'Alabama', code: 'AL', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'South', notes: 'No significant legislative activity despite neighboring states legalizing'},
    {name: 'Alaska', code: 'AK', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'West', notes: 'Limited interest in sports betting legalization'},
    {name: 'California', code: 'CA', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'West', notes: 'Multiple ballot measures failed. Tribal interests and commercial operators at odds'},
    {name: 'Georgia', code: 'GA', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'South', notes: 'Legislative gridlock over gambling expansion'},
    {name: 'Hawaii', code: 'HI', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'West', notes: 'Strong opposition to gambling expansion'},
    {name: 'Idaho', code: 'ID', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'West', notes: 'Limited legislative interest'},
    {name: 'Minnesota', code: 'MN', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'Midwest', notes: 'Tribal-state compact negotiations ongoing'},
    {name: 'North Dakota', code: 'ND', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'Midwest', notes: 'Referendum rejected in 2022'},
    {name: 'Oklahoma', code: 'OK', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'South', notes: 'Tribal gaming framework complicates legalization'},
    {name: 'South Carolina', code: 'SC', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'South', notes: 'Conservative stance against gambling expansion'},
    {name: 'Texas', code: 'TX', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'South', notes: 'Strong casino industry opposition. Limited legislative support despite public interest'},
    {name: 'Utah', code: 'UT', status: 'none', date: 'N/A', online: false, retail: false, taxRate: 0, restrictions: 'Not legalized', region: 'West', notes: 'Constitutional ban on gambling. Strong cultural opposition'}
];

// Animation and UI Functions
function animateCounter(element, start, end, duration = 2000) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

function showTooltip(event, content) {
    const tooltip = document.getElementById('tooltip');
    if (!tooltip) return;
    
    tooltip.innerHTML = content;
    tooltip.style.display = 'block';
    tooltip.style.left = event.pageX + 10 + 'px';
    tooltip.style.top = event.pageY - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

// Chart Creation Functions
function createTimelineChart() {
    const ctx = document.getElementById('timelineChart');
    if (!ctx) return;
    
    const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    const newStates = [6, 7, 5, 10, 4, 4, 1];
    const cumulative = years.reduce((acc, year, index) => {
        acc.push((acc[index - 1] || 0) + newStates[index]);
        return acc;
    }, []);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'New Legalizations',
                data: newStates,
                backgroundColor: '#ff6b47',
                borderColor: '#ff6b47',
                type: 'bar'
            }, {
                label: 'Cumulative Total',
                data: cumulative,
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
                type: 'line',
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Year',
                        color: '#ffffff'
                    },
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'New Legalizations',
                        color: '#ffffff'
                    },
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Cumulative Total',
                        color: '#ffffff'
                    },
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                }
            }
        }
    });
}

function createRegionalChart() {
    const ctx = document.getElementById('regionalChart');
    if (!ctx) return;
    
    const regions = ['Northeast', 'Midwest', 'South', 'West'];
    const onlineData = [91, 58, 43, 54];
    const retailData = [82, 67, 64, 62];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: regions,
            datasets: [{
                label: 'Online/Mobile (%)',
                data: onlineData,
                backgroundColor: '#47d9ff'
            }, {
                label: 'Retail (%)',
                data: retailData,
                backgroundColor: '#ff6b47'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                x: {
                    stacked: false,
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    stacked: false,
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

/**
 * Creates/updates a US states choropleth map in #stateMap using ECharts
 * Colors by status, updates with current filter/sort
 */
function renderStateMap(filteredStates) {
    var chartDom = document.getElementById('stateMap');
    if (!chartDom || !window.echarts) return;
    if (!usMapReady) {
        chartDom.innerHTML = '<div style="color:#8daac8;padding:24px;text-align:center;">Loading US Map...</div>';
        return;
    }
    // Determine filter context
    const statusVal = document.getElementById('statusFilter')?.value || 'all';
    // Color palette
    const statusColor = {
        legal: '#47d9ff', // cyan
        pending: '#ffbf47', // warm gold
        none: '#ff4545', // vivid RED for Not Legal
        faded: '#232b3b', // dark fade for gray-out
    };
    // All US states by name for geometry present: from geoJSON
    const usStates = window.echarts.getMap('USA').geoJson.features.map(x=>x.properties.name);

    // Figure out what's in the filtered states
    let filteredStateNames = new Set(filteredStates.map(s=>s.name));
    let statusLookup = {};
    filteredStates.forEach(s => {statusLookup[s.name] = s.status;});
    
    // Compose the ECharts visual data, highlighting filtered states and fading others
    let mapData = usStates.map(name => {
        let st = statesData.find(s => s.name === name);
        let status = st ? st.status : 'none';
        let isInFilter = filteredStateNames.has(name);
        
        // If this state is in the filtered results, highlight it with appropriate color
        // Otherwise, fade it
        if (isInFilter) {
            // Assign value based on status to get correct color
            // 2 = legal (cyan), 1 = pending (gold), 0 = none (red), -1 = faded (dark)
            let value;
            if (status === 'legal') {
                value = 2;
            } else if (status === 'pending') {
                value = 1;
            } else {
                value = 0; // none (not legal) - should be red
            }
            
            return {
                name,
                value: value,
                status: status
            };
        } else {
            return {name, value: -1, status: 'faded'};
        }
    });
    // Legend HTML below map
    let mapLegend = document.getElementById('stateMapLegend');
    let mapCaption = document.getElementById('stateMapCaption');
    if (!mapLegend) {
        mapLegend = document.createElement('div');
        mapLegend.id = 'stateMapLegend';
        chartDom.parentNode.appendChild(mapLegend);
    }
    if (!mapCaption) {
        mapCaption = document.createElement('div');
        mapCaption.id = 'stateMapCaption';
        mapLegend.parentNode.appendChild(mapCaption);
    }
    // Build legend entries by filter
    if(statusVal === 'none') {
        mapLegend.innerHTML = `
            <div class="flex flex-row gap-6 mt-4 items-center text-sm">
                <span class="inline-block w-5 h-3 rounded-sm mr-1" style="background:${statusColor.none}"></span>
                <span class="mr-6">Not Legal</span>
                <span class="inline-block w-5 h-3 rounded-sm mr-1" style="background:${statusColor.faded}"></span><span class="">Other</span>
            </div>`;
        // Add a count caption - count states with status 'none' (not legal)
        let notLegalCount = filteredStates.length;
        mapCaption.innerHTML = `<div class="mt-1 text-gray-400 text-xs">Number of jurisdictions not legal: <span class="text-red-400 font-semibold">${notLegalCount}</span></div>`;
    } else {
        mapLegend.innerHTML = `
        <div class="flex flex-row gap-6 mt-4 items-center text-sm">
            <span class="inline-block w-5 h-3 rounded-sm mr-1" style="background:${statusColor.legal}"></span><span class="mr-6">Legal</span>
            <span class="inline-block w-5 h-3 rounded-sm mr-1" style="background:${statusColor.pending}"></span><span class="mr-6">Pending</span>
            <span class="inline-block w-5 h-3 rounded-sm mr-1" style="background:${statusColor.none}"></span><span>Not Legal</span>
        </div>`;
        mapCaption.innerHTML = '';
    }
    // ECharts config with click handler
    var map = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom);
    map.setOption({
        tooltip: {
            trigger: 'item', backgroundColor: '#222d3d', borderColor: '#333', textStyle: { color: '#fff', fontFamily: 'Inter, Arial' },
            formatter: function(params) {
                if (statusVal === 'none') {
                    if(params.data && params.data.status==='none')
                        return `<b>${params.name}</b><br><span style=\"color:${statusColor.none}\"><b>Not Legal</b></span>`;
                    else
                        return `<b>${params.name}</b><br><span style=\"color:${statusColor.faded}\"><i>(Legal or Pending)</i></span>`;
                } else {
                    if (!params.data) return params.name;
                    let sc = statusColor[params.data.status]||'#8daac8';
                    return `<b>${params.name}</b><br>Status: <span style=\"color:${sc}\">${(params.data.status||'none').replace(/^./, m=>m.toUpperCase())}</span>`;
                }
            }
        },
        visualMap: [{
            orient: 'horizontal', left: 'center', bottom: 18, show: false, min: -1, max: 2,
            inRange: statusVal === 'none'
                ? { color: [statusColor.faded, statusColor.none] } // -1=faded, 0=none (red)
                : { color: [statusColor.faded, statusColor.none, statusColor.pending, statusColor.legal] }, // -1=faded, 0=none, 1=pending, 2=legal
        }],
        series: [{
            type: 'map', map: 'USA', roam: false, aspectScale: 1.25, emphasis: {label: {show: true}},
            itemStyle: { borderColor: '#fff', borderWidth: 0.5, borderJoin: 'round', },
            data: mapData,
            label: { show: false, color: '#ccc', fontSize: 9 },
        }]
    });
    
    // Add click event to show state information card
    map.off('click');
    map.on('click', function(params) {
        const stateName = params.name;
        displayStateInfo(stateName);
    });
}

// Display state information card when a state is selected
function displayStateInfo(stateName) {
    const card = document.getElementById('selectedStateCard');
    const state = statesData.find(s => s.name === stateName);
    
    if (!card || !state) {
        if (card) card.style.display = 'none';
        return;
    }
    
    // Populate card with state data
    document.getElementById('selectedStateName').textContent = state.name;
    
    // Handle non-legal states differently
    if (state.status === 'none') {
        // For non-legal states, show contextual information
        document.getElementById('selectedStateStatus').textContent = 'Not Legal';
        document.getElementById('selectedStateStatus').style.color = '#ef4444'; // Red color
        
        // Show "N/A" or contextual info for other fields
        document.getElementById('selectedStateDate').textContent = state.notes || 'Not legalized';
        document.getElementById('selectedStateTaxRate').textContent = 'N/A';
        document.getElementById('selectedStateOptions').textContent = 'Not Available';
        document.getElementById('selectedStateRestrictions').textContent = state.notes || 'Sports betting is not legal in this state. ' + 
            (state.restrictions || '') + ' Legislative activity may change this status in the future.';
    } else {
        // For legal states, show normal information
        document.getElementById('selectedStateStatus').textContent = state.status.charAt(0).toUpperCase() + state.status.slice(1);
        document.getElementById('selectedStateStatus').style.color = state.status === 'legal' ? '#10b981' : '#f59e0b';
        document.getElementById('selectedStateDate').textContent = state.date;
        document.getElementById('selectedStateTaxRate').textContent = state.taxRate + '%';
        document.getElementById('selectedStateOptions').textContent = (state.online ? 'Online ' : '') + (state.retail ? 'Retail' : '');
        document.getElementById('selectedStateRestrictions').textContent = state.restrictions;
    }
    
    // Reset card position for animation
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.display = 'block';
    
    // Force reflow
    void card.offsetWidth;
    
    // Animate card in
    if (window.anime) {
        anime({
            targets: card,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 500,
            easing: 'easeOutCubic'
        });
    } else {
        // Fallback CSS animation if anime.js is not loaded
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }
}

// Policy Impact Calculator
function initCalculator() {
    const form = document.getElementById('calculatorForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const population = parseInt(document.getElementById('population').value);
        const medianIncome = parseInt(document.getElementById('medianIncome').value);
        const legalizationMethod = document.getElementById('legalizationMethod').value;
        const timeline = parseInt(document.getElementById('timeline').value);
        
        const projections = calculatePolicyImpact(population, medianIncome, legalizationMethod, timeline);
        displayProjections(projections);
    });
}

function calculatePolicyImpact(population, medianIncome, method, timeline) {
    // Enhanced calculation model based on real data patterns
    const baseRevenue = population * 0.001 * medianIncome * 0.0001;
    const methodMultiplier = {
        'legislation': 1.0,
        'referendum': 0.8,
        'tribal': 0.6
    }[method] || 1.0;
    
    const timelineMultiplier = timeline <= 180 ? 1.2 : timeline <= 365 ? 1.0 : 0.8;
    const incomeMultiplier = medianIncome > 70000 ? 1.1 : medianIncome > 50000 ? 1.0 : 0.9;
    
    const projectedRevenue = baseRevenue * methodMultiplier * timelineMultiplier * incomeMultiplier;
    const taxRevenue = projectedRevenue * 0.15; // Assuming 15% average tax rate
    const jobs = Math.round(population * 0.00005 * methodMultiplier * timelineMultiplier);
    const economicImpact = projectedRevenue * 1.3; // Including multiplier effects
    
    return {
        projectedRevenue: Math.round(projectedRevenue),
        taxRevenue: Math.round(taxRevenue),
        jobs: jobs,
        implementationTimeline: timeline,
        economicImpact: Math.round(economicImpact),
        method: method
    };
}

function displayProjections(projections) {
    const resultsDiv = document.getElementById('calculatorResults');
    if (!resultsDiv) return;
    
    resultsDiv.innerHTML = `
        <h3 class="text-2xl font-semibold text-white mb-6">Projected Impact</h3>
        <div class="projection-grid">
            <div class="projection-item">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Projected Annual Revenue</h4>
                <div class="projection-value text-cyan">$${projections.projectedRevenue.toLocaleString()}</div>
            </div>
            <div class="projection-item">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Tax Revenue (15%)</h4>
                <div class="projection-value text-copper">$${projections.taxRevenue.toLocaleString()}</div>
            </div>
            <div class="projection-item">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Total Economic Impact</h4>
                <div class="projection-value text-white">$${projections.economicImpact.toLocaleString()}</div>
            </div>
            <div class="projection-item">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Estimated Jobs Created</h4>
                <div class="projection-value text-cyan">${projections.jobs.toLocaleString()}</div>
            </div>
            <div class="projection-item">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Implementation Timeline</h4>
                <div class="projection-value text-copper">${projections.implementationTimeline} days</div>
            </div>
            <div class="projection-item">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Legalization Method</h4>
                <div class="projection-value text-white capitalize">${projections.method}</div>
            </div>
        </div>
        
        <div class="mt-8 p-4 bg-navy bg-opacity-50 rounded-lg">
            <h4 class="font-semibold text-white mb-3">Key Insights</h4>
            <div class="text-sm text-gray-300 space-y-2">
                <p>• Based on similar states with ${projections.method} approach</p>
                <p>• Implementation timeline ${projections.implementationTimeline <= 180 ? 'is faster than' : projections.implementationTimeline <= 365 ? 'matches' : 'is slower than'} average</p>
                <p>• Economic multiplier effect included in total impact calculation</p>
            </div>
        </div>
    `;
    
    resultsDiv.style.display = 'block';
    
    // Animate the results
    anime({
        targets: resultsDiv,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: 'easeOutQuart'
    });
}

// PDF Generation
function generatePDF() {
    const button = document.getElementById('generatePDF');
    if (!button) return;
    
    button.addEventListener('click', () => {
        button.textContent = 'Generating...';
        button.disabled = true;
        
        // Simulate PDF generation
        setTimeout(() => {
            // Create a simple PDF with jsPDF
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            doc.setFontSize(20);
            doc.text('Sports Betting Policy Analysis', 20, 30);
            doc.setFontSize(12);
            doc.text('Generated by Nobrainerco Data Team - 2025', 20, 45);
            
            doc.setFontSize(14);
            doc.text('Executive Summary', 20, 65);
            doc.setFontSize(10);
            doc.text('This report analyzes the rapid progression of sports betting legalization', 20, 80);
            doc.text('across U.S. states following the 2018 PASPA repeal.', 20, 90);
            
            // Add key metrics
            doc.text(`Total States with Legal Betting: 38`, 20, 110);
            doc.text(`States with Online Betting: 30`, 20, 120);
            doc.text(`Average Implementation Time: 245 days`, 20, 130);
            
            doc.save('sports-betting-policy-analysis.pdf');
            
            button.textContent = 'Download PDF Report';
            button.disabled = false;
        }, 2000);
    });
}

function parseCSV(text) {
    const lines = text.trim().split(/\r?\n/);
    const headers = lines[0].split(',').map(h => h.trim());
    const data = lines.slice(1).filter(l => l).map(line => {
        // split on commas not inside quotes
        const cols = [];
        let cur = '', inQ = false;
        for (let c of line) {
            if (c === '"') inQ = !inQ;
            else if (!inQ && c === ',') { cols.push(cur); cur = ''; }
            else cur += c;
        } cols.push(cur);
        return Object.fromEntries(cols.map((v,i)=>[headers[i],v.trim()]));
    });
    return data;
}

// Render the annual national revenue chart, by year and component
function createAnnualRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;
    fetch('../Sports_Betting_Policy_Dashboard/data/processed/AI_assisted_data_gathering_perplexity/sports_betting_national_annual_data.csv')
      .then(r => r.text()).then(parseCSV).then(data => {
        const years = data.map(r => r['Year']);
        const handle = data.map(r => +r['Handle ($B)']);
        const gross = data.map(r => +r['Gross Revenue ($B)']);
        const tax = data.map(r => +r['Tax Revenue ($B)']);
        const hold = data.map(r => +r['Average Hold (%)']);
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: years,
            datasets: [
              {label: 'Handle ($B)', data: handle, backgroundColor:'#47d9ff', borderColor:'#47d9ff', yAxisID:'y'},
              {label: 'Gross Revenue ($B)', data: gross, backgroundColor:'#ff6b47', borderColor:'#ff6b47', yAxisID:'y'},
              {label: 'Tax Revenue ($B)', data: tax, backgroundColor:'#8df59b', borderColor:'#8df59b', yAxisID:'y'},
              {label: 'Hold %', data: hold, type:'line', fill:false, yAxisID:'y2', borderColor:'#fff', backgroundColor:'#fff', pointStyle:'circle', borderWidth:2, pointRadius:3, tension:0.3}
            ]
          },
          options: {
            responsive:true,
            interaction:{mode:'index',intersect:false},
            plugins:{
              legend:{labels:{color:'#fff'}},
              tooltip:{callbacks:{
                label: ctx => `${ctx.dataset.label}: ${ctx.dataset.label==='Hold %' ? ctx.parsed.y + '%' : '$'+ctx.parsed.y}`
              }}
            },
            scales:{
              x:{ticks:{color:'#fff'}, grid:{color:'rgba(255,255,255,0.1)'}},
              y:{position:'left',title:{display:true,text:'Amount ($ Billions)',color:'#fff'},ticks:{color:'#fff'},grid:{color:'rgba(255,255,255,0.1)'}},
              y2:{position:'right',title:{display:true,text:'Hold %',color:'#fff'},beginAtZero:true,max:15,grid:{display:false},ticks:{color:'#fff'}}
            }
          }
        });
        // Caption below
        let cap = document.getElementById('revenueChartCaption');
        if(!cap){ cap = document.createElement('div'); cap.id='revenueChartCaption'; ctx.parentNode.appendChild(cap);}
        const last = data[data.length-1], prev = data[data.length-2];
        cap.innerHTML = `<div class='mt-2 text-gray-300 text-sm'>2024 YTD: <span class='text-cyan-300 font-bold'>$${(+last['Tax Revenue ($B)']).toLocaleString()}B</span> tax revenue &ndash; <span class='text-green-300 font-semibold'>up ${(100*((+last['Tax Revenue ($B)'])-(+prev['Tax Revenue ($B)']))/(+prev['Tax Revenue ($B)'])).toFixed(1)}%</span> year-over-year.</div>`;
    });
}

// Helper for tax rate coloring
function colorForTaxRate(rate) {
    if(isNaN(rate)) return '#222d3d';
    if(+rate>35) return '#ff4545'; // high red
    if(+rate>15) return '#ffbf47'; // gold
    if(+rate>7) return '#47d9ff'; // cyan
    return '#8df59b'; // pale green for lowest
}

// Render horizontal bar chart of state-by-state tax revenue
function createTaxRevenueByStateChart() {
    const ctx = document.getElementById('taxChart');
    if (!ctx) return;
    fetch('../Sports_Betting_Policy_Dashboard/data/processed/AI_assisted_data_gathering_perplexity/sports_betting_state_data.csv')
      .then(r => r.text()).then(parseCSV).then(data => {
        let filtered = data.filter(d => d['Tax Rev ($M)'] && +d['Tax Rev ($M)'] > 0);
        filtered.sort((a,b) => +b['Tax Rev ($M)'] - +a['Tax Rev ($M)']);
        const states = filtered.map(r => r['State']);
        const taxRev = filtered.map(r => +r['Tax Rev ($M)']);
        const taxRate = filtered.map(r => +r['Tax Rate (%)']);
        const barColors = filtered.map(r => colorForTaxRate(+r['Tax Rate (%)']));
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: states,
            datasets: [{
              label:'Tax Revenue ($M, last full year)',
              data: taxRev,
              backgroundColor: barColors,
              borderColor:'#ffffff20', borderWidth:1
            }]
          },
          options: {
            indexAxis: 'y',
            responsive:true,
            plugins:{
              legend:{labels:{color:'#fff'}},
              tooltip:{callbacks:{label:ctx=>`Tax Rev: $${ctx.parsed.x}M | Tax Rate: ${taxRate[ctx.dataIndex]}%`}}
            },
            scales:{
              x:{ticks:{color:'#fff'},grid:{color:'rgba(255,255,255,0.1)'},title:{display:true,text:'Tax Revenue ($ Millions)',color:'#fff'}},
              y:{ticks:{color:'#fff'},grid:{color:'rgba(255,255,255,0.1)'}}
            }
          }
        });
        // Add caption
        let cap = document.getElementById('taxChartCaption');
        if(!cap){ cap = document.createElement('div'); cap.id='taxChartCaption'; ctx.parentNode.appendChild(cap);}
        let top = filtered[0];
        const total = filtered.reduce((sum,s)=>sum+ +s['Tax Rev ($M)'],0);
        cap.innerHTML = `<div class='mt-2 text-gray-300 text-sm'>Total US sports betting tax for states reporting: <span class='text-copper font-bold'>$${Math.round(total).toLocaleString()}M</span>. Top state: <span class='text-red-400 font-bold'>${top['State']} ($${top['Tax Rev ($M)']}M)</span> at ${top['Tax Rate (%)']}%.</div>`;
    });
}

// Initialize everything when DOM is loaded
// --- USA map geoJSON loader at top scope ---
let usMapReady = false;
let usMapLoadPromise = (function loadEchartsUSAMap() {
    return new Promise((resolve, reject) => {
        if (window.echarts && window.echarts.getMap && window.echarts.getMap('USA')) {
            usMapReady = true; resolve(); return;
        }
        // Show loading spinner/message if desired
        const el = document.getElementById('stateMap');
        if (el) el.innerHTML = '<div style="color:#8daac8;padding:24px;text-align:center;">Loading US Map...</div>';
        fetch('https://code.highcharts.com/mapdata/countries/us/us-all.geo.json')
            .then(r => {
                if (!r.ok) throw new Error('Failed to fetch US map data');
                return r.json();
            })
            .then(function(geojson) {
                if (window.echarts) window.echarts.registerMap('USA', geojson);
                usMapReady = true;
                resolve();
            })
            .catch(err => {
                console.error('US geoJSON load error', err);
                const el = document.getElementById('stateMap');
                if (el) el.innerHTML = '<div style="color:#ff6b47;padding:24px;text-align:center;">Failed to load US map.<br>'+err+'</div>';
                reject(err);
            });
    });
})();

// Update filter counter display
function updateFilterCounter(filteredStates) {
    const counter = document.getElementById('filterCounter');
    if (!counter) return;
    
    const statusVal = document.getElementById('statusFilter')?.value || 'all';
    const regionVal = document.getElementById('regionFilter')?.value || 'all';
    const totalStates = statesData.length;
    const count = filteredStates.length;
    const percentage = Math.round((count / totalStates) * 100);
    
    // Determine status label
    let statusLabel = 'All statuses';
    if (statusVal === 'legal') statusLabel = 'Legal';
    else if (statusVal === 'pending') statusLabel = 'Pending';
    else if (statusVal === 'none') statusLabel = 'Not Legal';
    
    let regionLabel = '';
    if (regionVal !== 'all') {
        regionLabel = ` (${regionVal})`;
    }
    
    counter.textContent = `Showing ${count} of ${totalStates} jurisdictions (${percentage}%) – ${statusLabel}${regionLabel}`;
    counter.className = 'text-sm font-medium text-gray-300 animate-on-scroll';
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize counters
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        animateCounter(counter, 0, target);
    });
    
    // Initialize charts
    createAnnualRevenueChart();
    createTaxRevenueByStateChart();
    
    // Initialize calculator
    initCalculator();
    
    // Initialize PDF generation
    generatePDF();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Helper: get currently filtered states
    function getFilteredStates() {
        const statusVal = document.getElementById('statusFilter')?.value || 'all';
        const regionVal = document.getElementById('regionFilter')?.value || 'all';
        
        // Normalize filter value to match data status values
        let normalizedStatus = statusVal;
        if (statusVal === 'Not Legal' || statusVal === 'not_legal') {
            normalizedStatus = 'none';
        }
        
        return statesData.filter(s =>
            (normalizedStatus === 'all' || s.status === normalizedStatus)
         && (regionVal === 'all' || s.region === regionVal)
        );
    }
    
    // Grid rendering removed - users interact via map clicks only
    
    // --- Only draw the map after geoJSON loads ---
    usMapLoadPromise.then(() => {
        renderStateMap(getFilteredStates());
    }).catch(() => {/* Already shown error */});
    
    // Re-render map on filter change
    const filterIds = ['statusFilter', 'regionFilter'];
    filterIds.forEach(id => {
        var sel = document.getElementById(id);
        if (sel) {
            sel.addEventListener('change', () => {
                const filtered = getFilteredStates();
                updateFilterCounter(filtered);
                if (usMapReady) renderStateMap(filtered);
            });
        }
    });
    
    // Initialize filter counter on page load
    updateFilterCounter(getFilteredStates());
});

// ECharts USA map resource loader (insert once on first run)
// This block is now redundant as the loader is moved to the top scope
// (function loadEchartsUSAMap() {
//     if (window.echarts && window.echarts.getMap && window.echarts.getMap('USA')) return;
//     fetch('https://code.highcharts.com/mapdata/countries/us/us-all.geo.json').then(r=>r.json()).then(function(geojson){
//         if(window.echarts) window.echarts.registerMap('USA', geojson);
//     });
// })();

// Export functions for use in other modules
window.policyApp = {
    statesData,
    animateCounter,
    showTooltip,
    hideTooltip,
    calculatePolicyImpact
};