const express = require("express");
const { loadData } = require("../controllers");

const router = express.Router();

router.get("/api/data", loadData);

module.exports = router;
