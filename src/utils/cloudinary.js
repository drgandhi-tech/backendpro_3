import {v2 as cloudinary} from "cloudinary"
import fs from "fs";

cloudinary.config({

cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
api_key:process.env.CLOUDINARY_API_KEY,
api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadCloudinary =async (locaFilePath) => {
    try {
        if (!locaFilePath) return null
        //upload the  file on cloudinary
        const response = await cloudinary.uploader.upload
        (
            locaFilePath, {
                resource_type: "auto"
            }
        ) // file has been uploaded
        console.log("file is uploaded on cloudinary",
            response.url
        );
        return response;
    } catch (error) {
        fs.unlink(locaFilePath) //remove the locally saved temporary as the upload operation got failed
        return null ;
        
    }
}











export {uploadCloudinary};


// const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            })