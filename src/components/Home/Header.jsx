// Header.jsx
// Created on: October 1, 2023
// Description: React Component for displaying the Header of the Home Screen Page

import React from "react";
import { useSelector } from "react-redux";
import sketch from "../../pictures/headerInterviewSketch.JPG";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="header" style={{ borderRadius: "0" }}>
      <div className="header-content-grid">
        <div>
          <h1 style={{ color: "lightgray" }}>
            Welcome {`${user.firstName} ${user.lastName} `}
          </h1>
          <h3 style={{ color: "white" }}>
            JobFinderAI - Dashboard of Job Listings
          </h3>
        </div>
        <div>
          <img src={sketch} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
