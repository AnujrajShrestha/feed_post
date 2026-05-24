const express= require('express')
const authcontroller=require("../controllers/auth.controller");

const router=express.Router();

router.post("/register",authcontroller.registerUser)
router.get("/test",(req,res)=>{
    res.json({
        message: "Test route",
        cookies: req.cookies
    })  
})

module.exports=router;