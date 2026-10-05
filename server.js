const express = require("express")
const api = express()
const ejs = require("ejs")
const {monngoClient} = require("mongoose")
const ObjectId = require("mongodb").ObjectId
env
const nodemon = require("nodemon")
const url= process.env.DATABASE_URL
const doteenv = require("dotenv")
doteenv.config()
const client = new monngoClient(url)
const db = client.db("historias")



api.listen(3000, function(){
    console.log("O nosso servidor está funcionando na porta 3.000")
})

api.get("/",(req,resp) => {
    resp.send("Dale boy!")
})
