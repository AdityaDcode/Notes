const express = require("express");
const app = express();
const path = require("path") //this is used to chnage the views directory accessibility to ejs


const port = 8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

//Rolldice
app.get("/rolldice",(req,res) =>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs",{num : diceVal})
})

//Instagram
app.get("/ig/:username",(req,res)=>{
    let followers = ["slice","peter","john","paul"]
    let {username} = req.params;
    res.render("instagram.ejs", {username,followers});
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})

//animal instagram

app.get("/anigram/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    res.render("anigram.ejs",{ data });

})

//Serving static files
app.use(express.static(path.join(__dirname,"public")));

 