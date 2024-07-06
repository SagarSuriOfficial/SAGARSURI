import AppError from "../utils/error.util.js";
import User from "../models/user.model.js";
import cloudnary from "cloudinary";
import fs from "fs";
import path from "path";

const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  httpOnly: true,
  secure: true,
};

const register = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return next(new AppError("All Fields are Required", 400));
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new AppError("Email Already Exist", 400));
  }

  const user = await User.create({
    fullName,
    email,
    password,
    avatar: {
      public_id: email,
      secure_url: "",
    },
  });

  if (!user) {
    return next(new AppError("User Registration fail please try again", 400));
  }

  // TODO: File Upload

  console.log(`file Details > `, JSON.stringify(req.file));
  if (req.file) {
    try {
      const result = await cloudnary.v2.uploader.upload(req.file.path, {
        folder: "lms",
        width: 250,
        hight: 250,
        gravity: "faces",
        crop: "fill",
      });

      if (result) {
        user.avatar.public_id = result.public_id;
        user.avatar.secure_url = result.secure_url;

        //Remove file from server
        fs.rm(`uploads/${req.file.filename}`, async (e) => {
          if (e) {
            console.log("e");
          } else console.log("File Successfully deleted");
        });
      }
    } catch (error) {
      return next(
        new AppError(error || "File not uploaded please try again", 400)
      );
    }
  }

  // await User.save();

  user.password = undefined;

  const token = await user.generateJWTToken();

  res.cookie("token", token, cookieOptions);

  res.status(201).json({
    success: true,
    message: "User Registered Successfully",
    user,
  });
};

const login = async (req, res, next) => {
  try {
    console.log(`something wrong`, req.body);

    const { email, password } = req.body;

    // Check if email or password is missing
    if (!email || !password ) {
     return next(new AppError("All Fields Required", 400));
    }

    // Find user by email and select password (assuming User is a Mongoose model)
    const user = await User.findOne({ email }).select("+password");

    // Check if user exists and if password matches
    if (!user || !user.comparePassword(password)) {
      return next(new AppError("Email or Password Does not Match", 400));
    }

    // Generate JWT token
    const token = await user.generateJWTToken();

    // Clear password from user object before sending in response
    user.password = undefined;

    // Set token in cookie (assuming cookieOptions is defined)
    res.cookie("token", token, cookieOptions);

    // Respond with success message and user details
    res.status(200).json({
      success: true,
      message: "User Logged In Successfully",
      user,
    });
  } catch (error) {
    // Handle any errors that occur during execution
    return next(new AppError(error.message, 500));
  }
};

const logout = (req, res) => {
  res.cookie("token", null, {
    secure: true,
    maxAge: 0,
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "User Logged Out Successfully",
  });
};

const getProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return next(new AppError("User not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "User Details",
      user,
    });
  } catch (error) {
    return next(new AppError("Failed to Fetch Profile Details", 500));
  }
};

const forgotPassword = async (req, res) =>{
  const { email } = req.body;

  if(!email){
    return next(new AppError("Email Required", 400));
  }

  const user = await User.findOne({email})
  if(!user){
    return next(new AppError("Email Not Registered", 400));
  }

  const resetToken = await user.generatePasswordResetToken();

  await user.save();
  const resetPasswordURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  try {
    await sendEmail(email, subject, message);
    res.status(200).json({
      success: true,
      message: `Reset Password Token has been sent to ${email} successfully`
    })
  } catch (error) {
    user.forgotPasswordExpiry = undefined;
    user.forgotPasswordToken = undefined;
    await user.save();
    return next(new AppError(error.message, 400));
  }
}

const resetPassword = () =>{

}
export { register, login, logout, getProfile, forgotPassword, resetPassword };
