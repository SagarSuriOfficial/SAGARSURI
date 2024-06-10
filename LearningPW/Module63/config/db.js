const mongoose = require('mongoose');

const connectToDb = async() => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`connected to DB: ${conn.connection.hostname}`)
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit(1)
    })
}