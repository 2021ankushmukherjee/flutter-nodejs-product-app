const express = require("express");
const app = express();
const upload = require("express-fileupload");
// const errorHandeler = require('./middleware/error')

// body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// static 

app.use(upload({ limits: 5242880 }));
app.use("/uploads", express.static("uploads"));


// route imports
const productRoute = require("./routes/productRoute");
app.use("/api/v1", productRoute);

// middleware for errors
// app.use(errorHandeler);



module.exports = app;