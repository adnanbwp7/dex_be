const mongoose = require("mongoose");

let URI =
  "mongodb://localhost:27017/sneakers";
const connectToDatabase = () => {
  mongoose.connect(URI, () => {
    console.log("Your connection with mongoose has been established");
  });
};


module.exports = connectToDatabase;