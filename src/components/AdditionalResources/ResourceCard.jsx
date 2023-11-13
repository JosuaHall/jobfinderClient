// errorActions.js
// Created on: October 1, 2023
// Description: React Component -> displaying a resource card

import React from "react";

const ResourceCard = ({ heading, text, picture, link }) => {
  return (
    <div className="card1 d-flex gap-2">
      <div>
        <img src={picture} width={170} alt="" style={{ borderRadius: "2em" }} />
      </div>
      <div>
        <h4>{heading}</h4>
        <p>{text}</p>
        <a
          className={"btn btn-dark"}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
