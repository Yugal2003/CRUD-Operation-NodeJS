const express  = require("express");
const mongoose = require("mongoose");
const app = express();

const jobRoutes = require("./routes/job");

mongoose.connect("mongodb://localhost:27017/jobApp_Assignment").
then(() => console.log("Connection With Mongoose Database Successfully")).
catch(() => console.log("Error Connect To MongoDB"))

app.use(express.json());

app.use(jobRoutes)

app.listen(1234 , () => {
    console.log("Server running on Port : 1234");
})