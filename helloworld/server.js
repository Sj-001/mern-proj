const express=require("express")
const bodyparser=require("body-parser")
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', (req, res)=>{
  res.send("This is from Nodejs")
})

app.get("/api/getdata", (req, res)=>{
  res.send("This is hihi")
})

app.get("/api/getnames", (req, res)=>{
  var names=["john", "ronaldo", "sai"]

  res.send(names)
})

app.post("/api/senddata", (req, res)=>{
  var username=req.body.username
  res.send("The value is "+username)
})

app.listen(5000, ()=>{
  console.log("Node JS server is started")
})