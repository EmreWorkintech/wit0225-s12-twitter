import { API } from "../../api";

export const ADD_TWEET_LOADING = "ADD_TWEET_LOADING";
export const ADD_TWEET_SUCCESS = "ADD_TWEET_SUCCESS";
export const ADD_TWEET_ERROR = "ADD_TWEET_ERROR";

export function addTweet(tweet) {
  return function (dispatch) {
    dispatch({ type: ADD_TWEET_LOADING });
    API.post("/tweet", tweet)
      .then((res) => {
        setTimeout(function () {
          dispatch({ type: ADD_TWEET_SUCCESS, payload: res.data });
        }, 5000);
      })
      .catch((err) => {
        dispatch({ type: ADD_TWEET_ERROR, payload: err.message });
      });
  };
}
