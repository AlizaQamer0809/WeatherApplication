import React from 'react';
import './App.css';

const WeatherInfo = ({ weatherData }) => {
  const { main, weather } = weatherData;

  return (
    <div>
      <h2>Weather Information</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Description: {weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;