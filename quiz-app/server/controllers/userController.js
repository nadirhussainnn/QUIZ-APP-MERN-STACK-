const User=require('../models/userModel')
const path=require('path')
const fs=require('fs')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const register=async(req, res)=>{
    console.log(`Register API`)
    
    const {username, password}=req.body
    const {image}=req.files

    try{

        const existingUser=await User.findOne({username})
        if(!existingUser){

            image.mv(path.resolve(__dirname,'../public/users',username+'-'+file.name, (error)=>{
                if(!error){
                    const user=await User.create({...req.body})
                    if(user){
                        res.status(200).send({success:true, msg:'Created SUccessfully', data:user})
                    }    
                    else{
                        res.status(400).send({success:false, msg:'Failed to create'})
                    }
                }
            }))
        }
        else{
            res.status(400).send({success:false, msg:'User already exists'})
        }
    }
    catch(error){
        res.status(400).send(error.message)
    }
}

const login=async(req, res)=>{
    console.log(`Login API`)
    
    const {username, password}=req.body

    try{

        const user=await User.findOne({username})

        if(user){

            const isPasswordMatched=await bcrypt.compare(user.password,password)
            if(isPasswordMatched){
                const token=await jwt.sign({username:user.username}, process.env.JWT_SECRET_KEY,{expiresIn:60*60*24})
                res.status(200).send({success:true, msg:'Fetched successfully', token:token, data:user})
            }
            else{
                res.status(400).send({success:false, msg:'Pass not match'})
            }
        }
    }
    catch(error){
        res.status(400).send(error.message)
    }
}


module.exports={
    login,
    register
}

