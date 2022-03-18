import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import "./share.css";

function Share() {
  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__top">
          <img
            className="share__profile-image"
            src="http://localhost:3006/team-1-800x800.jpg"
            alt="profilepic"
          />
          <input
            type="text"
            placeholder="whats in your mind"
            className="share__input"
          />
        </div>
        <hr className="share__hr" />
        <div className="share__buttom">
          <div className="share__options">
            <div className="share__option">
              <PermMedia htmlColor="tomato" className="share__icon" />
              <span className="share__option-text">Photo or Video</span>
            </div>
            <div className="share__option">
              <Label htmlColor="blue" className="share__icon" />
              <span className="share__option-text">Tag</span>
            </div>
            <div className="share__option">
              <Room htmlColor="green" className="share__icon" />
              <span className="share__option-text">Locations</span>
            </div>
            <div className="share__option">
              <EmojiEmotions htmlColor="goldenrod" className="share__icon" />
              <span className="share__option-text">Feelings</span>
            </div>
          </div>
          <button className="share__button">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
