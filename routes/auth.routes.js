const express = require('express');
const router = express.Router();
// const bcrypt = require("bcryptjs")

const User = require("../models/User.model.js")

// GET "/auth/signup" => renderiza al usuario un formulario de registro
router.get("/signup", (req, res, next) =>{
    res.render("auth/signup.hbs")
})


// POST "/auth/signup" => recibir la info del usuario y crearlo en la DB
router.post("/signup", async (req, res, next) =>{
    console.log(req.body)

try {
    await User.create({
        username: username,
        email: email,
        password: password
    })
    
} catch (error) {
    next (error)
}
})




module.exports = router;