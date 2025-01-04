let h1 = document.querySelector("h1");
function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        let num = Math.floor(Math.random()*5);
        if(num > 3){
            reject();
        }
        setTimeout(() =>{
            h1.style.color = color;
            resolve("color changed");
           }
    ,delay);
    })

}
//This is shortcut method to color change using "await"
async function color(){
    try{
        await colorChange("red",1000);    //Try and Catch is used in error handling
        await colorChange("purple",1000);
        await colorChange("orange",1000);
       await colorChange("yellow",1000);
    }catch(err){
        console.log("Error Caught")
        console.log(err)
    }
    
}

//This method is called promise chaining
colorChange("red",1000).then(()=>{
    //console.log("red color was completed");
    return colorChange("orange",1000);
})
.then(()=>{
    //console.log("Orange color was completed");
    return colorChange("purple",1000);
})
.then(()=>{
    //console.log("purple color was completed");
    return colorChange("yellow",1000);
})
.then(()=>{
    //console.log("Yellow was completed");
})


// colorChange("red",1000,()=>{
//     colorChange("orange",1000,()=>{
//         colorChange("green",1000,()=>{
//             colorChange("yellow",1000)
//         })
//     })
// })

function savetoDB(data){
    return new Promise((resolve,reject) => {
            let internetSpeed = Math.floor(Math.random()*10) +1;
            if(internetSpeed >4){
                resolve("Success: data was saved"); //result
            }else{
                reject("failure: weak connection")  
            }
        }
    )
}
// savetoDB("data").then(()=>{
//     console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// })


//promise chaining
savetoDB("apna college").then((result)=>{
    console.log("data1 saved");
    console.log(result);
    return savetoDB("helloworld");
})
.then((result)=>{
    console.log("data2 saved");
    console.log(result);
    return savetoDB("data3");
})
.then((result)=>{
    console.log("data3 saved");
    console.log(result);
})
.catch((error)=>{
 console.log("Promise was rejected");
 console.log(error);
})

//asyn and throw

async function greet(){
    //throw "404 page not found"
    return "Hello!"
}

greet()
.then((result)=>{
    console.log("Promise resolved async");
    console.log(result)
})
.catch((err)=>{
    console.log("rejected",err)
})

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10) +1;
            console.log(num);
            resolve();
        },1000);
    })
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();

}