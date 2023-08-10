const express = require('express');
const router = express.Router();
// const bcrypt = require("bcryptjs")

const User = require("../models/User.model.js")

//ITERATION 1
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
    res.redirect("/auth/login")
} catch (error) {
    next (error)
}
})

//ITERATION 2
// GET "/auth/login" => renderiza al usuario un formulario de acceso
router.get("/login", (req, res, next) => {
    res.render("auth/login.hbs")
  })

  // POST "/auth/login" => recibir las credenciales del usuario y validarlo/autenticarlo
router.post("/login", async (req, res, next) =>{
    console.log(req.body)


    try {
        //Buscamos al usuario por su email
        const foundUser = await User.findOne({email: req.body.email})
        console.log("foundUser", foundUser)

        if (foundUser === null) {
            res.render("auth/login.hbs", {
                errorMessage: "Usuario no encontrado"
            })
            return;
        }

        //Verificamos que la contraseña coincida
        const isPasswordCorrect = await bcrypt.compare(password, foundUser.password)
        console.log(isPasswordCorrect) // true or false
    
        if (isPasswordCorrect === false) {
          res.render("auth/login.hbs", {
            errorMessage: "Contraseña no valida"
          })
          return;
        }

        //Aquí falta todo lo del vídeo de la tarde
        //Sesiones de usuario
    }
})

module.exports = router;