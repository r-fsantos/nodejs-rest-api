const express = require("express")
const app = express()
const port = 3000
const runningServerMessage = "Server running at door " + port
const runningServiceMessage = "You are ont the service root."

// adding port that the server must listen, and default console.log message
app.listen(port, () => console.log(runningServerMessage))

// first route -> "root"
app.get("/", (req, res) => res.send("Server running properly."))

// second rout -> 'atendimentos'
// req -> request made by the client
// res -> response to client
app.get("/atendimentos", (req, res) => res.send(runningServiceMessage))

