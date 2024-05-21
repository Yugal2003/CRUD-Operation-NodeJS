const express  = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const jobRoutes = require("./routes/job");

mongoose.connect(process.env.DATABASE_URL).
then(() => console.log("Connection With Mongoose Database Successfully")).
catch(() => console.log("Error Connect To MongoDB"))

app.use(express.json());

app.use(jobRoutes)

app.listen(10000 , () => {
    console.log("Server running on Port : 10000");
})