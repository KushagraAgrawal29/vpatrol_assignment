const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const database = require("./config/database");