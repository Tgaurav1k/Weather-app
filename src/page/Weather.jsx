// ✅ Full React Component with Extra Weather Info and Comments
import React, { useState, useEffect } from "react";
import './Weather.css'; // Import custom styles

// ✅ API configuration
const api = {
  key: "7958f35ee93285a11fb80e06a9e3a6a6",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [query, setQuery] = useState(""); // user input
  const [weather, setWeather] = useState({}); // weather data from API
  const [error, setError] = useState(""); // error message if city not found

  // ✅ Fetch default weather (Mohali) on initial load
  useEffect(() => {
    fetch(`${api.base}weather?q=Mohali,in&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log("Default Mohali Weather:", result);
      });
  }, []);

  // ✅ Handle search on Enter key press
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.cod === "404") {
            setWeather({});
            setError("City not found. Please try again.");
          } else {
            setWeather(result);
            setQuery("");
            setError("");
          }
        });
    }
  };

  // ✅ Format date
  const dateBuilder = (d) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    ];
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className={
      typeof weather.main !== "undefined"
        ? (weather.main.temp > 16 ? "app warm" : "app")
        : "app warm"
    }>
      <main>
        {/* ✅ Search input */}
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>

        {/* ✅ Error message display */}
        {error && <div className="error-message">{error}</div>}

        {/* ✅ Display weather info */}
        {typeof weather.main !== "undefined" && !error && (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>

            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>

              {/* ✅ Extra interactive data */}
              <div className="extras">
                <p>Feels Like: {Math.round(weather.main.feels_like)}°C</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind Speed: {weather.wind.speed} m/s</p>
                <p>Cloudiness: {weather.clouds.all}%</p>
                <p>Description: {weather.weather[0].description}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Weather;