// require('dotenv').config({path:'./env'})
import donenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import connectDB from "./db/index";

const app = express()
dotenv.config({
    path: './env'
})

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