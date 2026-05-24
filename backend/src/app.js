const express= require("express")
const authRoutes=require('./routes/auth.routes')
const postRoutes=require("./routes/post.routes")
const feedRoutes=require("./routes/feed.route")
const cookiePaser= require("cookie-parser")
const cors= require('cors')

const app=express()

app.use(cors({
     origin: 'http://localhost:5173',
     credentials:true
}))

app.use(express.json())
app.use(cookiePaser())
app.use('/api/auth',authRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/feed",feedRoutes)

module.exports=app