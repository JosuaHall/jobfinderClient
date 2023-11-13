// Navbar.jsx
// Created on: October 1, 2023
// Description: React Component for displaying the Navigation Bar

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarText, DropdownItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";
import logo from "../pictures/logo.JPG";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const location = useLocation(); // Get the current location

  const logUserOut = () => {
    dispatch(logout());
  };

  // Check if the given path matches the current location
  const isActive = (path) => {
    return location.pathname === path;
  };

  //navbar when logged in
  const authLinks = (
    <div className="navbar-area">
      <div className="nav-brand">
        <Link className="link brand" to={`/home`}>
          <div className="d-flex align-items-center justify-content-center p-2 gap-2">
            <img className="athletia-logo" src={logo} width="40px" />
            <p style={{ padding: 0, margin: 0 }}>JobFinderAI</p>
          </div>
        </Link>
      </div>
      <div className="auth-navbar-items">
        <div>
          {/* className="profile-navbar-name">{`${user.firstName} ${user.lastName}`}</div>
          )*/}
        </div>

        <div>
          <div>
            <hr />
            <Link to={`/home`} className="link">
              <div
                className={`py-1 px-3 link ${
                  isActive("/home") ? "active-link" : ""
                }`}
              >
                <p style={{ padding: 0, margin: 0 }}>Dashboard</p>
              </div>
            </Link>
            <hr />
            <Link to={`/setup/profile`} className="link">
              <div
                className={`py-1 px-3 link ${
                  isActive("/setup/profile") ? "active-link" : ""
                }`}
              >
                <p style={{ padding: 0, margin: 0 }}>Profile Setup</p>
              </div>
            </Link>
            <hr />
            <Link to={`/profile/analysis`} className={`link`}>
              <div
                className={`py-1 px-3 link ${
                  isActive("/profile/analysis") ? "active-link" : ""
                }`}
              >
                <p style={{ padding: 0, margin: 0 }}>Your Profile Analysis</p>
              </div>
            </Link>
            <hr />
            <Link to={`/job/matchings`} className={`link`}>
              <div
                className={`py-1 px-3 link ${
                  isActive("/job/matchings") ? "active-link" : ""
                }`}
              >
                <p style={{ padding: 0, margin: 0 }}>Your Job Matches</p>
              </div>
            </Link>
            <hr />
            <Link to={`/job/search`} className={`link`}>
              <div
                className={`py-1 px-3 link ${
                  isActive("/job/search") ? "active-link" : ""
                }`}
              >
                <p style={{ padding: 0, margin: 0 }}>Job Search</p>
              </div>
            </Link>
            <hr />
            <Link to={`/other/resources`} className={`link`}>
              <div
                className={`py-1 px-3 link ${
                  isActive("/other/resources") ? "active-link" : ""
                }`}
              >
                <p style={{ padding: 0, margin: 0 }}>Additional Resources</p>
              </div>
            </Link>
            <hr />
            <Link onClick={() => logUserOut()} to="/login" className={`link`}>
              <div
                className={`py-1 px-3 link btn btn-danger ${
                  isActive("/login") ? "active-link" : ""
                }`}
              >
                Logout
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  //navbar if not authorized
  const guestLinks = (
    <div className="navbar-area">
      <div>
        <Link className="link brand" to={`/`}>
          <div className="d-flex align-items-center justify-content-center p-2 gap-2">
            <img className="athletia-logo" src={logo} width="40px" />
            <p style={{ padding: 0, margin: 0 }}>JobFinderAI</p>
          </div>
        </Link>
      </div>
      <div>
        <hr />
        <div>
          <Link
            onClick={() => {
              dispatch(clearErrors());
            }}
            to="/register"
            className={`link`}
          >
            <div
              className={`py-1 px-3 link ${
                isActive("/register") ? "active-link" : ""
              }`}
            >
              <p style={{ margin: 0 }}>Sign Up</p>
            </div>
          </Link>
        </div>
        <hr></hr>
        <div>
          <Link
            onClick={() => dispatch(clearErrors())}
            to="/login"
            className={`link`}
          >
            <div
              className={`py-1 px-3 link ${
                isActive("/login") ? "active-link" : ""
              }`}
            >
              <p style={{ margin: 0 }}>Login</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

  return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
};

export default Navbar;
