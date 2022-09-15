const express = require("express")

server = express()

server.get("/", (req, res)  => {
    res.send("Lesi, si ves esto n sabes lo que paso el viernes");
})

server.get("/", (req, res)  => {
    res.send("Lesi, si ves esto n sabes lo que paso el viernes");
})

server.listen(8080, () => {
    console.log("server abierto");
})