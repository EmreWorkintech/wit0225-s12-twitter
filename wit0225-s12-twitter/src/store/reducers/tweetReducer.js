import { ADD_TWEET } from "../actions/tweetActions";

const initialState = {
  tweets: [{ message: "1" }, { message: "2" }],
};

export default function tweetReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TWEET:
      return {
        ...state,
        tweets: [action.payload, ...state.tweets],
      };
    default:
      return state;
  }
}
