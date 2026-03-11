// CITY DATA 
const cities = [
  { name: "Mumbai", lat: 19.0760, lon: 72.8777 },
  { name: "Delhi", lat: 28.7041, lon: 77.1025 },
  { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
  { name: "Bangalore", lat: 12.9716, lon: 77.5946 },
  { name: "Chennai", lat: 13.0827, lon: 80.2707 }
];

// DARK MODE
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (lastTemps.length) {
    createChart(lastTemps);
  }
});

// MAP SETUP
const map = L.map("map").setView([22.9734, 78.6569], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(map);

let markers = [];

// FETCH WEATHER DATA
async function fetchWeather() {

  try {

    let cityCards = document.querySelectorAll(".city-card");

    markers.forEach(m => map.removeLayer(m));
    markers = [];

    // Create API requests for all cities
    const requests = cities.map(city =>
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`)
        .then(res => res.json())
    );

    // PARALLEL FETCH 
    const results = await Promise.all(requests);

    // Extract temperatures
    const temps = results.map(data => data.current_weather.temperature);

    // Update city cards + markers
    temps.forEach((temperature, i) => {

      cityCards[i].querySelector(".temp").textContent = temperature + " °C";

      const marker = L.marker([cities[i].lat, cities[i].lon])
        .addTo(map)
        .bindPopup(`<b>${cities[i].name}</b><br>${temperature} °C`);

      markers.push(marker);
    });

    // Structured data object
    const weatherSummary = {
      cities: cities.map(c => c.name),
      temperatures: temps,
      average: (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1),
      highest: Math.max(...temps),
      lowest: Math.min(...temps)
    };

    calculateStats(temps);
    createChart(temps);

    console.log("Weather Summary:", weatherSummary);

  } catch (error) {
    alert("Error fetching weather data");
    console.error(error);
  }
}

// CALCULATE AVERAGE / HIGH / LOW
function calculateStats(temps) {

  const avg = (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1);
  const high = Math.max(...temps);
  const low = Math.min(...temps);

  document.querySelector(".avg h2").textContent = avg + "°C";
  document.querySelector(".high h2").textContent = high + "°C";
  document.querySelector(".low h2").textContent = low + "°C";
}

// CHART LOGIC
let chart;
let lastTemps = [];

function createChart(temps) {
  lastTemps = temps;
  const ctx = document.getElementById("weatherChart").getContext("2d");

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: cities.map(c => c.name),
      datasets: [{
        label: "Temperature °C",
        data: temps,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: getComputedStyle(document.body).getPropertyValue('--text')
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--text')
          }
        },
        y: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--text')
          }
        }
      }
    }
  });
}

// NATURAL SKY CLOUD SYSTEM
const container = document.querySelector(".clouds");

const images = [
  "https://pngimg.com/uploads/cloud/cloud_PNG5.png",
  "https://pngimg.com/uploads/cloud/cloud_PNG4.png",
  "https://pngimg.com/uploads/cloud/cloud_PNG19.png",
  "https://pngimg.com/uploads/cloud/cloud_PNG6.png"
];

function createCloud(randomStart = false) {

  const c = document.createElement("div");
  c.className = "cloud";

  const size = 200 + Math.random() * 250;
  const duration = 60 + Math.random() * 40;

  c.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
  c.style.width = size + "px";
  c.style.height = size * 0.6 + "px";

  c.style.top = Math.random() * 80 + "%";
  c.style.animationDuration = duration + "s";

  // first load - random position
  // later - enter from left
  c.style.left = randomStart ? Math.random() * 100 + "vw" : "-300px";

  container.appendChild(c);

  setTimeout(() => c.remove(), duration * 1000);
}

// initial sky fill
for (let i = 0; i < 10; i++) createCloud(true);

// continuous clouds
setInterval(() => createCloud(false), 6000);

// video caraousel logic
const wrapper = document.querySelector('.videos-wrapper');
const slides = document.querySelectorAll('.video-slide');
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  wrapper.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  wrapper.style.transform = `translateX(-${index * 100}%)`;
});

//loader logic
const loader = document.getElementById("loader");

document.getElementById("fetchBtn").addEventListener("click", async () => {
  loader.style.display = "flex"; // show loader

  try {
    await fetchWeather(); 
  } catch (err) {
    console.error(err);
    alert("Error fetching weather data");
  } finally {
    loader.style.display = "none"; // hide loader
  }
});