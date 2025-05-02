import React from "react";
import {
  faArrowsRotate,
  faArrowUpFromBracket,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Analytics({
  analytics: { like_count, comment_count, retweet_count },
}) {
  return (
    <div className="flex justify-between">
      <div className="flex-1">
        <FontAwesomeIcon icon={faMessage} /> {comment_count}
      </div>
      <div className="flex-1">
        <FontAwesomeIcon icon={faArrowsRotate} /> {retweet_count}
      </div>
      <div className="flex-1">
        <FontAwesomeIcon icon={faHeart} /> {like_count}
      </div>
      <div className="flex-1">
        <FontAwesomeIcon icon={faChartSimple} />
      </div>
      <div className="flex-1">
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

export default Analytics;
