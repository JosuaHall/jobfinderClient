// Home.jsx
// Created on: October 1, 2023
// Description: React Component -> displaying the Screen after a user logs in - Home Screen (with Job Analytics Dashboard)
import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/authActions";
import { useDispatch } from "react-redux";
import Header from "../Home/Header";
import TableauDashboard from "../Home/TableauDashboard";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Header></Header>
      <TableauDashboard />
    </div>
  );
};

export default Home;
