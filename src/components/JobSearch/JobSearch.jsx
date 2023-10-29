import React from "react";
import Header from "./Header";
import JobListingsTable from "./JobListingTable";

const JobSearch = () => {
  return (
    <div>
      <Header />
      <h3 className="py-2 text-align-left">Job Matchings</h3>
      <JobListingsTable />
    </div>
  );
};

export default JobSearch;
