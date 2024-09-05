
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
// const path = require('path');

import authRoute from "./routes/authroutes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config({path: '../.env'});

app.use(express.json());// to parse the incoming requests with JSON payloads {(from req.body)}
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'image')))

app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


// app.get("/",(req,res) =>{
//     res.send("Hello World, Ash")
// })
server.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server is Running on port ${PORT}`)
});

