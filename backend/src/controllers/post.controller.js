const postModel = require("../models/post.model");

const uploadFile = require("../services/storage.service");

const jwt = require("jsonwebtoken");

async function create_post(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
      image: result.url,

      caption: req.body.caption,
    });

    const user = await userModel.findOne({
      _id: decoded.id,
    });

    res.status(201).json({
      message: "Post uploaded successfully",

      post,
    });
    
  } catch (err) {
    return res.status(401).json({
      message: "Token is invalid",
    });
  }

  res.send("post created successfully");
}

module.exports = { create_post };
