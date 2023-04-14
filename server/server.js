const app = require("./app");
const dotenv = require("dotenv");

// config path
dotenv.config({path:"config/config.env"});


// Database Connection
const connectDatabase = require("./utils/database");
connectDatabase();


app.listen(process.env.PORT, ()=>{
    console.log(`server is listening on ${process.env.PORT}`);
});