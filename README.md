🌤️ Weather App
A sleek and modern React weather application that fetches and displays real-time weather data for any city using the OpenWeatherMap API. Styled with a glassmorphism effect, the UI is clean, interactive, and user-friendly.

🔗 Live Demo: weather-app-three-ecru-shfy65h20j.vercel.app


🚀 Features
🔍 Search weather by city

📅 Current date display

🌡️ Real-time temperature with “feels like”

💨 Wind speed, humidity, cloudiness, and description

💎 Clean UI with glassmorphism design

📱 Responsive for all devices

🛠️ Built With
React.js – Frontend JavaScript library

CSS – Custom styles with blur and shadow effects

OpenWeatherMap API – For weather data

🧰 Installation
bash
Copy code
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
npm start
🔐 API Configuration
Sign up at OpenWeatherMap to get your API key.

Replace the placeholder in your project:

js
Copy code
const api = {
  key: "YOUR_API_KEY_HERE",
  base: "https://api.openweathermap.org/data/2.5/",
};
📁 Folder Structure
pgsql
Copy code
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── Weather.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
└── README.md
🌐 Deployment
This project is deployed using Vercel:
👉 https://weather-app-three-ecru-shfy65h20j.vercel.app/

