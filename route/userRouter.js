// assign express.Router()
var express=require('express')
var userModel=require('../model/User')
var router = express.Router()



router.post("/signup", async (req, res)=>{
    // controller HERE!!!!!!  ------> /api/v1/user/signup
    try {
        var newUser = new userModel({
            // creating an object of userRouter type to push into database
            ...req.body
        })
        // push the object into database
        await newUser.save()
        res.status(201).json({message:"User signed up successfully"})
    }
    catch (e) {
        res.status(500).json(e)
    }

})
router.post("/login", async (req, res)=>{
    // controller HERE   -----> /api/v1/user/login
    try{
        // assigning request body values to variables to handle
        const {username, password}=req.body
        // find the user based on information provided
        var if_user_exists=await userModel.findOne({username, password})
        if(if_user_exists){
            res.status(200).json({
                status:true,
                message:"User logged in successfully!"
            })
        }
        else {
            res.status(401).json({
                status:false,
                message:"Invalid username and password"
            })
        }
    }
    catch (e){
        res.status(500).json(e)
    }

})

module.exports=router