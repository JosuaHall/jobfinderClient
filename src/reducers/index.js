// index.js
// Created on: October 1, 2023
// Description: index.js combines all reducers together, exporting the reducers and
//  making its' states available for the entire application
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import jobReducer from "./jobReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  job: jobReducer,
});
