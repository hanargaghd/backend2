const express = require("express");
const router = express.Router();
const banner = require("../controller/Banner");

router.get("/api/banner",banner.getBanner);

module.exports = router;