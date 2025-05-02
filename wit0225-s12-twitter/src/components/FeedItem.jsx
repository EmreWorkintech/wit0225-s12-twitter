import React from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

import Analytics from "./Analytics";

function FeedItem({ tweet }) {
  console.log(tweet);
  const time = formatDistanceToNow(tweet.createdAt, {
    addSuffix: true,
    locale: tr,
  });
  return (
    <div className="w-full p-8 border-b border-b-slate-100 flex gap-2">
      <div className="w-15 p-1">
        <img className="w-full rounded-full" src={tweet.avatar} />
      </div>
      <div className="flex-grow">
        <p className="fonr-bold">
          {tweet.userName}{" "}
          <span className="font-normal text-slate-400 text-md">
            @{tweet.userName} - {time}
          </span>{" "}
        </p>
        <p>{tweet.message}</p>
        <Analytics
          analytics={{
            like_count: tweet.like_count,
            comment_count: tweet.comment_count,
            retweet_count: tweet.retweet_count,
          }}
        />
      </div>
      <div className="w-15 p-1 text-right">
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  );
}

export default FeedItem;
