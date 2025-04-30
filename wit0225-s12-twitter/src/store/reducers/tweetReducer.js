import {
  ADD_TWEET_ERROR,
  ADD_TWEET_LOADING,
  ADD_TWEET_SUCCESS,
} from "../actions/tweetActions";

const initialState = {
  tweets: [{ message: "1" }, { message: "2" }],
  loading: false,
  error: "",
};

export default function tweetReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TWEET_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case ADD_TWEET_SUCCESS:
      return {
        ...state,
        tweets: [action.payload, ...state.tweets],
        loading: false,
        error: "",
      };
    case ADD_TWEET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
