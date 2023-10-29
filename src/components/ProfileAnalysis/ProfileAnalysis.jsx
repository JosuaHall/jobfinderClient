import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAnalysis } from "../../actions/authActions";
import Header from "./../ProfileSetup/Header";
import LoadingSpinner from "./../LoadingSpinner";

// Import your media files
import loadingTrack from "../../pictures/Sonate_Classique.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileAnalysis = () => {
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.auth.user._id);
  const analysis = useSelector((state) => state.auth.user_profile_analysis);
  const isLoading = useSelector((state) => state.auth.profileIsLoading);

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
        heading={"Your Profile Analysis"}
        subtitle={"This analysis is based on your profile data."}
      ></Header>

      <button
        className="btn btn-primary m-4"
        onClick={() => dispatch(getProfileAnalysis(userid))}
      >
        Start New Profile Analysis
      </button>
      {isLoading ? (
        <LoadingSpinner />
      ) : analysis ? (
        <div className="grid-container">
          <div className="grid-item">
            <FontAwesomeIcon
              icon={["fa", "users-gear"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h2>Technical Skills</h2>

            <p>{analysis.technicalSkills}</p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon
              icon={["fa", "business-time"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h2>Experience</h2>
            <p>{analysis.experience}</p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon
              icon={["fa", "list-check"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h2>Preferences</h2>
            <p>{analysis.preferences}</p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon
              icon={["fa", "dumbbell"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h2>Strengths</h2>
            <p>{analysis.strengths}</p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon
              icon={["fa", "bars-progress"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon my-2"
            />
            <h2>Areas for Improvement</h2>
            <p>{analysis.areasForImprovement}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileAnalysis;
