import React from "react";

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  info,
  ...restProps
}) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...restProps}
      />
      <p className="error-message">{info}</p>
    </div>
  );
};

export default InputField;
