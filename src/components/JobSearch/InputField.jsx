// InputField.jsx
// Created on: October 1, 2023
// Description: React Component for a simple input field, with costum prop types

import React from "react";

const InputField = ({ placeholder, value, onChange, ...restProps }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...restProps}
    />
  );
};

export default InputField;
