const express = require("express")
const api = express()
const drive = "mongodb+srv://gabrielalvesrad_db_user:admin@cluster0.oon69an.mongodb.net/?appName=Cluster0"

api.listen(3000, function(){
    console.log("O nosso servidor está funcionando na porta 3.000")
})

api.get("/",(req,resp) => {
    resp.send("Dale boy!")
})
