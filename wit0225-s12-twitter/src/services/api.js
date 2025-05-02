import { API } from "../api";

export function getTweets() {
  return API.get("/tweets").then((res) => res.data);
}

export function createTweet(tweet) {
  return API.post("/tweets", tweet).then((res) => res.data);
}
