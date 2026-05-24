import axios from "axios";
import { useState } from "react";

function CreatePost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("caption", caption);
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/posts/create-post",
        formData,
        {
          withCredentials: true,
        }
      );

      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Post upload failed");
    }
  }

  return (
    <div className="container">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Upload Post</button>
      </form>
    </div>
  );
}

export default CreatePost;