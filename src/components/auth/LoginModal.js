// LoginModal.js
// Created on: October 1, 2023
import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from "reactstrap";

import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import {
  Link,
  Redirect,
  useLocation,
  Navigate, // Assuming you're using React Router v6
  useHistory,
  useNavigate,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../pictures/logo.JPG";

// Functional component for the login form
const LoginModal = () => {
  // State variables for the form data and Redux state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    msg: null,
  });
  const error = useSelector((state) => state.error); // Redux state for error messages
  const token = useSelector((state) => state.auth.token); // Redux state for authentication token
  const location = useLocation(); // React Router hook to get the current location object
  const navigate = useNavigate(); // React Router hook for navigating to different routes
  const dispatch = useDispatch(); // Redux dispatch function for dispatching actions

  // Effect to handle login errors and update the error message in the component state
  useEffect(() => {
    if (error.id === "LOGIN_FAIL") {
      setFormData({ ...formData, msg: error.msg.msg });
    } else {
      setFormData({ ...formData, msg: null });
    }
  }, [error]);

  // Destructuring form data for easier access
  const { email, password, msg } = formData;

  // Event handler for input changes in the form fields
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Event handler for form submission
  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    // Dispatching login action with user data
    dispatch(login(user));
  };

  // Effect to redirect to the home page after successful login
  useEffect(() => {
    if (token) {
      // Using the navigate hook to redirect to the home page
      const navi = () => navigate("/home");
      navi();
    }
  }, [token]);

  // JSX code for the login form component
  return (
    <React.Fragment>
      <h1 className="m-4">
        Welcome to{" "}
        <div className="d-flex align-items-center justify-content-center p-2 gap-2 m-4">
          <img className="athletia-logo" src={logo} width="40px" />
          <h3 style={{ padding: 0, margin: 0 }}>JobFinderAI</h3>
        </div>
      </h1>
      <div className="form-border">
        <div className="login-logout-form">
          <h2 className="m-4 login-label">
            <FontAwesomeIcon
              icon={["fas", "user"]}
              size="2x"
              color="rgb(0,128,255)"
              className="user-icon"
            />
            Sign In
          </h2>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              {/* Input fields for email and password */}
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={onChange}
              />

              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={onChange}
              />
              {/* Login button */}
              <Button
                type="submit"
                color="primary"
                style={{ marginTop: "2rem" }}
                block
                className="mb-3"
              >
                Login
              </Button>
              {/* Link to registration page */}
              <Link to="/register" className="link-register">
                Don't have an account yet?
              </Link>
            </FormGroup>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginModal;
