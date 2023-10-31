import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileOptions = () => {
  return (
    <React.Fragment>
      <h5 className="mt-4">Select an option</h5>
      <div className="profile-options">
        <Link
          to={"/setup/profile/edit/profile"}
          className="link profile-option-card"
        >
          <div>
            <FontAwesomeIcon icon={["fa", "gear"]} size="2x" color="white" />
            <div className="m-2">Edit Your Profile</div>
          </div>
        </Link>
        <Link to={"/profile/analysis"} className="link profile-option-card">
          <div>
            <FontAwesomeIcon
              icon={["fa", "chart-simple"]}
              size="2x"
              color="white"
            />
            <div className="m-2">Your Profile Analysis</div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ProfileOptions;
