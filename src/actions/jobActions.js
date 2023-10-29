import axios from "axios";
import { returnErrors, clearErrors } from "./errorActions";
import packageInfo from "../../package.json";

import { JOBS_LOADING, JOBS_LOADED, JOB_MATCHES_LOADED } from "./types";

export const findMatchingJobs =
  ({ jobTitle, city }) =>
  (dispatch, getState) => {
    // User loading
    dispatch({ type: JOBS_LOADING });

    axios
      .get(`${packageInfo.proxy}/api/jobs/find/${jobTitle}/${city}`)
      .then((res) =>
        dispatch({
          type: JOBS_LOADED,
          payload: res.data,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

export const getJobMatches = (userid) => (dispatch, getState) => {
  // User loading
  dispatch({ type: JOBS_LOADING });

  console.log(userid);

  axios
    .get(`${packageInfo.proxy}/api/jobs/get/job/matches/${userid}`)
    .then((res) =>
      dispatch({
        type: JOB_MATCHES_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};
