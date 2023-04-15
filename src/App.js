import React, { useState, useEffect } from 'react';
import CityInput from './components/CityInput';
import WeatherInfo from './components/WeatherInfo';
import './App.css'

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          //fetching information by using Api key
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41af772bb8e19cf291c6d78211439b51&units=metric`
        );
        if (response.ok) {
          // getting data
          const data = await response.json();
          //setting the state of weatherData to data
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
      <h1 >Weather Forecast </h1>
      <p>Your Weather Companion - Accurate Forecasts, Anywhere, Anytime!</p>
      <CityInput onCityChange={setCity} />
      {error ? (
        <p>Error: {error}</p>
      ) : (
        //displaying weather information
        weatherData && <WeatherInfo city={city} weatherData={weatherData} />
      )}
    </div>
  );
};

export default App;
