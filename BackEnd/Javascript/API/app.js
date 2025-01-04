let jsonRes = 
`{"fact":"About 37% of American homes today have at least 1 cat.","length":54}`;
console.log(jsonRes);

// To covert into valid form
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact)

//Fetch API
let url = "https://catfact.ninja/fact"

fetch(url)

.then((res) => {
    console.log(res);
   return res.json()
})
.then((data) =>{
    console.log("data 1 =",data.fact);
    return fetch(url);
})
.then((res)=> {
    return res.json();
})
.then((data2) => {
    console.log("data2=", data2.fact);
})
.catch((err) => {
    console.log("ERROR -", err);
})

//Fetch API with aync and await
async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    }catch(e){
        console.log("Error -",e);
    }
}

//Using axios to get API response
async function getFacts1(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("No fact found -",e);
    }
}

//Button HTML
let p = document.querySelector("#result");
let btn = document.querySelector("button");
btn.addEventListener("click", async() =>{
   let fact = await getFacts1();
    p.innerText = fact;
    console.log(fact);
})

//Sending Headers
let url2 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try{
        const config = {headers: {Accept : "application/json"}} //This will help in getting object form of json
        let res = await axios.get(url2,config);
        console.log(res.data); //this is giving in html format

    }catch(err){
        console.log(err);
    }
}



