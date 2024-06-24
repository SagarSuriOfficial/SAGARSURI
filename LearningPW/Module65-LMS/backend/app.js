import express from 'express'      // const express = require('express');
import cors from 'cors'           // const cors = require('cors');
import cookieParser from 'cookie-parser' // const cookieParser = require('cookie-parser');
import { config } from 'dotenv';
import morgan from 'morgan';
import userRouter from './routes/user.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';
config()
const app = express();

app.use(express.json())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}))

app.use(cookieParser())
app.use(morgan('dev'))

app.use('/ping', (req, res)=>{
    res.send('/pong')
})

app.use('/api/v1/user', userRouter)

app.all('*' , (req, res)=>{
    res.status(404).send("OOPS! 404 Page Not Found!")
})

app.use(errorMiddleware)

export default app;