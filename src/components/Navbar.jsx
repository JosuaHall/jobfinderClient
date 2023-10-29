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
            <h3 style={{ padding: 0, margin: 0 }}>JobFinderAI</h3>
          </div>
        </Link>
      </div>
      <div className="auth-navbar-items">
        <div>
          {/* className="profile-navbar-name">{`${user.firstName} ${user.lastName}`}</div>
          )*/}
        </div>

        <div>
          <div className="nav-dropdown-list">
            <hr />
            <Link to={`/home`} className="link">
              <div
                className={`py-2 px-3 link ${
                  isActive("/home") ? "active-link" : ""
                }`}
              >
                Dashboard
              </div>
            </Link>
            <hr />
            <Link to={`/setup/profile`} className="link">
              <div
                className={`py-2 px-3 link ${
                  isActive("/setup/profile") ? "active-link" : ""
                }`}
              >
                Profile Setup
              </div>
            </Link>
            <hr />
            <Link to={`/profile/analysis`} className={`link`}>
              <div
                className={`py-2 px-3 link ${
                  isActive("/profile/analysis") ? "active-link" : ""
                }`}
              >
                Your Profile Analysis
              </div>
            </Link>
            <hr />
            <Link to={`/job/matchings`} className={`link`}>
              <div
                className={`py-2 px-3 link ${
                  isActive("/job/matchings") ? "active-link" : ""
                }`}
              >
                Your Job Matches
              </div>
            </Link>
            <hr />
            <Link to={`/job/search`} className={`link`}>
              <div
                className={`py-2 px-3 link ${
                  isActive("/job/search") ? "active-link" : ""
                }`}
              >
                Job Search
              </div>
            </Link>
            <hr />
            <Link to={`/other/resources`} className={`link`}>
              <div
                className={`py-2 px-3 link ${
                  isActive("/other/resources") ? "active-link" : ""
                }`}
              >
                Additional Resources
              </div>
            </Link>
            <hr />
            <Link onClick={() => logUserOut()} to="/login" className={`link`}>
              <div
                className={`py-2 px-3 link btn btn-danger ${
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
            <h3 style={{ padding: 0, margin: 0 }}>JobFinderAI</h3>
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
              className={`py-2 px-3 link ${
                isActive("/register") ? "active-link" : ""
              }`}
            >
              Sign Up
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
              className={`py-2 px-3 link ${
                isActive("/login") ? "active-link" : ""
              }`}
            >
              Login
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

  return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
};

export default Navbar;
