let url ="https://dog.ceo/api/breeds/image/random";

//Using axios to get API response
async function getImg(){
    try{
        let res = await axios.get(url);
        return res.data.message
    }catch(e){
        console.log("No image found -",e);
    }
}

//Button HTML
let img = document.querySelector("#result");
let btn = document.querySelector("button");
btn.addEventListener("click", async() =>{
   let link = await getImg();
    img.setAttribute("src", link)
    console.log(fact)
})
