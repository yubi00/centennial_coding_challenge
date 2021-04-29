const express = require("express");
const { loadData, getSummary } = require("../controllers");

const router = express.Router();

router.get("/api/data", loadData);
router.get("/api/summary", getSummary);

module.exports = router;
