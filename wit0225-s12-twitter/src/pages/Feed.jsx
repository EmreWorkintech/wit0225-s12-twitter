import React from "react";
import LeftSideBar from "../layouts/LeftSideBar";
import MiddleColumn from "../layouts/MiddleColumn";
import RightSideBar from "../layouts/RightSideBar";

function Feed() {
  return (
    <div className="w-5/6 m-auto flex min-h-screen">
      <LeftSideBar />
      <MiddleColumn />
      <RightSideBar />
    </div>
  );
}

export default Feed;
