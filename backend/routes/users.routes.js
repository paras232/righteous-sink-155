const express=require('express')
const {UserModel}=require('../models/userModel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {username,email,password,phone}=req.body
    try{
        bcrypt.hash(password, 5, async(err,hash)=>{
            if(err) res.send({"msg":"something went wrong","error":err.message})
            else{
                const user=new UserModel({username,email,password:hash,phone})
                await user.save()
                res.send({"msg":"New user has been Registered."})
            }
        })
    }catch(err){
        res.send({"msg":"something went wrong","error":err.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err,result)=>{
                if(result){
                    let token = jwt.sign({userID:user[0]._id},"masai")
                    res.send({"msg":"Logged in Successfully","token":token})
                }else{
                    res.send({"msg":"Wrong Credentials"})
                }
            })
        }else{
            res.send({"msg":"Wrong Credentials"})
        }
    }catch(err){
        res.send({"msg":"something went wrong","error":err.message})
    }
})

module.exports={
    userRouter
}