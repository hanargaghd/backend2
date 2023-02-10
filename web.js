// nodemon

// npm install express

// npm install path

// npm install mongoose

// npm install cors

// npm install body-parser

// npm install multer

// npm install dotenv

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bp = require("body-parser");
const multer = require("multer");
const bannerRoute = require("./routes/banner");
const env = require("dotenv");
env.config();

app.use(cors());
app.use(bannerRoute);
mongoose.connect(process.env.mongourl,()=>{
    console.log("Database амжилттай холбогдлоо");
    app.listen(process.env.dev,()=>{
        console.log(`App started on port http://localhost/${process.env.dev}`);
    })
});