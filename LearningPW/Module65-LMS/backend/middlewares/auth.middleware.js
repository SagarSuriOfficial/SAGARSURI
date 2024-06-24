import AppError from "../utils/error.util.js";
import JWT from "jsonwebtoken";
import User from "../models/user.model.js";

const isLoggedIn = async (req, res, next) => {
  try {
    // Extract token from cookies
    const token = req.cookies.token;

    // Check if token is missing
    if (!token) {
      return next(new AppError("Unauthenticated. Please login again.", 401));
    }

    // Verify the token
    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    // Check if the user exists in the database
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(new AppError("The user belonging to this token does not exist.", 401));
    }

    // Attach user to request object
    req.user = user;

    // Proceed to the next middleware
    next();
  } catch (err) {
    // Handle token expiration error
    if (err.name === "TokenExpiredError") {
      return next(new AppError("Your session has expired. Please log in again.", 401));
    }

    // Handle other JWT verification errors or database errors
    return next(new AppError("Failed to authenticate token.", 401));
  }
};

export { isLoggedIn };
