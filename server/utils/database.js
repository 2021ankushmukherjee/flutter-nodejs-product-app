const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log("Database is connected");
    })
    .catch((err) => {
      console.log("Database not connected", err.message);
    });
};


module.exports = connectDatabase;