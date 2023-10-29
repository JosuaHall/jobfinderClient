// App.js
// Created on: October 1, 2023
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { getProfile, loadUser } from "./actions/authActions";
import StartPage from "./components/StartPage";
import Home from "./components/JobDashboard/Home";
import { useDispatch, useSelector } from "react-redux";
import { RequireAuth } from "./components/auth/RequireAuth";
import LoginModal from "./components/auth/LoginModal";
import RegisterModal from "./components/auth/RegisterModal";
import Navbar from "./components/Navbar";
import JobSearch from "./components/JobSearch/JobSearch";
import ProfileSetup from "./components/ProfileSetup/ProfileSetup";
import EditProfile from "./components/ProfileSetup/EditProfile";
import ProfileAnalysis from "./components/ProfileAnalysis/ProfileAnalysis";
import JobMatches from "./components/JobMatchings/JobMatches";
import AddionalResources from "./components/AdditionalResources/AddionalResources";

function App() {
  const dispatch = useDispatch(); // Redux dispatch function for dispatching actions
  const navigate = useNavigate(); // React Router hook for navigating to different routes
  const token = useSelector((state) => state.auth.token); // Redux state for authentication token
  const user = useSelector((state) => state.auth.user);

  // Effect to load user data when the component mounts
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  useEffect(() => {
    if (user) dispatch(getProfile(user._id));
  }, [user]);

  // Effect to navigate to the home page if the user is authenticated
  useEffect(() => {
    if (token) {
      // Use the navigate hook to redirect to the home page
      const navi = () => navigate("/home");
      navi();
    }
  }, [token]);

  // JSX code for the main App component
  return (
    <div className="App">
      <div className="nav-area">
        <Navbar></Navbar>
      </div>
      <div className="content-area">
        <div className="content-content">
          <Routes>
            {/* Route for the authenticated home page */}
            <Route
              path="/setup/profile/edit/profile"
              element={
                <RequireAuth>
                  <EditProfile />
                </RequireAuth>
              }
            />
            <Route
              path="/other/resources"
              element={
                <RequireAuth>
                  <AddionalResources />
                </RequireAuth>
              }
            />
            <Route
              path="/setup/profile"
              element={
                <RequireAuth>
                  <ProfileSetup />
                </RequireAuth>
              }
            />
            <Route
              path="/profile/analysis"
              element={
                <RequireAuth>
                  <ProfileAnalysis />
                </RequireAuth>
              }
            />
            <Route
              path="/job/matchings"
              element={
                <RequireAuth>
                  <JobMatches />
                </RequireAuth>
              }
            />
            <Route
              path="/job/search"
              element={
                <RequireAuth>
                  <JobSearch />
                </RequireAuth>
              }
            />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            {/* Route for the registration page */}
            <Route path="/register" element={<RegisterModal />} />
            {/* Route for the login page */}
            <Route path="/login" element={<LoginModal />} />
            {/* Default route for the start page */}
            <Route path="/" element={<StartPage />} />
            {/* Redirect to the start page if the route is not found */}
            <Route path="" element={<StartPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
