// jobReducer.js
// Created on: October 4, 2023
import {
  JOBS_LOADING,
  JOBS_LOADED,
  JOB_MATCHES_LOADED,
} from "../actions/types";

const initialState = {
  jobs: [],
  isLoading: false,
  job_matches: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case JOBS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case JOBS_LOADED:
      return {
        ...state,
        jobs: action.payload,
        isLoading: false,
      };
    case JOB_MATCHES_LOADED:
      return {
        ...state,
        isLoading: false,
        job_matches: action.payload,
      };

    default:
      return state;
  }
}
