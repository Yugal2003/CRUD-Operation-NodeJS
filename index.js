const express  = require("express");
const mongoose = require("mongoose");
const app = express();

const jobRoutes = require("./routes/job");

mongoose.connect("mongodb+srv://reactjsgeekster:1eVv5hEKdNnAXs71@crudapi.rf1kmhx.mongodb.net/").
then(() => console.log("Connection With Mongoose Database Successfully")).
catch(() => console.log("Error Connect To MongoDB"))

app.use(express.json());

app.use(jobRoutes)

app.listen(10000 , () => {
    console.log("Server running on Port : 10000");
})