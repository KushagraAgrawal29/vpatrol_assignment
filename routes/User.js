const express = require("express");
const router = express.Router();

const { createUserOrUpdate } = require("../controllers/User");

router.get("/createUserOrUpdate",createUserOrUpdate);

module.exports = router;