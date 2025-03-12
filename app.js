const express = require("express");
const app = express();
const path = require("path");
const env = require("dotenv").config();
const db = require("./config/db");
const userRouter = require("./routes/userRouter")
db()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",[path.join(_dirname,'views/user'),path.join(_dirname,'views/admin')])  //mentioning where views folder
app.use(express.static(path.join(_dirname,"public")));

app.use("/",userRouter)//specifying user,s route //to handle all the request from user ,we create a file userRouter

const PORT =3001 || process.env.PORT;
app.listen(process.env.PORT ,()=>{
    console.log("Server is running");
})

module.exports = app ;