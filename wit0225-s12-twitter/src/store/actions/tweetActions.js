import { API } from "../../api";

export const TWEET_LOADING = "ADD_TWEET_LOADING";
export const ADD_TWEET_SUCCESS = "ADD_TWEET_SUCCESS";
export const ADD_TWEET_ERROR = "ADD_TWEET_ERROR";

export const GET_TWEETS_SUCCESS = "GET_TWEETS_SUCCESS";
export const GET_TWEETS_ERROR = "GET_TWEETS_SUCCESS";

export function addTweet(tweet) {
  return function (dispatch) {
    dispatch({ type: TWEET_LOADING });
    API.post("/tweets", tweet)
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

export function getTweets() {
  return function (dispatch) {
    dispatch({ type: TWEET_LOADING });
    API.get("/tweets")
      .then((res) => {
        setTimeout(function () {
          dispatch({ type: GET_TWEETS_SUCCESS, payload: res.data });
        }, 5000);
      })
      .catch((err) => {
        dispatch({ type: GET_TWEETS_ERROR, payload: err.message });
      });
  };
}
