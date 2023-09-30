const db = require('../database/models');
const {Op} = require('sequelize');

module.exports = {
    index: (req, res) => {
        db.Product.findAll()
        .then (productos => {
            /* res.send(productos) */
            res.render("index",{
                title: "Fiambreria",
                productos
            }
            )
        })
        
    },
}