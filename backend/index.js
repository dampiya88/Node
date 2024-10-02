import express from "express";

const app = express();
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

app.get("/",(req,res)=>{
    res.send("Home page new test 123")
})

app.get("/members",(req,res)=>{
    res.send("Members 123")
})

app.post("/members",()=>{
    console.log("Members page")
})