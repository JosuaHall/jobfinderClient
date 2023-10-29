// index.js
// Created on: October 1, 2023
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import jobReducer from "./jobReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  job: jobReducer,
});
