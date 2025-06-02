import {asyncHandler} from "../utils/asyncHandler.js";


//  export const registerUser = asyncHandler( async (req, res) => {
    //get user details from frontend
    //validation - not empty 
    // check if user already  exists:username,email
    //check for image , check for avtar
    //upload them to cloudinary, avtar
    //create user object - create entry in db
    // remove password and refresh token field form response
    //check for user  creation
    // return res
    
    // res.status(200).json({
        // message:"ok server is running"
    // })
// });

// export {registerUser}


export const registerUser = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    return res.status(201).json({
        success: true,
        message: "User registered successfully.",
        data: { name, email }
    });
};
