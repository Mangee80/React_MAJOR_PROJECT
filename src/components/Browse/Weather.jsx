import { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import useWeather from "../../hooks/useWeather";

const Weather = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { weather, loading, error } = useWeather();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const yyyy = now.getFullYear();
      let mm = now.getMonth() + 1;
      let dd = now.getDate();
      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;
      setDate(`${dd}-${mm}-${yyyy}`);

      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      setTime(`${hours}:${minutes} ${ampm}`);
    };

    updateDateTime();
    const dateTimeInterval = setInterval(updateDateTime, 1000);

    return () => clearInterval(dateTimeInterval);
  }, []);

  const getWeatherIcon = (weathercode) => {
    if (weathercode >= 0 && weathercode <= 1) return "☀️";
    if (weathercode >= 2 && weathercode <= 3) return "☁️";
    if (weathercode >= 45 && weathercode <= 48) return "🌫️";
    if (weathercode >= 51 && weathercode <= 67) return "🌧️";
    if (weathercode >= 71 && weathercode <= 77) return "❄️";
    if (weathercode >= 80 && weathercode <= 82) return "⛈️";
    if (weathercode >= 95 && weathercode <= 99) return " thunderstorms";

    return "🤷";
  };

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
            <div className={styles.weatherCondition}>
              <p className={styles.weatherIcon}>
                {getWeatherIcon(weather.weathercode)}
              </p>
              <p>{weather.temperature}°C</p>
            </div>
            <div className={styles.windInfo}>
              <p className={styles.weatherText}>
                {weather.windspeed} km/h
              </p>
              <p>Wind</p>
            </div>
            <div className={styles.windInfo}>
              <p className={styles.weatherText}>{weather.winddirection}°</p>
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
