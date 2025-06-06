import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});




const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\nMongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error:", error);
        process.exit(1); 
    }
};

export default connectDB;


 
 