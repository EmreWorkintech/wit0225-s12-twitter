import {
  ADD_TWEET_ERROR,
  TWEET_LOADING,
  ADD_TWEET_SUCCESS,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
} from "../actions/tweetActions";

const initialState = {
  tweets: [],
  loading: false,
  error: "",
};

export default function tweetReducer(state = initialState, action) {
  switch (action.type) {
    case TWEET_LOADING:
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
    case GET_TWEETS_SUCCESS:
      return {
        ...state,
        tweets: action.payload,
        loading: false,
        error: "",
      };
    case GET_TWEETS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
