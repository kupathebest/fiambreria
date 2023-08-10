const express = require('express');
const router = express.Router();
const {index,login,admin} = require("../controllers/userController")

/* GET home page. */
router.get('/', index);
router.get('/login',login);
router.get('/admin',admin);

module.exports = router;