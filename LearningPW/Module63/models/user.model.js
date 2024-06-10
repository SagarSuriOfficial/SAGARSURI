const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
       type: String,
        required: [true , "Name is Reqkuired"],
        trim: true,
        maxLength: [50, "Name must be 50 caracter"]
    },
    email: {
        type: String,
        required: [true , "Email Required"],
        uniqe: true
    }
})

module.exports = mongoose.model('user', userSchema)