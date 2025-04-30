import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedItem from "./FeedItem";

function FeedList() {
  const tweets = useSelector((store) => store.tweet.tweets);

  return (
    <div>
      {tweets.map((tweet, i) => (
        <FeedItem key={i} tweet={tweet} />
      ))}
    </div>
  );
}

export default FeedList;
