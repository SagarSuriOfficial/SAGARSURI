import { config } from 'dotenv'
config()
import app from './app.js'
import connectionToDB from './config/dbConnection.js'
import cloudnary from 'cloudinary'

const PORT = process.env.PORT || 8080

//Cloudnary configuration
cloudnary.v2.config({
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRET,
})

app.listen(PORT, async ()=>{
   await connectionToDB()
    console.log(`live at http://localhost:${PORT}`)
})