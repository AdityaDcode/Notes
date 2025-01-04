console.log("Hello")
let pencilPrice=5;
let penPrice =10;
let total = `Total price is ${pencilPrice+penPrice}`;
console.log(total);
// alert("This is alert!");
// let name= prompt("Enter your name");
console.log(`Welcome ${name}`);
//Object Literals
const student = {
    name: "Aditya",
    age:23,
    marks: 94.4
};

const item ={
    penPrice: 100.99,
    discount:50,
    colors: ["red","pink"]
};
function printTables(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
function multipleGreet(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}
let greet = function(){
    console.log("Hello");
}
multipleGreet(greet,6);
const calculator ={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }

};

//SetTimeout and arrow function
console.log("Hey there!");
setTimeout(()=>{
    console.log("apna college");
},4000);
console.log("Welcome to");

//setInterval
let id= setInterval(()=>{
    console.log("Aditya");
},2000);
clearInterval(id);


//this keyword with arrow functions
const student1 = {
name: "Aditya",
marks: 100000,
prop: this, //global scope
getName: function(){
console.log(this);
return this.name;
},
getMarks: ()=>{
    console.log(this);
    return this.marks;  //parents scope -> window
},
getInfo1: function(){
    setTimeout(()=>{
        console.log(this);  //Student
    },2000);
},
getInfo2: function(){
    setTimeout(function(){
        console.log(this);  //Window
    },2000);
}

};