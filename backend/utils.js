import jwt from 'jsonwebtoken'
const authToken =(req, res, next)=>{
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



import { User } from './Models/userModel'
const generateAccessToken = async (userID)=>{
    try{
        const user = await User.findById({userID})
        const AccessToken = user.generateAccessToken()
        return AccessToken
    }catch(error){
        console.log("Error in Generating Access Token")
    }
}
const generateRefreshToken = async (userID)=>{
    try{
        const user = await User.findById({userID})
        const RefreshToken = user.generateRefreshToken()
        await user.save({validateBeforeSave:false})
        return RefreshToken
    }catch(error){
        console.log("Error in Generating Refresh Token")
    }
}



export default {generateAccessToken , generateRefreshToken , authToken}