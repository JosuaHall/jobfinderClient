import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sketch from "../../pictures/headerInterviewSketch.JPG";
import InputField from "./InputField"; // Adjust the import path based on your project structure
import { findMatchingJobs } from "../../actions/jobActions";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [jobTitle, setJobTitle] = useState("");
  const [city, setCity] = useState("");

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    // Handle search logic here with jobTitle, city, and state values
    console.log("Searching for:", jobTitle, city);

    dispatch(findMatchingJobs({ jobTitle, city }));
  };

  return (
    <div className="header">
      <div className="header-content-grid-job-search">
        <div>
          <div className="">
            <h3>Job Search</h3>
            <div className="d-flex" style={{ alignItems: "flex-end" }}>
              <div>
                <h6>Enter Job Title</h6>
                <InputField
                  placeholder="Enter Job Title"
                  value={jobTitle}
                  onChange={handleJobTitleChange}
                  className="form-control mx-1"
                />
              </div>
              <div>
                <h6>Enter City Name</h6>
                <InputField
                  placeholder="Enter City"
                  value={city}
                  onChange={handleCityChange}
                  className="form-control "
                />
              </div>

              <button onClick={handleSearch} className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={sketch} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Header;
