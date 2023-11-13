// Form.jsx
// Created on: October 1, 2023
// Description: React Component for the User Profile Form
// - allowing users to enter their data for their profile setup

import React, { useState } from "react";
import InputField from "./InputField";
import TextField from "./TextField";
import { useDispatch, useSelector } from "react-redux";
import { createProfile, updateProfile } from "../../actions/authActions";

const Form = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user._id);
  const userProfile = useSelector((state) => state.auth.user_profile);

  const [personalInfo, setPersonalInfo] = useState({
    street:
      userProfile && userProfile.street_num && userProfile.street_name
        ? `${userProfile.street_num} ${userProfile.street_name}`
        : "",
    state: userProfile?.state || "",
    zipCode: userProfile?.zip || "",
    city: userProfile?.city || "",
  });

  const [jobInfo, setJobInfo] = useState({
    targetSalary: userProfile?.target_salary || "",
    yearsOfExperience: userProfile?.yrs_experience || "",
    desiredRole: userProfile?.desired_role || "",
  });

  const [workExperience, setWorkExperience] = useState(
    userProfile?.work_experience || ""
  );
  const [technicalSkills, setTechnicalSkills] = useState(
    userProfile?.technical_skills || ""
  );

  const [errors, setErrors] = useState({
    personalInfo: {},
    jobInfo: {},
    workExperience: "",
    technicalSkills: "",
  });

  const handleInputChange = (category, field, value) => {
    const newErrors = { ...errors };
    const newState = { ...category, [field]: value };

    // Check if the input is not empty
    if (!value) {
      newErrors[category === personalInfo ? "personalInfo" : "jobInfo"][
        field
      ] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    } else {
      newErrors[category === personalInfo ? "personalInfo" : "jobInfo"][field] =
        "";
    }

    // Check if the input is not a valid number for numeric fields
    if (
      (field === "targetSalary" || field === "yearsOfExperience") &&
      isNaN(Number(value))
    ) {
      newErrors[category === personalInfo ? "personalInfo" : "jobInfo"][
        field
      ] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be a number.`;
    }

    setErrors(newErrors);
    category === personalInfo
      ? setPersonalInfo(newState)
      : setJobInfo(newState);
  };

  const handleWorkExperienceChange = (newText) => {
    setWorkExperience(newText);
  };

  const handleTechnicalSkillsChange = (newText) => {
    setTechnicalSkills(newText);
  };

  const handleSubmit = () => {
    const newErrors = {
      personalInfo: {},
      jobInfo: {},
      workExperience: "",
      technicalSkills: "",
    };

    [personalInfo, jobInfo].forEach((category) => {
      Object.keys(category).forEach((field) => {
        if (!category[field]) {
          newErrors[category === personalInfo ? "personalInfo" : "jobInfo"][
            field
          ] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
        }
      });
    });

    if (!workExperience) {
      newErrors.workExperience = "Work experience is required.";
    }

    if (!technicalSkills) {
      newErrors.technicalSkills = "Technical skills are required.";
    }

    setErrors(newErrors);

    if (
      Object.values(newErrors.personalInfo).every((error) => !error) &&
      Object.values(newErrors.jobInfo).every((error) => !error) &&
      !newErrors.workExperience &&
      !newErrors.technicalSkills
    ) {
      const formData = {
        personalInfo: { ...personalInfo },
        jobInfo: { ...jobInfo },
        workExperience: workExperience,
        technicalSkills: technicalSkills,
      };
      if (userProfile && userProfile?._id) {
        // If user_profile exists (for updating profile)
        dispatch(updateProfile(formData, user));
      } else {
        // If user_profile does not exist (for creating new profile)
        dispatch(createProfile(formData, user));
      }
    }
  };

  return (
    <div className="form">
      <h4>Personal Information</h4>
      <div className="form-content">
        <InputField
          label="Street"
          placeholder="Enter street..."
          value={personalInfo.street}
          onChange={(e) =>
            handleInputChange(personalInfo, "street", e.target.value)
          }
          info={errors.personalInfo.street}
        />
        <InputField
          label="State"
          placeholder="Enter state..."
          value={personalInfo.state}
          onChange={(e) =>
            handleInputChange(personalInfo, "state", e.target.value)
          }
          info={errors.personalInfo.state}
        />
        <InputField
          label="Zip Code"
          placeholder="Enter zip code..."
          value={personalInfo.zipCode}
          onChange={(e) =>
            handleInputChange(personalInfo, "zipCode", e.target.value)
          }
          info={errors.personalInfo.zipCode}
        />
        <InputField
          label="City"
          placeholder="Enter city..."
          value={personalInfo.city}
          onChange={(e) =>
            handleInputChange(personalInfo, "city", e.target.value)
          }
          info={errors.personalInfo.city}
        />
        {/* ... other personal info fields ... */}
      </div>

      <h4>Job Information</h4>
      <div className="form-content">
        <InputField
          label="Desired Role"
          placeholder="Enter desired role..."
          value={jobInfo.desiredRole}
          onChange={(e) =>
            handleInputChange(jobInfo, "desiredRole", e.target.value)
          }
          info={errors.jobInfo.desiredRole}
        />
        <InputField
          label="Target Salary"
          placeholder="Enter target salary..."
          value={jobInfo.targetSalary}
          onChange={(e) =>
            handleInputChange(jobInfo, "targetSalary", e.target.value)
          }
          info={errors.jobInfo.targetSalary}
        />
        <InputField
          label="Years of Experience"
          placeholder="Enter years of experience..."
          value={jobInfo.yearsOfExperience}
          onChange={(e) =>
            handleInputChange(jobInfo, "yearsOfExperience", e.target.value)
          }
          info={errors.jobInfo.yearsOfExperience}
        />
        {/* ... other job info fields ... */}
      </div>

      <h4 className="py-2">Work Experience</h4>
      <textarea
        className="form-control"
        placeholder="Enter work experience..."
        value={workExperience}
        onChange={(e) => setWorkExperience(e.target.value)}
      />

      <h4 className="py-2">Technical Skills (comma separated list)</h4>
      <textarea
        className="form-control"
        placeholder="e.g 'java, python, css, linux'"
        value={technicalSkills}
        onChange={(e) => setTechnicalSkills(e.target.value)}
      />

      <button className="btn btn-primary my-4" onClick={handleSubmit}>
        {userProfile?._id ? "Update" : "Submit"}
      </button>
    </div>
  );
};

export default Form;
