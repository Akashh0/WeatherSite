import React, { useState } from "react";
import InteractiveGlobe from "../Components/InteractiveMap";
import "./Home.css";

const Home = () => {
  const [city, setCity] = useState("");
  const [weatherLocations, setWeatherLocations] = useState([]);

  // 🔹 Fetch Weather Data
  const fetchWeather = async () => {
    if (!city) return;

    const API_KEY = "fc1d621d24eba12753c4132ac362547a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        const newLocation = {
          lat: data.coord.lat,
          lon: data.coord.lon,
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
        };

        setWeatherLocations((prev) => [...prev, newLocation]);
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="map-container">
      {/* 🔹 Pass Weather Data to Globe */}
      <InteractiveGlobe weatherLocations={weatherLocations} />

      <div className="home-container">
        <h1>Check Your City here!</h1>

        {/* 🔹 Weather Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>Get Weather</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
