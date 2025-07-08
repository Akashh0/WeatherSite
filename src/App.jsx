import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import NewsCarousel from "./Components/NewsCaraousal";
import StatsPanel from "./Components/StatsPanel";
import Footer from "./Components/Footer";
import WeatherFetcher from "./Components/WeatherFetcher";

function App() {
  // Define handleSearch before using it
  const handleSearch = (searchQuery) => {
    console.log("Searching for:", searchQuery);
    // Add search logic here
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} /> {/* Now handleSearch is defined */}
      <div style={{ marginTop: "60px" }}>
        <Home />
      </div>
      <NewsCarousel />
      <WeatherFetcher />
      <Footer />
    </div>
  );
}

export default App;
