import React from "react";
import leftPlaceHolderImage from "../assets/leftBar.png";

function LeftSideBar() {
  return (
    <div className="w-1/5 bg-blue-100 p-8">
      {" "}
      <img src={leftPlaceHolderImage} className="w-full" />
    </div>
  );
}

export default LeftSideBar;
