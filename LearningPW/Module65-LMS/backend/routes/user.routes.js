import { Router } from "express";
import {
  getProfile,
  login,
  logout,
  register,
  forgotPassword,
  resetPassword
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const userRouter = Router();

userRouter.post("/register", upload.single("avatar"), register);
userRouter.post("/login", isLoggedIn, login);
userRouter.get("/logout", logout);
userRouter.get("/me", isLoggedIn, getProfile);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post('/reset-password', resetPassword)

export default userRouter;
