// errorReducer.js
// Created on: October 1, 2023
// Description: Reducers are user to update the state variables. Each reducer has a corresponding action
//                -> for example, errorReducer.js has actions(triggers) named errorActions.js
//  - authReducer lists all state variables used within the application that are related to error messages

import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
}
