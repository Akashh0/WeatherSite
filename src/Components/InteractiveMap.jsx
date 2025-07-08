import React, { useRef, useEffect } from "react";
import { Viewer, Entity, CameraFlyTo } from "resium";
import * as Cesium from "cesium";
import { Cartesian3, Color } from "cesium";
import "./InteractiveMap.css"; // Import the CSS file
import StatsPanel from "./StatsPanel";

const InteractiveGlobe = ({ weatherLocations = [] }) => {
  const viewerRef = useRef(null);
  const latestLocation = weatherLocations.length > 0 ? weatherLocations[weatherLocations.length - 1] : null;

  Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZDk5YWE5NS00NDJmLTQwMzgtODcwMy1hYzVjODViYWFmYWIiLCJpZCI6MjgzNzE1LCJpYXQiOjE3NDY5NjE0MjJ9.v6N5RF1lPfyX_jVkVN79z6WbxOtXXvyp-kfT7Us1VUE";

  useEffect(() => {
  if (viewerRef.current) {
    const viewer = viewerRef.current.cesiumElement;
    if (viewer) {
      viewer.scene.skyBox = undefined; // Important!
      viewer.scene.skyAtmosphere.show = false;
      viewer.scene.globe.showGroundAtmosphere = false;
      viewer.scene.backgroundColor = Cesium.Color.BLACK;
      viewer.scene.globe.baseColor = Cesium.Color.BLACK;
    }
  }
}, []);


  return (
    <div className="globe-container">
      <div className="globe-wrapper"> {/* Wrapper to control the size */}
        <Viewer ref={viewerRef} timeline={false} navigationHelpButton={false}>
          {latestLocation && (
            <CameraFlyTo
              duration={2}
              destination={Cartesian3.fromDegrees(latestLocation.lon, latestLocation.lat, 80000)}
            />
          )}

          {weatherLocations.map((weather, index) =>
            weather.description ? (
              <React.Fragment key={index}>
                {/* 🌡️ Temperature */}
                <Entity
                  position={Cartesian3.fromDegrees(weather.lon + 0.2, weather.lat + 0.2)}
                  label={{
                    text: `🌡️ ${weather.temperature}°C`,
                    fillColor: Color.ORANGE,
                    showBackground: true,
                    backgroundColor: new Color(0, 0, 0, 0.7),
                    backgroundPadding: new Cesium.Cartesian2(15, 10),
                    horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    pixelOffset: new Cesium.Cartesian2(0, -30),
                    font: "16px Arial",
                    scale: 1.1,
                  }}
                />

                {/* ☁️ Weather Description */}
                <Entity
                  position={Cartesian3.fromDegrees(weather.lon - 0.2, weather.lat + 0.15)}
                  label={{
                    text: `☁️ ${weather.description}`,
                    fillColor: Color.WHITE,
                    showBackground: true,
                    backgroundColor: new Color(0, 0, 0, 0.7),
                    backgroundPadding: new Cesium.Cartesian2(15, 10),
                    horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    pixelOffset: new Cesium.Cartesian2(0, -30),
                    font: "16px Arial",
                    scale: 1.1,
                  }}
                />

                {/* 💧 Humidity */}
                <Entity
                  position={Cartesian3.fromDegrees(weather.lon, weather.lat - 0.15)}
                  label={{
                    text: `💧 Humidity: ${weather.humidity}%`,
                    fillColor: Color.CYAN,
                    showBackground: true,
                    backgroundColor: new Color(0, 0, 0, 0.7),
                    backgroundPadding: new Cesium.Cartesian2(15, 10),
                    horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    pixelOffset: new Cesium.Cartesian2(0, -40),
                    font: "16px sans-serif",
                  }}
                />

                {/* 🌬️ Wind Speed */}
                {weather.windSpeed !== undefined && (
                  <Entity
                    position={Cartesian3.fromDegrees(weather.lon + 0.3, weather.lat)}
                    label={{
                      text: `🌬️ Wind: ${weather.windSpeed} m/s`,
                      fillColor: Color.LIGHTBLUE,
                      showBackground: true,
                      backgroundColor: new Color(0, 0, 0, 0.7),
                      backgroundPadding: new Cesium.Cartesian2(15, 10),
                      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                      pixelOffset: new Cesium.Cartesian2(0, -50),
                      font: "16px sans-serif",
                    }}
                  />
                )}

                {/* ⏲️ Pressure */}
                {weather.pressure !== undefined && (
                  <Entity
                    position={Cartesian3.fromDegrees(weather.lon, weather.lat + 0.3)}
                    label={{
                      text: `⏲️ Pressure: ${weather.pressure} hPa`,
                      fillColor: Color.YELLOW,
                      showBackground: true,
                      backgroundColor: new Color(0, 0, 0, 0.7),
                      backgroundPadding: new Cesium.Cartesian2(15, 10),
                      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                      pixelOffset: new Cesium.Cartesian2(0, -60),
                      font: "16px sans-serif",
                    }}
                  />
                )}
              </React.Fragment>
            ) : null
          )}
        </Viewer>
        <StatsPanel weatherLocations={weatherLocations} />
      </div>
    </div>
  );
};

export default InteractiveGlobe;
