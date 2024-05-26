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

app.get('/' , (req , res)=>{
   return  res.status(200).json({
    "message":"test",
    "error":false
   })
})

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true , limit:"16kb"}));


import { User } from './Models/userModel.js'
app.post('/SignUp' , async (req, res)=>{
   const username = req.username
   const email = req.email
   const password = req.password
   const techStack = req.techStack
   const language = req.language
   const codeforces = req.codeforces
   const codechef = req.codechef
   const leetcode = req.leetcode

   [techStack , language, codeforces , codechef,leetcode].some(field =>{
    if(!field){
        field = " ";
    }
   })

   const userExistenceCheck = await User.findOne({$or:[{email:email} , {username:username}]})
   if(!(userExistenceCheck===null) && (userExistenceCheck.email==email || userExistenceCheck.username==username)){
    return res.status(409).json({
        "error":true,
        "message":"User with same Email or username already exist"
    })
   }

   const newUser = await User.create({username , email , password, techStack ,language, codeforces, codechef, leetcode})
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
    console.log("Database Server Error occured")
})