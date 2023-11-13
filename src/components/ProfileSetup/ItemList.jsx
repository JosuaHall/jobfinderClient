// ItemList.jsx
// Created on: October 1, 2023

import React, { useState } from "react";
import InputField from "./InputField";

const ItemList = ({ onItemsChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: new Date().getTime(), // unique id for the item
        text: inputValue.trim(),
      };

      setItems([...items, newItem]);
      setInputValue(""); // Clear the input field after adding an item
      onItemsChange([...items, newItem]); // Communicate changes to the parent component
    }
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    onItemsChange(updatedItems); // Communicate changes to the parent component
  };

  return (
    <div className="">
      <div className="d-flex">
        <InputField
          placeholder={"Enter a skill"}
          onChange={handleInputChange}
          value={inputValue}
        ></InputField>
        <button className="btn btn-primary" onClick={handleAddItem}>
          +
        </button>
      </div>
      <ul
        className=""
        style={{
          listStyle: "none",
        }}
      >
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              className="btn btn-danger m-2"
              onClick={() => handleDeleteItem(item.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
