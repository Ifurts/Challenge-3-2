const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const webFrame = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false
    
})

server.get("/", function(req, res) {
    return res.render("home")
})

server.get("/about", function(req, res) {
    return res.render("about")
})
server.get("/courses", function(req, res) {
    return res.render("courses", {items: webFrame})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function(){
    console.log("Server is running")
})


// server.get("/courses/:id", function(req, res) {
//     const id = req.params.id;
//     const course = courses.find(course => course.id === id);
  
//     if (!course) {
//       return res.status(404).render("not-found.njk");
//     }
  
//     return res.redirect(`https://rocketseat.com.br/${course.id}`);
//   });