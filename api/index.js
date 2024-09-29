import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

//configure dotenv
dotenv.config();;


//connect to mongodb
mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.log(err.message);
});


//initialize express
const app = express(); 
app.use(express.json());

app.listen(3000, () => {
    console.log("Server started on port 3000!");
});

//test api route
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


