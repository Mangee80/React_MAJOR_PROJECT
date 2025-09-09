import { useEffect, useState } from "react";
import styles from "./Weather.module.css";

const Weather = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Format date
      const yyyy = now.getFullYear();
      let mm = now.getMonth() + 1;
      let dd = now.getDate();
      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;
      setDate(`${dd}-${mm}-${yyyy}`);

      // Format time
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      setTime(`${hours}:${minutes} ${ampm}`);
    };

    const fetchWeather = (latitude, longitude) => {
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data.current_weather);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to fetch weather data.");
          setLoading(false);
        });
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeather(position.coords.latitude, position.coords.longitude);
          },
          () => {
            // Geolocation failed, fallback to a default location (e.g., London)
            fetchWeather(51.5074, -0.1278);
          }
        );
      } else {
        // Geolocation not supported, fallback to a default location
        fetchWeather(51.5074, -0.1278);
      }
    };

    updateDateTime();
    const dateTimeInterval = setInterval(updateDateTime, 1000); // Update time every second
    getLocation();

    return () => clearInterval(dateTimeInterval);
  }, []);

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.header}>
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div className={styles.weatherInfo}>
        {loading ? (
          <p>Loading weather...</p>
        ) : error ? (
          <p>{error}</p>
        ) : weather ? (
          <>
            <div>
              {/* Open-Meteo doesn't provide icons directly, so we can use a generic one or map weather codes to icons */}
              <p>{weather.temperature}°C</p>
              <p>Weather Code: {weather.weathercode}</p>
            </div>
            <div>
              <p className={styles.weatherText}>
                {weather.windspeed} km/h
              </p>
              <p>Wind</p>
            </div>
            <div>
              <p className={styles.weatherText}>
                {weather.winddirection}°
              </p>
              <p>Wind Direction</p>
            </div>
          </>
        ) : (
          <p>No weather data available.</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
