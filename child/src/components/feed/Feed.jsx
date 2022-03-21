import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "../../utils/axios";
import CardTable from "mainapp/CardTable";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/timeline/621af2d9e324920e78d558c8");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed__wrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
        <CardTable />
      </div>
    </div>
  );
}

export default Feed;
