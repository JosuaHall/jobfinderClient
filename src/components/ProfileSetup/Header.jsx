// Header.js
// Created on: October 1, 2023
// Description: React Component for displaying the Header of the Profile Setup Screen

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sketch from "../../pictures/headerInterviewSketch.JPG";

const Header = ({ heading, subtitle }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header-content-grid-profile-setup">
        <div className="">
          <h3>{heading}</h3>
          <h5>{subtitle}</h5>
        </div>

        <div className="">
          <img src={sketch} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Header;
