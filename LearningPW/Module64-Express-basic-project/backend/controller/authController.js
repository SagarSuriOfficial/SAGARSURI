const userModel = require("../model/userSchema");
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt')


// +++++++++++++Signup******************//
const signup = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  console.log(name, email, password, confirmPassword);

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }

  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "Please Provide a Valid Email",
    });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Password and confirm password doesn't match ",
    });
  }

  try {
    const userInfo = userModel(req.body);
    const result = await userInfo.save();

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Account Alerady exists with provided email id",
      });
    }
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};
// ++++++++++++++++SIGNIN+++++++++++++++//
const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Every Field is Mandatory",
    });
  }

  try {
    const user = await userModel
    .findOne({
         email
       })
    .select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials"
      });
    }

    const token = user.jwtToken();
    user.password = undefined;

    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };

    res.cookie("token", token, cookieOption);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error('Signin error:', error); // Log error for debugging
    res.status(500).json({
        success: false,
        message: error.message
    });
  }
};

// ***********GET USER+++++++++++++++++//
const getUser =async (req, res, next) => {
  const userId = req.user.id

  try {
    const user = await userModel.findById(userId)
    return res.status(200).json({
      success: true,
      data: user
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

// ++++++++++++LOGOUT+++++++++++++++//

const logout = (req, res) =>{
  try {
    const cookieOption = {
      expires: new Date(),
      httpOnly: true
    }
    res.cookie('token', null, cookieOption)
    res.status(200).json({
      success: true,
      message: "Logged Out"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

module.exports = {
  signup,
  signin,
  getUser,
  logout,
};
