export const ADD_TWEET = "ADD_TWEET";

export function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    payload: tweet,
  };
}
