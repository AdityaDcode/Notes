let smallImg = document.getElementsByClassName("oldImg");

for(let i=0;i<smallImg.length;i++){
    console.dir(smallImg[i].src);
    smallImg[i].src = "assets/spiderman_img.png";
}

console.dir(document.querySelector('p'));

let heading = document.querySelector('h1');
heading.innerHTML = "<u>Spider Man</u>";

//get attribute and set attribute
let img = document.querySelector("img");
console.log(img.getAttribute("id"));
img.setAttribute("src","assets/creation_2.jpeg");

//Style
heading.style.backgroundColor = "yellow";

//Navigation
img.previousElementSibling.style.color = "blue";

//Inserting an element
let newP = document.createElement('p');
newP.innerText = "Hi, I'm new paragraph ";
let box = document.querySelector(".box");
newP.append("new text");
box.appendChild(newP);
