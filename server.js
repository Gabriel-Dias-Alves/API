const express = require("express")
const api = express()
const ejs = require("ejs")
const {MongoClient} = require("mongodb")
const ObjectId = require("mongodb").ObjectId
const nodemon = require("nodemon")
const url= process.env.DATABASE_URL
const dotenv = require("dotenv")
dotenv.config()
const client = new MongoClient(url)
const db = client.db("historias")
const collection = db.collection("historias")


api.listen(3000, function(){
    console.log("O nosso servidor está funcionando na porta 3.000")
})

api.get("/",(req,resp) => {
    resp.send("Dale boy!")
})

