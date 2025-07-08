import React, { useState } from "react";
import './Weather.css'
// New Date() => current date complete
// new Date().getDate()  => wed= index value 3

const api = {
  key: "7958f35ee93285a11fb80e06a9e3a6a6",
  base: "https://api.openweathermap.org/data/2.5/",
};
const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // search operation
  const search = (evt) => {
    // console.log(evt)
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        // result i json
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          // data console of weather
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "Januray",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thusday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className={(typeof weather.main !="undefined")?((weather.main.temp >16)?"app warm" :"app" ):'app'} >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main !="undefined")?(
        <div>
          <div className="location-box">
            <div className="location">
              {/* // city name */}
              {weather.name}, 
              {/* // country name */}
              {weather.sys.country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather" >{weather.weather[0].main}</div>
            </div>
          </div>
        </div>

        ) : ("")}
      </main>
    </div>
  );
};

export default Weather;
