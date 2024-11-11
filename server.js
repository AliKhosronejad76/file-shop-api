const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const xssClean = require("xss-clean");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
//midd
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(xssClean());
app.use(hpp());
app.use(mongoSanitize());



//data base
mongoose.connect("mongodb://127.0.0.1:27017/fileshop")
.then(e=>{
    app.listen(4000);
    console.log("app run on port 4000 , databaseConnected")
})
.catch(err=>console.error(err));

//data base



// routes

app.get("/",(req,res)=>{
    res.status(200).json({
        msg:"home",
    })
});


// middlebanner route
app.use("/api",require("./routes/middlebannerroutes"));


// routes

