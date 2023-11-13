// TextField.js
// Created on: October 1, 2023
// Description: React Component for displaying a custom TextField

import React, { useState } from "react";

const TextField = ({ onTextChange, placeholder, info }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputValue(text);
    onTextChange(text); // Pass the text to the parent component
  };

  return (
    <div>
      <textarea
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{ width: "100%", borderRadius: "5px", padding: ".5em" }}
      />
      <p className="error-message">{info}</p>
    </div>
  );
};

export default TextField;
