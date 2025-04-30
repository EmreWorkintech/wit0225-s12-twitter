import React from "react";
import rightPlaceHolderImage from "../assets/rightBar.png";

function RightSideBar() {
  return (
    <div className="w-1/5 bg-blue-100 p-8">
      <img src={rightPlaceHolderImage} className="w-full" />
    </div>
  );
}

export default RightSideBar;
