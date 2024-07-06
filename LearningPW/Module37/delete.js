import fs from 'fs'
import { fileName } from './logic.js'


 {
    fs.unlink(fileName, function(err){
       if(err){
           console.log("Not DELETE ERROR -", err.message)
       } else{
           console.log("File DELETED SUCCESSFULLY")
       }
    })
}