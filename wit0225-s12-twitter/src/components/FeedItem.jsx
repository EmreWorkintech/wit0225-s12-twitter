import React from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Analytics from "./Analytics";

function FeedItem({ tweet }) {
  return (
    <div className="w-full p-8 border-b border-b-slate-100 flex gap-2">
      <div className="w-15 p-1">
        <img className="w-full rounded-full" src="https://picsum.photos/100" />
      </div>
      <div className="flex-grow">
        <p className="fonr-bold">
          EmreSahiner{" "}
          <span className="font-normal text-slate-400 text-md">
            @emreSahiner - 25min ago
          </span>{" "}
        </p>
        <p>lorem ipsum sit o dolor color jkdshfkjdhfk ajdhfkjdhf</p>
        <Analytics />
      </div>
      <div className="w-15 p-1 text-right">
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  );
}

export default FeedItem;
