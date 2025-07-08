import React from "react";
import "./StatsPanel.css";

const StatsPanel = ({ weatherLocations = [] }) => {
  const activeCount = weatherLocations.length;

  const average = (key) => {
  const validValues = weatherLocations
    .map((loc) => parseFloat(loc[key]))
    .filter((val) => !isNaN(val));

  if (!validValues.length) return 0;

  const sum = validValues.reduce((acc, val) => acc + val, 0);
  return (sum / validValues.length).toFixed(1);
};


  return (
    <div className="stats-panel">
      <h2>🌐 Real-time Weather Stats</h2>
      <div className="stats-grid">
        <div className="stat-box temperature">
          <h3>🌡️ Avg Temp</h3>
          <p>{average("temp")}°C</p>
        </div>
        <div className="stat-box humidity">
          <h3>💧 Avg Humidity</h3>
          <p>{average("humidity")}%</p>
        </div>
        <div className="stat-box wind">
          <h3>💨 Avg Wind</h3>
          <p>{average("wind")} m/s</p>
        </div>
        <div className="stat-box active">
          <h3>📍 Active Locations</h3>
          <p>{activeCount}</p>
        </div>
      </div>

      <div className="why-explain-container">
        <div className="why-box">
          <h3>Reasons for Rising Global Temperature</h3>
          <p>
            Global temperature is increasing nowadays primarily due to human activities, 
            especially the burning of fossil fuels since the Industrial Revolution. These activities 
            release greenhouse gases, such as carbon dioxide, which absorb some of the heat that the 
            Earth radiates after it warms from sunlight, leading to a warming effect in the lower atmosphere.
          </p>
        </div>
        <div className="why-box">
          <h3>Why Wind Speed Increasing?</h3>
          <p>
            Wind speed is rising due to changes in natural climate cycles and ocean-atmosphere oscillations. 
            According to recent studies, global wind speeds have been increasing since around 2010, 
            particularly across North America, Europe, and Asia, after a period of decline that began in the 1970s.
          </p>
        </div>
        <div className="why-box">
          <h3>Why Wind Increases Humidity</h3>
          <p>
            Wind humidity can rise due to several factors. Wind can transport moisture from one area to another, 
            increasing the humidity in the destination area. Additionally, when wind blows over bodies of water, 
            it can increase evaporation, thereby increasing the humidity of the air.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
