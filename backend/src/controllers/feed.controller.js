// const jwt = require("jsonwebtoken");

// const postModel = require("../models/post.model");

// async function feed(req, res) {
//   const posts = await postModel.find();

//   return res.status(200).json({
//     message: "Post fetched successfully",

//     posts,
//   });

//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const user = await userModel.findOne({
//       _id: decoded.id,
//     });
//   } catch (err) {
//     return res.status(401).json({
//       message: "Token is invalid",
//     });
//   }
// }

// module.exports = { feed };


const postModel = require("../models/post.model");

async function feed(req, res) {

    try {

        const posts = await postModel.find();

        return res.status(200).json({
            message: "Posts fetched successfully",
            posts
        });

    } catch (err) {

        return res.status(500).json({
            message: "Server error",
            error: err.message
        });

    }
}

module.exports = { feed };