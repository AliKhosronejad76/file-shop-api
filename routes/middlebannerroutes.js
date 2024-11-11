const express = require("express");

const router = express.Router();
const Middlebannerctrl = require("../controllers/midddlebannerctrl");

// 
router.get("/middle-banners" , Middlebannerctrl.getAllMiddleBanners);
router.post("/create-new-middle-banner" ,Middlebannerctrl.createMiddleBanner)

// 

module.exports = router; 