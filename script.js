

// Initial plant list
let plants = [
    { name: "Money Plant", 
        water: "200ml",
         watered: false,
        image:"money_plant.jpg"},

    { name: "Aloe Vera",
         water: "100ml", 
         watered: false ,
        image:"aloevera_plant.jpg"},

    { name: "Table Rose" ,
         water:"150ml",
         watered:false,
        image:"table_rose.webp"},

    { name: "Tomato", 
        water: "200ml", 
        watered: false ,
       image:"tomato_plant.jpg"},

    { name: "Pepper chilly",
         water: "100ml", 
         watered: false,
        image:"pepper_chilly_plant.jpg" },

    { name: "Snake plant" ,
         water:"150ml",
         watered:false,
        image:"snake_plant.jpg"},

    { name: "Hibiscus", 
        water: "200ml", 
        watered: false ,
      image:"hibiscus_plant.jpg"},

    { name: "Rose", 
        water: "100ml",
         watered: false ,
        image:"rose.jpg"},

    { name: "Jade" , 
        water:"150ml",
        watered:false,
      image:"jade_plant.jpg"},

    { name: "Tulasi",
         water: "200ml",
          watered: false,
        image:"tulasi_plant.jpg" },

    { name: "Curry Leave", 
        water: "100ml", 
        watered: false ,
      image:"curry_leaves.jpg"},

    { name: "Marudhani leaves",
         water:"150ml",
         watered:false,
        image:"marudhani_plant.webp"}

];



function showPage(page) {
    const content = document.getElementById('content');


    

    
    if (page === 'home') {

    let html = `<div class="home-container">`;

    html += `
        <div class="card">
            <h3>Add a New Plant</h3>
            <input type="text" id="plantName" placeholder="Plant Name...">
            <br><br>
            <button onclick="addNewPlant()">Add Plant</button>
        </div>
    `;

    plants.forEach((p, index) => {
    html += `
        <div class="card">

            <img src="${p.image}" alt="${p.name}" class="plant-img">

            <h3>${p.name}</h3>

            <p>Water Needed: ${p.water}</p>

            <button onclick="toggleWater(${index})">
                ${p.watered ? "Watered ✅" : "Mark as Watered"}
            </button>

        </div>
    `;
});


    html += `</div>`;

    content.innerHTML = html;
}


else if (page === 'about') {
        content.innerHTML = `
            <div class="card" style="min-height: 80vh; color: #250649; padding: 30px;">
                <div style="text-align: center; max-width: 800px; margin: 0 auto;">
                    <h1 style="font-size: 2.5rem; margin-bottom: 10px;">🌿 About Our Smart Plant Tracker</h1>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: #4a5568;">
                        Welcome to your personal gardening assistant. This platform bridges the gap between 
                        technology and nature, helping students, professionals, and home gardening enthusiasts 
                        maintain optimal plant health through data-driven tracking and offline reliability.
                    </p>
                </div>

                <!-- Mission & Impact Grid -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 40px;">
                    <div style="padding: 25px; border-radius: 12px; background: #eef7fa; border-left: 6px solid #1ba3e2; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                        <h3 style="color: #01579b; margin-bottom: 10px;">🎯 Our Mission</h3>
                        <p style="line-height: 1.6; color: #334155;">To provide an offline-first, intuitive solution for monitoring plant growth, ensuring that no plant goes unwatered and every plant gets the care it deserves.</p>
                    </div>
                    
                    <div style="padding: 25px; border-radius: 12px; background: #fdf6ec; border-left: 6px solid #ec9913; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                        <h3 style="color: #b36b00; margin-bottom: 10px;">💧 Why Tracking Matters</h3>
                        <p style="line-height: 1.6; color: #334155;">Over-watering and under-watering are the leading causes of plant decay. Our tracker keeps a precise record of water intake to ensure your plants thrive in any environment.</p>
                    </div>
                </div>

                <!-- Quick Impact Stats Strip -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 30px; text-align: center;">
                    <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; border: 1px solid #bbf7d0;">
                        <h2 style="color: #16bd79; margin: 0; font-size: 1.8rem;">100%</h2>
                        <p style="margin: 5px 0 0 0; color: #166534; font-weight: bold;">Offline-First Reliability</p>
                    </div>
                    <div style="background: #f0f9ff; padding: 20px; border-radius: 10px; border: 1px solid #bae6fd;">
                        <h2 style="color: #1685f8; margin: 0; font-size: 1.8rem;">Real-Time</h2>
                        <p style="margin: 5px 0 0 0; color: #0369a1; font-weight: bold;">Hydration Monitoring</p>
                    </div>
                    <div style="background: #fdf4f8; padding: 20px; border-radius: 10px; border: 1px solid #fbcfe8;">
                        <h2 style="color: #e21358; margin: 0; font-size: 1.8rem;">Smart</h2>
                        <p style="margin: 5px 0 0 0; color: #9f1239; font-weight: bold;">Species Recommendations</p>
                    </div>
                </div>

                <!-- Key Features Section -->
                <div style="margin-top: 40px; background: #fafafa; padding: 30px; border-radius: 12px; border: 1px solid #eaeaea;">
                    <h3 style="margin-top: 0; color: #250649;">🚀 Key System Features</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
                        <div>
                            <p style="margin: 0 0 5px 0;"><strong>⚡ Real-Time Status</strong></p>
                            <p style="margin: 0; color: #64748b; font-size: 0.95rem;">Instantly toggle between watered and unwatered states across your entire collection.</p>
                        </div>
                        <div>
                            <p style="margin: 0 0 5px 0;"><strong>💡 Smart Recommendations</strong></p>
                            <p style="margin: 0; color: #64748b; font-size: 0.95rem;">Get customized care tips tailored specifically to your plant varieties.</p>
                        </div>
                        <div>
                            <p style="margin: 0 0 5px 0;"><strong>📡 Offline Accessibility</strong></p>
                            <p style="margin: 0; color: #64748b; font-size: 0.95rem;">Designed for seamless tracking even without constant internet access.</p>
                        </div>
                        <div>
                            <p style="margin: 0 0 5px 0;"><strong>📈 Growth Monitoring</strong></p>
                            <p style="margin: 0; color: #64748b; font-size: 0.95rem;">Keep a continuous log of your plant's developmental progress over time.</p>
                        </div>
                    </div>
                </div>
                
                <!-- Footer / Project Signoff -->
                <div style="margin-top: 40px; text-align: center; border-top: 1px solid #eaeaea; padding-top: 20px;">
                    <p style="font-style: italic; color: #64748b; margin: 0;">
                        Developed as a Final Year Project for 2026. Dedicated to sustainable urban farming and green living.
                    </p>
                </div>
            </div>
        `;
    }



else if (page === 'environment condition') {

    renderEnvironmentDashboard(content);
}








else if (page === 'recommendations') {
        content.innerHTML = `
            <div class="card" style="min-height: 80vh; color: #250649; padding: 35px;">
                <!-- Header Banner -->
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; border-bottom: 2px solid #f1f5f9; padding-bottom: 20px;">
                    <div>
                        <h1 style="margin: 0; font-size: 2.2rem;">🌿 Plant Care Masterclass & Knowledge Base</h1>
                        <p style="font-size: 1.05rem; color: #64748b; margin: 8px 0 0 0;">
                            Comprehensive guidelines, diagnostic checklists, and tailored strategies to help your green space flourish.
                        </p>
                    </div>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <span style="background: #e0f2fe; color: #0369a1; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: bold;">🌱 Verified Care</span>
                        <span style="background: #dcfce7; color: #166534; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: bold;">💡 Pro Insights</span>
                    </div>
                </div>

                <!-- Essential Care Cards (5 Grid Items) -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-top: 35px;">
                    <div style="background: #f0fdf4; padding: 22px; border-radius: 12px; border-left: 6px solid #22c55e; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                        <div style="font-size: 1.8rem; margin-bottom: 10px;">☀️</div>
                        <h3 style="color: #15803d; margin-top: 0;">Sunlight Exposure</h3>
                        <p style="color: #334155; line-height: 1.6; margin-bottom: 0;">Most indoor tropicals thrive in <strong>bright, indirect light</strong>. Position plants near east or south-facing windows with sheer curtains to prevent leaf scorch.</p>
                    </div>

                    <div style="background: #fffbeb; padding: 22px; border-radius: 12px; border-left: 6px solid #f59e0b; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                        <div style="font-size: 1.8rem; margin-bottom: 10px;">💧</div>
                        <h3 style="color: #b45309; margin-top: 0;">Watering Strategy</h3>
                        <p style="color: #334155; line-height: 1.6; margin-bottom: 0;">Always test the top 1-2 inches of soil with your finger. Water thoroughly until it drains out the bottom, and avoid letting pots sit in standing water.</p>
                    </div>

                    <div style="background: #f0f9ff; padding: 22px; border-radius: 12px; border-left: 6px solid #0ea5e9; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                        <div style="font-size: 1.8rem; margin-bottom: 10px;">🧪</div>
                        <h3 style="color: #0369a1; margin-top: 0;">Soil & Nutrition</h3>
                        <p style="color: #334155; line-height: 1.6; margin-bottom: 0;">Utilize well-draining aerated potting mixes (perlite + peat moss). Feed diluted organic fertilizer once a month during spring and summer active growth.</p>
                    </div>

                    <div style="background: #fff1f2; padding: 22px; border-radius: 12px; border-left: 6px solid #f43f5e; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                        <div style="font-size: 1.8rem; margin-bottom: 10px;">🛡️</div>
                        <h3 style="color: #be123c; margin-top: 0;">Pest & Disease Prevention</h3>
                        <p style="color: #334155; line-height: 1.6; margin-bottom: 0;">Inspect leaf undersides weekly for spider mites or mealybugs. Isolate affected plants immediately and wipe leaves with mild neem oil solution.</p>
                    </div>

                </div>

                <!-- NEW SECTION: Species-Specific Cheat Sheet -->
                <div style="margin-top: 40px; background: #fafafa; padding: 30px; border-radius: 12px; border: 1px solid #e5e5e5;">
                    <h3 style="margin-top: 0; color: #1c1917; font-size: 1.3rem;">🪴 Specific Plant Category Guidelines</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">
                        <div style="background: white; padding: 18px; border-radius: 10px; border: 1px solid #e2e8f0;">
                            <h4 style="margin: 0 0 8px 0; color: #15803d;">🌵 Succulents & Cacti</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">Requires direct sun and low humidity. Allow soil to dry out 100% between waterings.</p>
                        </div>
                        <div style="background: white; padding: 18px; border-radius: 10px; border: 1px solid #e2e8f0;">
                            <h4 style="margin: 0 0 8px 0; color: #0284c7;">🌿 Foliage & Ferns</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">Prefers high ambient humidity and damp soil. Mist foliage or place on pebble trays regularly.</p>
                        </div>
                        <div style="background: white; padding: 18px; border-radius: 10px; border: 1px solid #e2e8f0;">
                            <h4 style="margin: 0 0 8px 0; color: #d97706;">🪴 Flowering Indoor Varieties</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">Requires bright light to encourage blooming. Deadhead spent flowers to redirect energy to roots.</p>
                        </div>
                    </div>
                </div>

                <!-- Quick Routine Checklist -->
                <div style="margin-top: 35px; background: #fafaf9; border: 1px solid #e7e5e4; padding: 25px; border-radius: 12px;">
                    <h3 style="margin-top: 0; color: #1c1917;">📋 Quick Plant Maintenance Checklist</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px; margin-top: 15px;">
                        <div style="background: white; padding: 12px 15px; border-radius: 8px; border: 1px solid #e7e5e4; font-size: 0.9rem; color: #44403c;">
                            ✅ Check soil moisture every 2 days
                        </div>
                        <div style="background: white; padding: 12px 15px; border-radius: 8px; border: 1px solid #e7e5e4; font-size: 0.9rem; color: #44403c;">
                            ✅ Wipe leaf surfaces monthly to clear dust
                        </div>
                        <div style="background: white; padding: 12px 15px; border-radius: 8px; border: 1px solid #e7e5e4; font-size: 0.9rem; color: #44403c;">
                            ✅ Prune yellow leaves near the plant base
                        </div>
                        <div style="background: white; padding: 12px 15px; border-radius: 8px; border: 1px solid #e7e5e4; font-size: 0.9rem; color: #44403c;">
                            ✅ Rotate pot 90 degrees weekly for stem balance
                        </div>
                    </div>
                </div>

                <!-- Pro-Tip Banner -->
                <div style="margin-top: 35px; padding: 25px; background: linear-gradient(135deg, #065f46, #047857); color: white; border-radius: 12px; box-shadow: 0 4px 10px rgba(4, 120, 87, 0.2);">
                    <h3 style="margin-top: 0; color: #a7f3d0;">💡 Golden Rule of Indoor Plant Care</h3>
                    <p style="margin-bottom: 0; line-height: 1.7; color: #ecfdf5;">When in doubt, it is always safer to under-water than to over-water! Most indoor plants recover quickly from slight underwatering, whereas root rot caused by overwatering is far harder to reverse.</p>
                </div>
            </div>
        `;
    }




    else if (page === 'logs') {
    // 1. Build the basic layout and table header
    content.innerHTML = `
        <div class="card" style="min-height: 80vh;">
            <h1>📜 Watering History</h1>
            <p style="color: #0c184c; margin-bottom: 20px;">Review the activity log for your entire plant collection.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 1rem;">
                <thead>
                    <tr style="background-color: #2e7d32; color: white;">
                        <th style="padding: 15px; text-align: left;">Plant Name</th>
                        <th style="padding: 15px; text-align: left;">Water Required</th>
                        <th style="padding: 15px; text-align: left;">Status</th>
                    </tr>
                </thead>
                <tbody id="log-table-body">
                    <!-- Dynamic rows will be inserted here -->
                </tbody>
            </table>

            <div style="margin-top: 40px; padding: 20px; background: #e8f5e9; border-radius: 10px; border: 1px solid #c8e6c9;">
                <h3>📊 Data Insights</h3>
                <p>Keeping your logs updated helps ensure your offline agricultural system tracks hydration accurately across all varieties.</p>
            </div>
        </div>
    `;
    

    // 2. Select the table body where rows will go
    const tableBody = document.getElementById('log-table-body');

    // 3. Loop through your 'plants' array to create a row for every single plant
    plants.forEach(p => {
        // Determine status text and color based on the 'watered' boolean
        const statusText = p.watered ? 'Watered ✅' : 'Not Watered ❌';
        const statusColor = p.watered ? '#4caf50' : '#f44336';

        tableBody.innerHTML += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 15px; font-weight: bold;">${p.name}</td>
                <td style="padding: 15px;">${p.water}</td>
                <td style="padding: 15px; color: ${statusColor}; font-weight: bold;">${statusText}</td>
            </tr>
        `;
    });
}



}



    
function renderEnvironmentDashboard(content) {

    content.innerHTML = `

    <div class="environment-dashboard">

        <!-- Dashboard Heading -->
        <div class="dashboard-heading">
            <h1> Welcome Back User !👋</h1>
            <p> Your plants are thriving today</p>
        </div>

        <!-- Top Metric Cards -->
        <div class="metric-grid">

            <!-- Watering -->
            <div class="metric-card">
                <span class="metric-icon">💧</span>
                <h3>Watering</h3>
                <div class="metric-value">
                    2.1 <span>Liters per day</span>
                </div>
                <div class="bar-chart">
                    <div style="height:35%"></div>
                    <div style="height:65%"></div>
                    <div style="height:50%"></div>
                    <div style="height:75%"></div>
                    <div style="height:90%"></div>
                    <div style="height:70%"></div>
                    <div style="height:85%"></div>
                </div>
                <p>Optimal hydration</p>
            </div>

            <!-- Sunlight -->
            <div class="metric-card">
                <span class="metric-icon">☀️</span>
                <h3>Sunlight</h3>
                <div class="metric-value">
                    6 <span>Hours per day</span>
                </div>
                <div class="bar-chart">
                    <div style="height:40%"></div>
                    <div style="height:85%"></div>
                    <div style="height:60%"></div>
                    <div style="height:70%"></div>
                    <div style="height:75%"></div>
                    <div style="height:50%"></div>
                    <div style="height:65%"></div>
                </div>
                <p>Ideal sunlight exposure</p>
            </div>

            <!-- Fertilizer -->
            <div class="metric-card">
                <span class="metric-icon">🌱</span>
                <h3>Fertilizer</h3>
                <div class="metric-value">
                    1.5 <span>Grams every 2 weeks</span>
                </div>

                <div style="
                    width:110px;
                    height:110px;
                    border-radius:50%;
                    margin:15px auto;
                    background:conic-gradient(
                        #19bb79 0% 70%,
                        #ddd 70% 100%
                    );
                    display:flex;
                    align-items:center;
                    justify-content:center;
                ">
                    <div style="
                        width:65px;
                        height:65px;
                        border-radius:50%;
                        background:white;
                    "></div>
                </div>

                <p>Next fertilizing in 3 days</p>
            </div>

        </div>

        <!-- Middle Section -->
        <div class="middle-grid">

            <!-- Activity Timeline -->
            <div class="dashboard-panel">

                <h3>Plant Activity Timeline</h3>
                <hr>

                <div class="timeline-item">
                    <strong>💧 Watering Plants</strong>
                    <p>09:00 AM - 09:30 AM</p>
                </div>

                <div class="timeline-item"
                     style="border-color:#f2b51c;background:#fff4d5">
                    <strong>☀️ Checking Sunlight Exposure</strong>
                    <p>11:00 AM - 11:30 AM</p>
                </div>

                <div class="timeline-item">
                    <strong>🌱 Checking Soil Moisture</strong>
                    <p>02:00 PM - 02:30 PM</p>
                </div>

            </div>

            <!-- Tips and Alerts -->
            <div class="dashboard-panel alert-panel">

                <h3>💡 Tips & Alerts</h3>
                <hr>

                <div class="alert-item">
                    <strong>🔔 Watering Alert</strong>
                    <p>Soil moisture is low.
                    Check your plants and water if required.</p>
                </div>

                <div class="alert-item">
                    <strong>🌿 Fertilizing Reminder</strong>
                    <p>Prepare fertilizer for your plants
                    according to their requirements.</p>
                </div>

                <div class="alert-item">
                    <strong>☀️ Sunlight Reminder</strong>
                    <p>Ensure sufficient sunlight exposure.</p>
                </div>

            </div>

        </div>

        <!-- Growth Analytics -->
        <div class="analytics-panel">

            <h2>Growth Analytics & Progress</h2>

            <div class="chart-container">

                <svg viewBox="0 0 650 250"
                     xmlns="http://www.w3.org/2000/svg">

                    <!-- Horizontal Grid Lines -->
                    <g stroke="#ddd" stroke-dasharray="4">
                        <line x1="50" y1="30" x2="540" y2="30"/>
                        <line x1="50" y1="85" x2="540" y2="85"/>
                        <line x1="50" y1="140" x2="540" y2="140"/>
                        <line x1="50" y1="195" x2="540" y2="195"/>
                    </g>

                    <!-- Height Line -->
                    <polyline
                        points="50,150 120,110 190,105 260,105 330,90 400,75 470,72 540,55"
                        fill="none"
                        stroke="#16bd79"
                        stroke-width="2.5"/>

                    <!-- Water Line -->
                    <polyline
                        points="50,180 120,170 190,160 260,155 330,180 400,150 470,165 540,120"
                        fill="none"
                        stroke="#1685f8"
                        stroke-width="2.5"/>

                    <!-- Sunlight Line -->
                    <polyline
                        points="50,170 120,170 190,165 260,150 330,175 400,160 470,145 540,130"
                        fill="none"
                        stroke="#f5a400"
                        stroke-width="2.5"/>

                    <!-- Fertilizer Markers -->
                    <circle cx="120" cy="110" r="5" fill="#ed3c38"/>
                    <circle cx="330" cy="90" r="5" fill="#ed3c38"/>

                    <!-- X Axis Labels -->
                    <g font-size="12" fill="#777"
                       text-anchor="middle">
                        <text x="50" y="220">Mon</text>
                        <text x="120" y="220">Tue</text>
                        <text x="190" y="220">Wed</text>
                        <text x="260" y="220">Thu</text>
                        <text x="330" y="220">Fri</text>
                        <text x="400" y="220">Sat</text>
                        <text x="470" y="220">Sun</text>
                    </g>

                </svg>

            </div>

            <p>
                🟢 Height &nbsp;
                🔵 Water &nbsp;
                🟡 Sunlight &nbsp;
                🔴 Fertilizer
            </p>

        </div>

    </div>

    `;
}





function toggleWater(index) {
    plants[index].watered = !plants[index].watered;
    showPage('home'); 
}



function addNewPlant() {
    const nameInput = document.getElementById('plantName');
    
    if (nameInput.value.trim() === "") {
        alert("Please enter a plant name!");
        return; 
    }

    plants.push({ 
        name: nameInput.value, 
        water: "100ml", 
        watered: false 
    });
    
    showPage('home'); 
}



// Load Home by default
showPage('home');
