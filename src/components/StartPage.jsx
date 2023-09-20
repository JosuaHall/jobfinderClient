import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="start-page">
      <h1>StartPage</h1>
      <Link to="/upload-resumee" className="start-button">
        Start
      </Link>
    </div>
  );
};

export default StartPage;
