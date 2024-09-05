import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://ertugal37:vmZRUFrKrd2hvsdZ@cluster0.3m0lx.mongodb.net/chat-app-db?');
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
}

export default connectToMongoDB;