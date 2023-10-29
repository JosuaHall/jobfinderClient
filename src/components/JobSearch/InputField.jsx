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
