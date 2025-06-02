import express from "express"

import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js";

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))

app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended:true, limit:"10kb"}))
app.use(express.static("public"))
app.use(cookieParser())



//routes

// import userRouter from './routes/user.routes.js'


//routes declartion
app.use("/api/v1/users", userRouter)
// app.use("/user",userRouter);
// http://localhost:8000/user/api/v1/user
// http://localhost:8000/user/register

export { app };