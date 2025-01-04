let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let list = document.querySelector("#list")

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colArr = await getCollege(country);
    console.log(colArr);
    show(colArr);
});

function show(arr){
    for (col of arr){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(country) {
    try{
        let res = await axios.get(url+country);
        return res.data
    }catch(e){
        console.log("Error",e);
        return [];
    }
}