//installing mongoose
const mongoose = require("mongoose");
const env = require("dotenv").config();

//defining function to connect to database
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    }catch (error){
        console.log("DB Connection error",error.message);
        process.exit(l);
    }
}

module.exports = connectDB;