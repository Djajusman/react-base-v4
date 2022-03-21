import React, { useState, useEffect } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import axios from "../../utils/axios";
// import { format } from "timeago.js";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsliked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, []);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsliked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <img
              src={user.profilePicture || "/assets/person/noAvatar.png"}
              alt=""
              className="post__profile-image"
            />
            <span className="post__username">{user.username}</span>
            <span className="post__date">{post.date}</span>
          </div>
          <div className="post__top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{post?.desc}</span>
          <img className="post__image" src={post.img} alt="" />
        </div>
        <div className="post__buttom">
          <div className="post__buttom-left">
            <img
              className="like__icon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="like__icon"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="post__like-counter">{like} poeples like it !</span>
          </div>
          <div className="post__buttom-right">
            <span className="post__comm">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
