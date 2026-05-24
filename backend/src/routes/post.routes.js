const express= require('express')
const router=express.Router()
const multer= require("multer")
const postController= require('../controllers/post.controller')

const upload=multer({storage:multer.memoryStorage()})

router.post("/create-post", upload.single("image"),postController.create_post)

module.exports=router