import React from "react";
import "./topbar.css";
import { Person, Search, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="bg-red-800 h-14 w-full flex items-center sticky top-0 z-50">
      <div className="topbar__left">
        {/* <Link to="/" className="no-underline"> */}
        <span className="text-2xl ml-4 font-bold text-red-50">Diarium</span>
        {/* </Link> */}
      </div>
      <div className="flex-2 w-64">
        <div className="w-full h-8 bg-white rounded-3xl flex items-center">
          <Search className="text-base m-3" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="border-none focus:outline-none w-9/12"
          />
        </div>
      </div>
      <div className="topbar__right flex items-center justify-around text-neutral-100">
        <div className="">
          <span className="mr-3.5 text-gray-100 text-sm cursor-pointer">
            Homepage
          </span>
          <span className="mr-3.5 text-gray-100 text-sm cursor-pointer">
            Timeline
          </span>
        </div>
        <div className="flex">
          <div className="mr-3 cursor-pointer relative">
            <Person className="text-gray-100" />
            <span className=" topbar__icon-badge w-3.5 h-3.5 bg-red-700 rounded-full text-white absolute flex items-center justify-center text-xs">
              1
            </span>
          </div>
          <div className="mr-3 cursor-pointer relative">
            <Chat className="text-gray-100" />
            <span className="topbar__icon-badge w-3.5 h-3.5 bg-red-700 rounded-full text-white absolute flex items-center justify-center text-xs">
              1
            </span>
          </div>
          <div className="mr-3 cursor-pointer relative">
            <Notifications className="text-gray-100" />
            <span className="topbar__icon-badge w-3.5 h-3.5 bg-red-700 rounded-full text-white absolute flex items-center justify-center text-xs">
              1
            </span>
          </div>
        </div>
        <img
          src="http://localhost:3006/team-1-800x800.jpg"
          alt="imagetopbar"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
}

export default TopBar;
