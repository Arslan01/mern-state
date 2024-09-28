import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
dotenv.config();;

mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.log(err.message);
});

const app = express(); 

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

app.use("/api/user", userRouter);