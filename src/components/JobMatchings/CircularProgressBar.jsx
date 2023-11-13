// CircularProgressBar.js
// Created on: October 5, 2023
// Description: React Component for displaying the Progress Bar for the Job Match Score (depeding on the % match)

import React, { useEffect, useRef } from "react";

const CircularProgressBar = ({ percentage }) => {
  const circleRef = useRef(null);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progress = circumference - (percentage / 100) * circumference;
    circleRef.current.style.strokeDashoffset = progress;
  }, [percentage]);

  return (
    <svg className="circular-progress" width="100" height="100">
      <circle
        className="circle-bg"
        stroke="#e0e0e0"
        strokeWidth="8"
        r={radius}
        cx="50"
        cy="50"
      />
      <circle
        ref={circleRef}
        className="circle"
        stroke="#4caf50"
        strokeWidth="8"
        r={radius}
        cx="50"
        cy="50"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: circumference,
        }}
      />
      <text
        fill="white"
        x="50"
        y="50"
        textAnchor="middle"
        dy=".3em"
        fontSize="20"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
