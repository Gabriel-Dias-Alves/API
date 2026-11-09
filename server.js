const express = require("express")
const api = express()
const ejs = require("ejs")
const dotenv = require("dotenv")
dotenv.config()
const {MongoClient} = require("mongodb")
const ObjectId = require("mongodb").ObjectId
const nodemon = require("nodemon")
const url= process.env.DATABASE_URL
const client = new MongoClient(url)
let collection

api.set("view engine", "ejs")
api.use(express.urlencoded({extended: true}))
api.get("index.ejs", (req,res)=>{
    res.render("index.ejs")
})
// criar o novo usuario do banco de dados
api.get("/show", async (erq, res)=> {
    const historias = await collection.find().toArray()
    res.render("show.ejs", {historias})
})
api.post("/show", async (req, res)=>{
    await collection.insertOne({
        name: req.body.name,
        suname: req.body.suname
    })
    res.redirect("/show")
})

api.post("/edit/:id", async (req, res)=>{
    await collection.updateOne({_id: new ObjectId(req.params.id)}, {$set:{
        name: req.body.name,
        suname: req.body.suname
    }})
    res.redirect("/show")
})
api.get("/edit/:id", async (req, res)=>{
    const historias = await collection.findOne({_id: new ObjectId(req.params.id)}).toArray()
    res.render("/edit.ejs", {historias})
})

api.get("/delete/:id", async (req, res)=>{
    await collection.deleteOne({_id: new ObjectId(req.params.id)})
    res.redirect("/show")
})

async function iniciar(){
    await client.connect()
    const db = client.db("historias")
    collection = db.collection("historias")

api.listen(3000, function(){
    console.log("O nosso servidor está funcionando na porta 3.000")
})
}
iniciar(). catch(function(erro){
    console.error("Erro ao iniciar a aplicação: " + erro)})








api.get("/",(req,resp) => {
    resp.send("Dale boy!")
})

