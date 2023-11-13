// RegisterModal.js
// Created on: October 1, 2023
// Description: React Component for displaying the Register Modal

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../pictures/logo.JPG";

// Functional component for the registration form
const RegisterModal = () => {
  // State variables for the form data and Redux state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;
  const error = useSelector((state) => state.error); // Redux state for error messages
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Redux state for authentication status
  const dispatch = useDispatch(); // Redux dispatch function for dispatching actions

  // Effect to handle registration errors and update the error message in the component state
  useEffect(() => {
    if (error.id === "REGISTER_FAIL") {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
  }, [error]);

  // State variable for registration error message
  const [msg, setMsg] = useState(null);

  // Event handler for input changes in the form fields
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Event handler for form submission
  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    // Attempt to register
    dispatch(register(newUser));
  };

  // JSX code for the registration form component
  return (
    <div className="login-logout-form">
      <h5 className="m-4">Welcome to JobFinderAI</h5>
      <div className="form-border-registration">
        <h5 className="m-4 login-label">
          <FontAwesomeIcon
            icon={["fas", "user"]}
            size="1x"
            color="rgb(0,128,255)"
            className="user-icon"
          />
          Register
        </h5>
        <p className="m-4">Please fill in your information</p>
        {msg ? <Alert color="danger">{msg}</Alert> : null}
        <Form onSubmit={onSubmit}>
          <FormGroup>
            {/* Input fields for first name, last name, email, and password */}
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="mb-3"
              value={firstName}
              onChange={onChange}
            />

            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              className="mb-3"
              value={lastName}
              onChange={onChange}
            />

            <Input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className="mb-3"
              value={email}
              onChange={onChange}
            />

            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="mb-3"
              value={password}
              onChange={onChange}
            />
            {/* Registration button */}
            <Button
              type="submit"
              color="primary"
              className="mb-3"
              style={{ marginTop: "2rem" }}
              block
            >
              Register
            </Button>
            {/* Link to login page for existing users */}
            <Link to="/login" className="mt-3 link-register">
              Already a user?
            </Link>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default RegisterModal;
