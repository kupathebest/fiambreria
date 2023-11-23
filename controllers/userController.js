module.exports = {
    index: (req, res) => {
        res.render('user',
         {title: "Fiambreria user"}
         )

    },
    admin:(req, res) =>{
        res.render("admin",
        {title:"bienvenido,administrador"}
        )
    },
    login:(req, res) =>{
        res.render("login",
        {title:"login panel"}
        )
    }
}