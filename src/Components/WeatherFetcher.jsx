import React, { useEffect, useState } from "react";
import StatsPanel from "./StatsPanel";

const WeatherFetcher = () => {
  const [weatherLocations, setWeatherLocations] = useState([]);

  const cities = [
    "London", "Tokyo", "New York", "Chennai", "Paris", "Cape Town",
    "Moscow", "Beijing", "Mexico City", "Sydney"
  ];

  const API_KEY = "fc1d621d24eba12753c4132ac362547a"; // Free API key

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        console.log("🔄 Starting weather fetch for cities:", cities);

        const fetches = cities.map((city) =>
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        );

        const responses = await Promise.all(fetches);

        // Log HTTP status codes
        responses.forEach((res, index) => {
          console.log(`📡 [${cities[index]}] HTTP status:`, res.status);
        });

        const results = await Promise.all(responses.map((res) => res.json()));

        console.log("🧾 Full Raw API Results:", results);

        // Log individual city result
        results.forEach((item, idx) => {
          console.log(`🌍 [${cities[idx]}] Response:`, item);
        });

        const formatted = results
          .filter((item) => item.cod === 200 && item.main && item.wind)
          .map((item) => ({
            name: item.name,
            temp: item.main.temp,
            humidity: item.main.humidity,
            wind: item.wind.speed,
          }));

        console.log("✅ Filtered & Formatted Data:", formatted);

        setWeatherLocations(formatted);
      } catch (error) {
        console.error("❌ Error fetching global weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return <StatsPanel weatherLocations={weatherLocations} />;
};

export default WeatherFetcher;
