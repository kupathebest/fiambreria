const express = require('express');
const router = express.Router();
const {index, login, admin} = require("../controllers/userController")

/* Legamos con /users */
router.get('/', index);
router.get('/admin',admin);
router.get('/login',login);


module.exports = router;