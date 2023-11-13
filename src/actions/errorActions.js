// errorActions.js
// Created on: October 1, 2023
// Descriptiom: actions for any error message, updating the error state

import { GET_ERRORS, CLEAR_ERRORS } from "./types";

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
