import React from "react";
import "./friend.css";

function Friend({user}) {
  return (
    <li className="sidebar__friend">
      <img
        className="sidebar__friend-image"
        src={user.profilePicture}
        alt=""
      />
      <span className="sidebar__friend-name">{user.username}</span>
    </li>
  );
}

export default Friend;
