import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobMatches } from "../../actions/jobActions";
import Header from "../ProfileSetup/Header";
import LoadingSpinner from "../LoadingSpinner";
import loadingTrack from "../../pictures/Sonate_Classique.mp3";
import CircularProgressBar from "./CircularProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobMatches = () => {
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.auth.user._id);
  const matches = useSelector((state) => state.job.job_matches?.result);
  const jobMatch = useSelector((state) => state.job.job_matches?.job);
  const isLoading = useSelector((state) => state.job.isLoading);

  // State to manage audio playback
  const [audio] = useState(new Audio(loadingTrack));

  useEffect(() => {
    // Play audio when isLoading is true
    if (isLoading) {
      audio.play().catch((error) => {
        // Handle potential playback issues (e.g., user interaction required)
        console.error("Audio playback error:", error);
      });
    } else {
      // Pause audio when isLoading becomes false
      audio.pause();
      audio.currentTime = 0; // Reset audio playback position
    }

    // Clean up audio on component unmount
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isLoading, audio]);

  return (
    <div>
      <Header
        heading={"Your Job Matches"}
        subtitle={"Find out which job matches your profile."}
      ></Header>
      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch(getJobMatches(userid))}
      >
        Start New Personalized Job Match
      </button>
      {isLoading ? (
        <LoadingSpinner />
      ) : matches !== undefined ? (
        <div className="job-match-grid">
          <div className="job-match-job card2">
            <FontAwesomeIcon
              icon={["fa", "briefcase"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h4>Top Job Match</h4>
            <table className="table table-style">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Position Type</th>
                  <th>Level</th>
                </tr>
              </thead>

              <tbody>
                <tr key={jobMatch._id}>
                  <td>{jobMatch.job_title}</td>
                  <td>{jobMatch.company_name}</td>
                  <td>{jobMatch.job_location}</td>
                  <td>{jobMatch.job_position_type}</td>
                  <td>{jobMatch.job_position_level}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card2" style={{ textAlign: "center" }}>
            <div style={{ padding: "1em" }}>
              {" "}
              <CircularProgressBar
                percentage={parseFloat(matches.matchScore.match(/\d+\.\d+/)[0])}
              ></CircularProgressBar>
              {/* Extract percentage from the string*/}
            </div>

            <h4>Match Score</h4>

            <p>{matches.matchScore}</p>
          </div>
          <div className="card2">
            <FontAwesomeIcon
              icon={["fa", "users-gear"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h4>Technical Skills</h4>
            <p>{matches.technicalSkills}</p>
          </div>
          <div className="card2">
            <FontAwesomeIcon
              icon={["fa", "business-time"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h4>Experience</h4>
            <p>{matches.experience}</p>
          </div>
          <div className="card2">
            <FontAwesomeIcon
              icon={["fa", "thumbs-up"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h4>Preferences</h4>
            <p>{matches.preferences}</p>
          </div>
          <div className="card2">
            <FontAwesomeIcon
              icon={["fa", "list-check"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h4>Job Responsibilities</h4>
            <p>{matches.jobResponsibilities}</p>
          </div>
          <div className="card2">
            <FontAwesomeIcon
              icon={["fa", "dumbbell"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h4>Strengths and Alignment</h4>
            <p>{matches.strengthsAndAlignment}</p>
          </div>
          <div className="card2">
            <FontAwesomeIcon
              icon={["fa", "bars-progress"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h4>Suggestions for Improvement</h4>
            <p>{matches.suggestionsForImprovement}</p>
          </div>
          <div className="card2">
            <FontAwesomeIcon
              icon={["fa", "rectangle-list"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h4>Conclusion</h4>
            <p>{matches.conclusion}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default JobMatches;
