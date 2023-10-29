// authReducer.js
// Created on: October 1, 2023
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  PROFILE_CREATED,
  PROFILE_UPDATED,
  PROFILE_LOADED,
  NO_PROFILE_FOUND,
  PROFILE_ANALYSIS_LOADED,
  PROFILE_ANALYSIS_LOADING,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  userloaded: false,
  isLoading: false,
  user: null,
  user_profile: null,
  user_profile_analysis: null,
  profileIsLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        userloaded: true,
        isAuthenticated: true,
        isLoading: false,
        /*token: token,*/
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        userloaded: true,
        isLoading: false,
        isAuthenticated: true,
        ...action.payload,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        userloaded: false,
        isAuthenticated: false,
        isLoading: false,
      };
    case PROFILE_CREATED:
      return {
        ...state,
        user_profile: action.payload,
      };
    case PROFILE_UPDATED:
      return {
        ...state,
        user_profile: action.payload,
      };
    case PROFILE_LOADED:
      return {
        ...state,
        user_profile: action.payload,
      };
    case NO_PROFILE_FOUND:
      return {
        ...state,
        user_profile: null,
      };
    case PROFILE_ANALYSIS_LOADED:
      return {
        ...state,
        user_profile_analysis: action.payload,
        profileIsLoading: false,
      };
    case PROFILE_ANALYSIS_LOADING:
      return {
        ...state,
        profileIsLoading: true,
      };

    default:
      return state;
  }
}
