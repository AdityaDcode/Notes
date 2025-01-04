let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick = function(){
    //     console.log("button clicked");
    // }
    // btn.onmouseenter = function(){
    //     console.log("entered the button")
    // }
    btn.addEventListener("click",singleClick);
    btn.addEventListener("dblclick",doubleClick);
}
 function singleClick(){
    console.log('single click');
}
 function doubleClick(){
    console.log('double click');
}

let btn1 = document.querySelector(".keyboard");
btn1.addEventListener("click",function(event){
    console.log(event);
})
let input = document.querySelector("input");
input.addEventListener("keydown",function(event){
    console.log(event.code);
    console.log(event.key);
})

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let user = this.elements[0];
    let pass = this.elements[1];
   alert(`Username is "${user.value}" password is "${pass.value}"`)
})

let inp = document.querySelector("#inp");
inp.addEventListener("change",function(){
    console.log("input changed");
    console.log("Final value =",this.value)
})
let inp2 = document.querySelector("#inp2");
let p = document.querySelector("p");
inp2.addEventListener("input",function(){
    console.log("input changed");
    console.log("Final value =",this.value)
    p.innerText = this.value;
})