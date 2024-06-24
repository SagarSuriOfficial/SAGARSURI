import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import JWT from 'jsonwebtoken'

const emailRegex =
  /^(?=.{1,254}$)(?=.{1,64}@.{1,255}$)(?=[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?=^.{1,}@.{1,}$)(?=\S)(?=[a-zA-Z0-9._%+-]{1,64})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new Schema(
  {
    fullName: {
      type: "String",
      require: [true, "Name is Required"],
      minLength: [3, "Name atlist 3 caracter"],
      maxLength: [25, "Name should be less than 25 caracters."],
      uppercase: true,
      trim: true,
    },
    email: {
      type: "String",
      require: [true, "Email Required"],
      lowercase: true,
      trim: true,
      unique: true,
      match: [emailRegex, "Please Fill Valid Email Address"],
    },
    password: {
      type: "String",
      require: [true, "Password Require"],
      minLength: [6, "Password atlist 6 Caracters"],
      select: false,
    },
    avatar: {
      public_id: {
        type: "String",
      },
      secure_url: {
        type: "String",
      },
    },
    role: {
      type: "String",
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods = {
    generateJWTToken: async function(){
        return await JWT.sign(
            {id: this._id, email: this.email, subscription: this.subscription, role: this.role},
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY,
            }
        )
    },
    comparePassword: async function(plainTextPassword){
      return await bcrypt.compare(plainTextPassword, this.password)
    }
}

const User = model("User", userSchema);

export default User;
