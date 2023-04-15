import React, { useState } from 'react';
import './App.css'

const CityInput = ({ onCityChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    onCityChange(inputValue);
    setInputValue('');
  };

  return (
    <div className="city-input-container">
      <input  className="city-input" type="text" value={inputValue} onChange={handleInputChange} placeholder='Add City Name' />
      <button  className="city-button" onClick={handleButtonClick}>Get Weather</button>
    </div>
  );
};

export default CityInput;