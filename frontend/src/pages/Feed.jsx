import axios from "axios";
import { useEffect, useState } from "react";

function Feed() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/feed"
      );

      setPosts(res.data.posts);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>Feed Page</h1>

      {posts.map((post) => (
        <div key={post._id} className="post">
          <img src={post.image} alt="" />

          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;