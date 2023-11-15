// authAction.js
// Created on: October 1, 2023
// Description: actions (usually for making api requests) for authentification and any user related data
import axios from "axios";
import { returnErrors, clearErrors } from "./errorActions";
import packageInfo from "../../package.json";

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
  PROFILE_ANALYSIS_LOADED,
  NO_PROFILE_FOUND,
  PROFILE_ANALYSIS_LOADING,
} from "./types";

//Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get(`${packageInfo.proxy}/api/auth/user`, tokenAConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: AUTH_ERROR });
      console.log(err);
    });
};

/*update User profile
export const updateProfilePicture =
  ({ userid, logo }) =>
  (dispatch) => {
    const formData = new FormData();
    formData.append("userid", userid);
    formData.append("profileImg", logo.uri);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .put(
        `${packageInfo.proxy}/api/organizations/updateProfilePicture/${userid}`,
        formData,
        config
      )
      .then((res) => {
        dispatch({ type: PROFILE_PICTURE_UPDATED, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };*/

// Register User
export const register =
  ({ email, password, firstName, lastName }) =>
  (dispatch) => {
    dispatch({ type: USER_LOADING });
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //Request body
    const body = JSON.stringify({
      email,
      password,
      firstName,
      lastName,
    });

    axios
      .post(`${packageInfo.proxy}/api/users`, body, config)
      .then((res) => {
        dispatch(clearErrors());
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        );
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };

// Login User
export const login =
  ({ email, password }) =>
  (dispatch) => {
    dispatch({ type: USER_LOADING });
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //Request body
    const body = JSON.stringify({ email, password });
    axios
      .post(`${packageInfo.proxy}/api/auth`, body, config)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        dispatch(clearErrors());
      })
      .catch((err) => {
        console.log("login error: ", err);
        dispatch(
          returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
        );
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };

// Logout User
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

// Setup config/headers and token
export const tokenAConfig = (getState) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

export const createProfile = (formData, userid) => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Request body
  const body = JSON.stringify(formData);

  axios
    .post(
      `${packageInfo.proxy}/api/users/create/profile/${userid}`,
      body,
      config
    )
    .then((res) =>
      dispatch({
        type: PROFILE_CREATED,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

export const updateProfile = (formData, userid) => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify(formData);

  axios
    .put(
      `${packageInfo.proxy}/api/users/update/profile/${userid}`,
      body,
      config
    )
    .then((res) =>
      dispatch({
        type: PROFILE_UPDATED,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = (userid) => (dispatch, getState) => {
  axios
    .get(`${packageInfo.proxy}/api/users/profile/${userid}`)
    .then((res) =>
      dispatch({
        type: PROFILE_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: NO_PROFILE_FOUND,
      });
    });
};

export const getProfileAnalysis = (userid) => (dispatch, getState) => {
  // analysis loading
  dispatch({ type: PROFILE_ANALYSIS_LOADING });

  axios
    .get(`${packageInfo.proxy}/api/users/get/analysis/${userid}`)
    .then((res) =>
      dispatch({
        type: PROFILE_ANALYSIS_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: PROFILE_ANALYSIS_LOADED,
      });
    });
};
