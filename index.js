const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const database = require("./config/database");

const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000

database.connect();

app.use("/api/v1/user",userRoutes);

app.get("/",(req,res) => {
    return res.status(200).json({
        success:true,
        message:"Your server is up and running...",
    });
});

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})

