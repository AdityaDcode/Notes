const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
});

// app.use((req,res) => {
// //console.log(req);
// console.log("Request received");
// res.send("This is a basic response")
// });

//Routing
app.get("/",(req,res)=>{
    res.send("Hello im root");
})

app.get("/apple",(req, res)=>{
    res.send("you contacted apple path");
})
app.get("/car",(req,res)=>{
    res.send("you contacted car path");
})

app.get("/:username/:id",(req, res)=>{
   let {username, id} = req.params;
   res.send(`Welcome to the page of ${username}`) 
})

app.get("/search",(req,res) => {
    let {q} =req.query;
    if(!q){
        res.send(`<h1>No request sent</h1>`)
    }
    res.send(`<h1>search result for query: ${q} </h1>`);
})
// //Default 
// app.get("*",(req,res)=>{
//     res.send("Invalid link");
// })