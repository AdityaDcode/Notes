let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    let dltBtn = document.createElement("button");
    dltBtn.innerText = "delete";
    dltBtn.classList.add("delete");
    item.appendChild(dltBtn);
    ul.appendChild(item);
    inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//        let par = this.parentElement;
//        console.log(par);
//        par.remove();
//     });
// }
//Event bubbling
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})