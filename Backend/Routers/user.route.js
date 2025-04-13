
const express = require("express");
const { UserRegister, UserLogin, UserProfile, userLogout } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/TokenMiddleware");
const { generateContent } = require("../Services/AiModel");
const generateChat = require("../Services/ChatAiModel");
const { BookingController } = require("../controllers/booking.controller");

const route = express.Router();


route.post("/register" , UserRegister );
route.post("/login" , UserLogin);
route.get("/profile" , authMiddleware ,  UserProfile);
route.post("/logout" , authMiddleware , userLogout);
route.post("/generate-question" , authMiddleware , generateContent);
route.post("/generate-chat" , authMiddleware , generateChat);
route.post("/booking" , authMiddleware , BookingController)
module.exports = route ;