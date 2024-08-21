
import express from "express"
import dotenv from "dotenv"
import authRoute from "./routes/authroutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config({path: '../.env'});

app.use(express.json());// to parse the incoming requests with JSON payloads {(from req.body)}

app.use("/api/auth",authRoute);


// app.get("/",(req,res) =>{
//     res.send("Hello World, Ash")
// })
app.listen(PORT,() => {
    connectToMongoDB()
    console.log(`Server is Running on port ${PORT}`)
});

