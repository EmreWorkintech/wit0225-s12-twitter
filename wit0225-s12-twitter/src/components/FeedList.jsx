import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedItem from "./FeedItem";
import { getTweets } from "../store/actions/tweetActions";

function FeedList() {
  const tweets = useSelector((store) => store.tweet.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTweets());
  }, []);

  return (
    <div>
      {tweets.map((tweet, i) => (
        <FeedItem key={i} tweet={tweet} />
      ))}
    </div>
  );
}

export default FeedList;
