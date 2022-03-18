import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday__container">
          <img
            src="http://localhost:3006/team-1-800x800.jpg"
            alt=""
            className="birthday__image"
          />
          <span className="birthday__text">
            <b>Pola Foster</b> and <b>3 other friends </b>have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbar__ad" />
        <h4 className="rightbar__title">Online friends</h4>
        <ul className="rightbar__friendlist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbar__title">User Information</h4>
        <div className="rightbar__info">
          <div className="rightbar__info-item">
            <span className="rightbar__info-key">City:</span>
            <span className="rightbar__info-value">New York</span>
          </div>
          <div className="rightbar__info-item">
            <span className="rightbar__info-key">From:</span>
            <span className="rightbar__info-value">Medan</span>
          </div>
          <div className="rightbar__info-item">
            <span className="rightbar__info-key">Relationship:</span>
            <span className="rightbar__info-value">Single</span>
          </div>
        </div>
        <h4 className="rightbar__title">User Friends</h4>
        <div className="rightbar__followings">
          <div className="rightbar__following">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="rightbar__following-image"
            />
            <span className="rightbar__following-name">Jhon Doe</span>
          </div>
          <div className="rightbar__following">
            <img
              src="/assets/person/3.jpeg"
              alt=""
              className="rightbar__following-image"
            />
            <span className="rightbar__following-name">Jhon Doe</span>
          </div>
          <div className="rightbar__following">
            <img
              src="/assets/person/4.jpeg"
              alt=""
              className="rightbar__following-image"
            />
            <span className="rightbar__following-name">Jhon Doe</span>
          </div>
          <div className="rightbar__following">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="rightbar__following-image"
            />
            <span className="rightbar__following-name">Jhon Doe</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        {profile ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
