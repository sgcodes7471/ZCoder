import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
})

import express from 'express'
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