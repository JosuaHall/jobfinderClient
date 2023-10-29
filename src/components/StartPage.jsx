// StartPage.jsx
// Created on: October 1, 2023
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileAnalysis from "../pictures/profileAnalysis.JPG";

const StartPage = () => {
  return (
    <div className="landing-page-container">
      <div className="background-image"></div>
      <div className="landing-page-grid">
        <div className="landing-page-grid-left">
          <div className="my-3 d-flex gap-2">
            <FontAwesomeIcon
              icon={["fa", "chart-simple"]}
              size="2x"
              color="rgb(0,128,255)"
              className=""
            />
            <h2 style={{ color: "rgb(0,128,255)" }}>JobFinderAI</h2>
          </div>

          <h1>Job seeking just got easier!</h1>
          <p>
            Go beyond a simple profile - build job-hunting dashboards designed
            just for you
          </p>
          <Link to="/register" className="btn btn-danger link">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="section">
        <h1 className="p-4" style={{ textAlign: "left", marginLeft: "2em" }}>
          <small>Get Your </small>
          <b style={{ color: "#0275d8" }}>Personalized Profile Analysis</b>
          <small> based on your Profile..</small>
        </h1>
        <img className="laptop" src={profileAnalysis} width={"80%"} alt="" />
      </div>

      <div className="section">
        <h1 className="p-4" style={{ textAlign: "center" }}>
          <small>..and find the </small>
          <b style={{ color: "#0275d8" }}>perfect Matching Job</b>{" "}
          <small>from thousands of job postings</small>
        </h1>
        <img className="laptop" src={profileAnalysis} width={"80%"} alt="" />
      </div>

      <div className="m-5 px-5 py-2">
        <h3>Disclaimer</h3>
        <p>
          While JobfinderAI strives to provide accurate and up-to-date job
          listings and career advice, we do not guarantee employment or job{" "}
          <br />
          placement. The job search process involves various factors, including
          individual qualifications, employer requirements, and market <br />
          conditions, which are beyond our control. JobfinderAI serves as a
          platform to connect job seekers with potential employers and offers{" "}
          <br />
          valuable resources to enhance your job search experience. However, the
          final decision and outcome of any job application or employment <br />
          opportunity rest solely with the individual job seeker and the hiring
          organization. We recommend conducting thorough research and utilizing{" "}
          <br />
          our platform as a valuable resource in your job search journey
        </p>
      </div>
    </div>
  );
};

export default StartPage;
