import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
})

import express, { urlencoded } from 'express'
const app = express()

import cors from 'cors'
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))


app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true , limit:"16kb"}));


import  {User}  from "./Models/userModel.js";
app.post('/SignUp' , async (req, res)=>{
   const username = req.username
   const email = req.email
   const password = req.password
   const techStack = req.techStack
   const language = req.language
   const codeforces = req.codeforces
   const codechef = req.codechef
   const leetcode = req.leetcode

    if([username , email , password].some(field=>{field === null})){
        return res.status(409).json({
            "error":true,
            "message":"Required Fields not added"
        })
    }

    if(password.length < 0){
        return res.status(409).json({
            "error":true,
            "message":"Password must have at least 8 characters"
        })
    }

   [techStack , language, codeforces , codechef,leetcode].map(item=>{
    if(item === '' || item===null)
            item=" "
   })

   const userExistenceCheck = await User.findOne({$or:[{email:email} , {username:username}]})
   if(!(userExistenceCheck===null) && (userExistenceCheck.email==email || userExistenceCheck.username==username)){
    return res.status(409).json({
        "error":true,
        "message":"User with same Email or username already exist! Choose a different one"
    })
   }

   const newUser = await User.create({username , email , password, techStack ,language, codeforces, codechef, leetcode , verfied:false})
   if(newUser === null){
    return res.status(505).json({
        "error":true,
        "message":"New User not Created due to Server Error"
    })
   }

   return res.status(200).json({
    user:newUser,
    "error_status":false,
    "message":"Succesfully created account. GO LOG IN!!!!"
})

})
//email verification to be added later on and not until done user cannot use ForgotPassword until email is verfied

import {authMiddleware, generateAccessTokenUtils , generateRefreshTokenUtils ,otpGeneratorAndMailer } from './utils.js'
import cookieParser from 'cookie-parser'
app.use(cookieParser());

app.post('/LogIn'  , async (req, res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const userExistenceCheck=await User.findOne( {username:username} );
    if(!userExistenceCheck){
        console.log("User Does not exist!!");
       return  res.status(404).json({
            user:null,
            "error":true,
            "message":"User Does not Exist!! Give a Valid Username"
        })
    }
    const user=userExistenceCheck;
    const passwordCheck=await user.isPasswordCorrect(password)
    if(!passwordCheck){
        console.log("Password is Incorrect")
       return  res.status(404).json({
            user:null,
            "error":true,
            "message":"Incorrect Password"
        })
    }
    const AccessToken = await generateAccessTokenUtils(user._id);
    const RefreshToken = await generateRefreshTokenUtils(user._id);
    const loggedInUser=await User.findById(user._id).select(" -password -refreshToken")
    const options={
        httpOnly:true,
        secure:true
    }

    return res.status(200).cookie("AccessToken", AccessToken, options).cookie("RefreshToken" , RefreshToken, options).
    json({
        "error":false,
        "loggedInUser":loggedInUser, 
        "AccessToken":AccessToken , 
        "RefreshToken":RefreshToken,
        "message":"Succesfull Login"
    });
})

app.post('/LogOut', authMiddleware , (req, res)=>{
    const user = req.user;
    const AccessToken=req.AccessToken;
    try{
          return  res.status(200).clearCookie('AccessToken').json({
            "error":false,
            "message":"User Logged Out Successfully"
        })
    }catch(error){
      return  res.status(500).json({
            "error":true,
            "message":"Error in Server while logging Out the user"
        })
    }
} )



// import http from 'http'
// const server = http.createServer(app)

// import { Server } from 'socket.io'
// const io =new Server(server)

// app.use(express.static('views'));
// app.set('view engine' , 'hbs');

// io.on('connection' , (socket) =>{
//     console.log(socket.id);
//     socket.on('message' , message =>{
//         io.emit('message' , message)
//     })
// })

// app.get('/ChatRoom' , (req , res)=>{
//     return res.status(200).render('index.hbs')
// })

// server.listen(3000 , ()=>{
//     console.log("Listening on port 3000")
// })


import mongoose from 'mongoose'
const mongooseConnect = async ()=>{
    try{
        const connectionResponse = await mongoose.connect(process.env.DB);
        console.log("Mongo Connected Succesfully")
    }catch(error){
        console.log("Error Ocurred in connecting to MongoDB")
        throw new Error(error)
    }
}
mongooseConnect().then(()=>{
    app.on("error" , (error)=>{
        console.log(error)
        throw error;
    })
    app.listen( process.env.PORT || 3000 , ()=>{
        console.log(`You are listening on port ${process.env.PORT}`);
    } )
}).catch(error=>{
    console.log("Server Error occured")
})