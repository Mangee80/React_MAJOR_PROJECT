
import { useState, useEffect } from "react";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    getLocation();
  }, []);

  return { weather, loading, error };
};

export default useWeather;
