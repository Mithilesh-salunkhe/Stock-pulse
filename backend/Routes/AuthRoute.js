const router = require("express").Router();
const { Signup } = require("../Controllers/AuthController");

router.post("/signup", Signup); // ✅ POST /auth/signup
module.exports = router;
