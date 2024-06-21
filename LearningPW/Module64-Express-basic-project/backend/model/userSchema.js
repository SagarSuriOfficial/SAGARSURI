const mongoose = require('mongoose')
const { Schema } = mongoose;
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        require: [true, 'User Name is Required'],
        minLength: [3 , "Name atlist five Caracters"],
        maxLength: [25, "Name LessThan 20 Caracter"],
        uppercase: true,
        trim: true
    },
    email: {
        type: String,
        require: [true , "User Email is Required"],
        unique: [ true, "Alerady Registered" ],
        lowercase: true,
    },
    password: {
        type: String,
        select: false,
    },
    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordExpireDate: {
        type: Date,
    }
},{
    timestamps: true
})


// password encryption//
userSchema.pre('save' , async function(next){
    if (!this.isModified('password')){
        return next()
    }
    this.password = await bcrypt.hash(this.password , 10)
    return next();
})

// +++++++++++++++ GENERATE TOKEN **************//
 userSchema.methods = {
    jwtToken(){
        return JWT.sign(
            {id: this._id, email: this.email},
            process.env.SECRET,
            {expiresIn: '24h'}
        )
    }
}

const userModel = mongoose.model('user' , userSchema);

module.exports = userModel;