# WeatherScope 🌤️

A modern **Weather Data Aggregator Dashboard** that fetches real-time weather information for multiple cities and visualizes it using charts, maps, and interactive UI components.

This project demonstrates **API integration, asynchronous JavaScript, and data visualization** using modern web technologies.

---

## 🚀 Features

- Fetch real-time weather data using **Open-Meteo API**
- Display **temperature for multiple cities**
- Calculate:
  - Average temperature
  - Highest temperature
  - Lowest temperature
- **Interactive temperature chart**
- **City cards with weather information**
- **Interactive map with city markers**
- **Weather news section**
- **Embedded weather videos**
- **Light / Dark mode toggle**
- **Responsive modern UI**

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and UI design |
| JavaScript (ES6) | Application logic |
| Open-Meteo API | Weather data |
| Chart.js | Data visualization |
| Leaflet.js | Interactive map |

---

## Screenshots of the project:

<img width="1470" height="956" alt="Screenshot 2026-03-06 at 6 20 19 PM" src="https://github.com/user-attachments/assets/ecedcf0a-b9bd-42fa-80ad-5a8e00fa0d47" />
<img width="1470" height="956" alt="Screenshot 2026-03-06 at 6 21 51 PM" src="https://github.com/user-attachments/assets/9ffbd47b-ee2e-47ec-ab5c-66bbd83ddfbe" />
<img width="1470" height="956" alt="Screenshot 2026-03-06 at 6 20 33 PM" src="https://github.com/user-attachments/assets/15d72f17-9786-4383-9c1d-60627b3d3952" />
<img width="1470" height="956" alt="Screenshot 2026-03-06 at 6 20 39 PM" src="https://github.com/user-attachments/assets/beed3ad2-1c2f-49b8-bf84-87d8df9ce114" />
<img width="1470" height="956" alt="Screenshot 2026-03-06 at 6 21 58 PM" src="https://github.com/user-attachments/assets/93a37536-2dbb-494e-8df7-25a3595763a6" />
<img width="1470" height="956" alt="Screenshot 2026-03-06 at 6 22 26 PM" src="https://github.com/user-attachments/assets/a19dedaa-cf5f-4290-a979-a18d2158b7ed" />

---

## 🌍 Cities Included

The dashboard currently displays weather data for the following cities:

| City | Latitude | Longitude |
|-----|-----|-----|
| Mumbai | 19.0760 | 72.8777 |
| Delhi | 28.7041 | 77.1025 |
| Kolkata | 22.5726 | 88.3639 |
| Bangalore | 12.9716 | 77.5946 |
| Chennai | 13.0827 | 80.2707 |

---

## ⚙️ How It Works

1. User clicks **Fetch Weather Data**.
2. JavaScript sends API requests for multiple cities.
3. Weather data is retrieved from **Open-Meteo API**.
4. Temperature values are extracted and stored in an array.
5. The system calculates:
   - Average temperature
   - Highest temperature
   - Lowest temperature
6. Results are displayed through:
   - Temperature cards
   - Chart visualization
   - Map markers

---

## 📊 Data Structure Example
{
  cities: ["Mumbai", "Delhi", "Kolkata", "Bangalore", "Chennai"],
  temperatures: [29, 31, 28, 26, 30],
  average: 28.8,
  highest: 31,
  lowest: 26
}

---

## 📂 Project Structure
│
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images
│   └── icons
└── README.md

---

## 🎯 Learning Outcomes

This project demonstrates:

1. API integration using JavaScript
2. Asynchronous programming with async/await
3. Parallel API requests using Promise.all()
4. Data aggregation and analysis
5. Creating interactive dashboards

---

## 🔮 Future Improvements

1. Add weather forecast predictions
2. Include humidity, wind speed, and AQI
3. Support more cities
4. Implement automatic data refresh
5. Add user location detection

---

## 👨‍💻 Author

Developed as part of a Web Development project.
