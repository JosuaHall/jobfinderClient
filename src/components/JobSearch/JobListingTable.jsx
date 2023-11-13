// JobListingTable.jsx
// Created on: October 1, 2023
// Description: React Component for displaying the Job Matches Table of the tradiotional Job Search
//  based on the Job Title and City

import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "./../LoadingSpinner";

const JobListingsTable = () => {
  const jobs = useSelector((state) => state.job.jobs);
  const isLoading = useSelector((state) => state.job.isLoading);
  const jobsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <table className="table table-style">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Position Type</th>
            <th>Experience</th>
          </tr>
        </thead>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <tbody>
            {currentJobs.map((job) => (
              <tr key={job._id}>
                <td>{job.job_title}</td>
                <td>{job.company_name}</td>
                <td>{job.job_location}</td>
                <td>{job.job_position_type}</td>
                <td>{job.years_experience} years</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {jobs.length === 0 && <h5>No results</h5>}

      {jobs.length > jobsPerPage && (
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default JobListingsTable;
