
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoute from "./routes/authroutes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config({path: '../.env'});

app.use(express.json());// to parse the incoming requests with JSON payloads {(from req.body)}
app.use(cookieParser());

app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


// app.get("/",(req,res) =>{
//     res.send("Hello World, Ash")
// })
app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server is Running on port ${PORT}`)
});

