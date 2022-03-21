import React from "react";
import './online.css'

function Online({user}) {
  return (
    <li className="rightbar__friend">
      <div className="rightbar__profile-imagecontainer">
        <img
          src={user.profilePicture}
          alt=""
          className="rightbar__profile-image"
        />
        <span className="rightbar__online"></span>
      </div>
      <span className="rightbar__username">{user.username}</span>
    </li>
  );
}

export default Online;
