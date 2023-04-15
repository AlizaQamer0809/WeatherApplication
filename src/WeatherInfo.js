import React from 'react';
import './App.css';

const WeatherInfo = ({ weatherData, city }) => {
  const { main, weather } = weatherData;

  return (
    <div className='weather-info'>
      <h2>Weather Information of {city} </h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Description: {weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;