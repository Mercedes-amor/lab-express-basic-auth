const express = require('express');
const router = express.Router();
// const bcrypt = require("bcryptjs")

const User = require("../models/User.model.js")

// GET "/auth/signup" => renderiza al usuario un formulario de registro
router.get("/signup", (req, res, next) =>{
    res.render("auth/signup.hbs")
})







module.exports = router;