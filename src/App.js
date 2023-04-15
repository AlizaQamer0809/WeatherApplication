import React, { useState, useEffect } from 'react';
import CityInput from './CityInput';
import WeatherInfo from './WeatherInfo';
import './App.css'

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41af772bb8e19cf291c6d78211439b51&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          setError(null);
        } else {
          throw new Error('Failed to fetch weather data');
        }
      } catch (error) {
        setWeatherData(null);
        setError(error.message);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div className='App'>
      <CityInput onCityChange={setCity} />
      {error ? (
        <p>Error: {error}</p>
      ) : (
        weatherData && <WeatherInfo weatherData={weatherData} />
      )}
    </div>
  );
};

export default App;
