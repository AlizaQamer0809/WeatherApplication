import React, { useState } from 'react';
import './App.css'

const CityInput = ({ onCityChange }) => {
  const [inputValue, setInputValue] = useState('');

  //handling input value of input field
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //making function to handle functionality of button
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