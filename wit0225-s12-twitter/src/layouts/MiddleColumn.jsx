import React from "react";
import NewTweetForm from "../components/NewTweetForm.jsx";
import FeedList from "../components/FeedList";

function MiddleColumn() {
  return (
    <div className="flex-grow py-8 border-l border-r border-l-slate-100 border-r-slate-100">
      <NewTweetForm />
      <FeedList />
    </div>
  );
}

export default MiddleColumn;
