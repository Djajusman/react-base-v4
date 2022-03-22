import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  VideoCameraBack,
  Group,
  Bookmark,
  QuestionAnswer,
  Event,
  WorkOutline,
  School,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import Friend from "../friend/Friend";

function Sidebar() {
  return (
    <div className="sidebar overflow-y-scroll sticky top-10">
      <div className="p-6">
        <ul className="p-0 m-0 list-none">
          <li className="flex items-center mb-5">
            <RssFeed className="mr-4" />
            <span className="sidebar__list-item-text">Feed</span>
          </li>
          <li className="flex items-center mb-5">
            <Chat className="mr-4" />
            <span className="sidebar__list-item-text">Chats</span>
          </li>
          <li className="flex items-center mb-5">
            <VideoCameraBack className="mr-4" />
            <span className="sidebar__list-item-text">Videos</span>
          </li>
          <li className="flex items-center mb-5">
            <Group className="mr-4" />
            <span className="sidebar__list-item-text">Groups</span>
          </li>
          <li className="flex items-center mb-5">
            <Bookmark className="mr-4" />
            <span className="sidebar__list-item-text">Bookmarks</span>
          </li>
          <li className="flex items-center mb-5">
            <QuestionAnswer className="mr-4" />
            <span className="sidebar__list-item-text">Questions</span>
          </li>
          <li className="flex items-center mb-5">
            <WorkOutline className="mr-4" />
            <span className="sidebar__list-item-text">Jobs</span>
          </li>
          <li className="flex items-center mb-5">
            <Event className="mr-4" />
            <span className="sidebar__list-item-text">Events</span>
          </li>
          <li className="flex items-center mb-5">
            <School className="mr-4" />
            <span className="sidebar__list-item-text">Courses</span>
          </li>
        </ul>
        <button className="w-36 outline-none p-2.5 rounded font-medium bg-emerald-500 text-orange-50">Show More</button>
        <hr className="my-5"/>
        <ul className="m-0 p-0 list-none">
          {Users.map(u => (
            <Friend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
