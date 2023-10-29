import React from "react";
import Header from "./../ProfileSetup/Header";
import monster from "../../pictures/monster.png";
import skillsExtractor from "../../pictures/skillsExtractor.png";
import stateOfTech from "../../pictures/stateOfTech.png";
import workInTexas from "../../pictures/workInTexas.png";
import jobscan from "../../pictures/jobscan.png";

import ResourceCard from "./ResourceCard";

const AddionalResources = () => {
  return (
    <div>
      <Header
        heading={"Additional Resources"}
        subtitle={"List of additional resources."}
      ></Header>
      <div className="mt-3 recources-grid">
        <ResourceCard
          heading={"Monster"}
          text={
            "Looking for a job can be stressful and nervewracking, but you don't have to do it alone."
          }
          link={"https://www.monster.com/grads/"}
          picture={monster}
        />
        <ResourceCard
          heading={"Jobscan"}
          text={
            "Jobscan's resume scanner helps you optimize your resume by comparing it to real job listings and giving feedback on ATS formatting and best practices."
          }
          link={"https://www.jobscan.co/resume-scanner"}
          picture={jobscan}
        />
        <ResourceCard
          heading={"WorkInTexas"}
          text={
            "Register, upload your resume, and get matched to jobs! A premier, Texas-based job board."
          }
          link={"https://www.workintexas.com/vosnet/Default.aspx"}
          picture={workInTexas}
        />
        <ResourceCard
          heading={"State of Tech Landscape"}
          text={
            "Definitive guide to tech workforce trends, number of available jobs in technology, tech industry employment statistics by state, metro area and nationwide."
          }
          link={"https://www.cyberstates.org/"}
          picture={stateOfTech}
        />
        <ResourceCard
          heading={"Skills Extractor"}
          text={
            "Using the power of Open Skills API, help find useful and in-demand skills in your job postings, resumes, or syllabi."
          }
          link={"https://lightcast.io/open-skills/extraction"}
          picture={skillsExtractor}
        />
      </div>
    </div>
  );
};

export default AddionalResources;
