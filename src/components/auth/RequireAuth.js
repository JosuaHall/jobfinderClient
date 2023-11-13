// RequireAuth.js
// Created on: October 1, 2023
// Description: Middleware for Private Routing for Protected Routes.
//  - only allowing users to access a certain private route if aithenticated

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// Functional component for requiring authentication
export function RequireAuth({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Redux state for authentication status
  const location = useLocation(); // React Router hook to get the current location object

  // If not authenticated, redirect to the login page with the current location information
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Render the child components if authenticated
  return children;
}
