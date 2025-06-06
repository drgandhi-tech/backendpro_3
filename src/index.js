// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import { app } from "./src/app.js";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import connectDB from "./db/index.js";

const app = express()
dotenv.config({
    path: './.env'
})

// const PORT = process.env.PORT || 8000;

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server is runinng at port: ${
        process.env.PORT
        }`);
        
    })
})
.catch((err) => {
    console.log("mongodb connect failed!!", err)
})
// (
//     async () => {
//         try{
//           await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//           app.on ("error", (error) => {
//             console.log("error:", error);
//             throw error
//           })
//           app.listen(process.env.PORT, () =>{
//             console.log(`app is listening port ${process.env.PORT}`);
//           })

//         }
//         catch(error){
//             console.error("ERROR:", error)
//             throw err
//         }
        
        
//     })
// ()