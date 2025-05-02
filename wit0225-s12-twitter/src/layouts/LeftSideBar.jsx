import React, { useContext } from "react";
import leftPlaceHolderImage from "../assets/leftBar.png";
import { userContext } from "../contexts/UserContext";

function LeftSideBar() {
  const { user, theme, toggleTheme } = useContext(userContext);

  return (
    <div className="w-1/5 bg-blue-100 p-8">
      {" "}
      <img src={leftPlaceHolderImage} className="w-full" />
      <p>{user.email}</p>
      <button onClick={() => toggleTheme()}>
        {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
}

export default LeftSideBar;
