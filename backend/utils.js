import jwt from 'jsonwebtoken'
const authMiddleware =(req, res, next)=>{
        const headers = req.headers['authorization']
        const token = headers && headers.split("")[0]
        if(!token){
            return res.sendStatus(401).json({
                "error":true,
                "message":"No Token"
            })
        }
        jwt.verify(token , process.env.ACCESS_TOKEN_SECRET , (error , user)=>{
            if(error){
                return res.sendStatus(401).json({
                    "error":true,
                    "message":"Verification failed"
                })
            }
            req.user= user;
            next();
        })
}



import { User } from './Models/userModel.js'
const generateAccessTokenUtils = async (userID)=>{
    try{
        const user = await User.findById({userID})
        const AccessToken = user.generateAccessToken()
        return AccessToken
    }catch(error){
        console.log("Error in Generating Access Token")
    }
}
const generateRefreshTokenUtils = async (userID)=>{
    try{
        const user = await User.findById({userID})
        const RefreshToken = user.generateRefreshToken()
        user.refreshToken=RefreshToken;
        await user.save({validateBeforeSave:false})
        return RefreshToken
    }catch(error){
        console.log("Error in Generating Refresh Token")
    }
}


import nodemailer from 'nodemailer';
import Redis from 'ioredis'
const otpGeneratorAndMailer = async (userEmail)=>{
    const otp = await userCheck.generateOTP();
    if(!otp){
        return res.status(502).json({
            "error":true,
            "message":"OTP could not be generated due to technical issues"
        })
    }
    const OTPExpireIn = Date.now() + 15*60*1000;
    const redis = new Redis();
    redis.set( `otp:${userEmail}` , otp , 'EX' , 15*60)

    const mailStatus = mailUtil(userEmail , `Your OTP for ZCoder account retreival is ${otp}`)

    if(mailStatus){
        return res.status(200).json({
            "error":false,
            "message":"OTP sent to your Registered Email Id",
            "OTPExpiry":OTPExpireIn
        })
    }else{
        return res.status(200).json({
            "error":true,
            "message":"Error in sending OTP",
        })
    }
        
}

const mailUtil = (email , text )=>{
    
   let transporter = nodemailer.createTransport({
    service:'outlook',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASSWORD
    }
    })
    let mailInfo = {
    from:process.env.EMAIL, 
    to:email,
    text:text
    }
    transporter.sendMail(mailInfo , (error , info)=>{
    if(!info){
        console.log(error)
        return false
    }else{
        console.log(info)
        return true
    }
    })
}

export { authMiddleware,generateAccessTokenUtils , generateRefreshTokenUtils , otpGeneratorAndMailer , mailUtil}