
1. JavaScript’s Nature
    Single-threaded: Executes one line of code at a time.
    Synchronous: Operations execute sequentially, one after another.

 2. Blocking vs. Non-Blocking Code
- **Blocking**: Halts further code execution until the current task is complete. Example: `readFileSync()`.
- **Non-blocking**: Allows the program to continue executing other code. Example: `readFile()` with callbacks.

3. **How Asynchronous JavaScript Works**
- **Web APIs**:
    
    - Functions like `setTimeout()`, `fetch()`, and DOM events are part of the browser environment, not JavaScript itself.
    - These APIs let JavaScript "outsource" time-consuming tasks, freeing up the main thread.
- **Task Queue**: A waiting area for callbacks. Operates on a "first in, first out" (FIFO) principle.
- **Call Stack**: The main execution area where JavaScript runs functions. Operates on "last in, first out" (LIFO).

4. **Event Loop**
- Continuously checks:
    1. Is the call stack empty?
    2. If yes, it pulls the first callback from the task queue (or microtask queue) and pushes it onto the stack.

5. Promises and Microtasks
- **Promises**:
    
    - Simplify asynchronous handling compared to callbacks.
    - Create `microtasks`, which have higher priority than the task queue.
- **Microtask Queue**:
    
    - Includes Promise resolutions and MutationObservers.
    - Checked before the task queue by the event loop.

### `setTimeout()` and `clearTimeout()` Notes

#### `setTimeout()`

- Executes a function after a specified delay (in milliseconds).
    
- Syntax:
    setTimeout(function, delay);

#### `clearTimeout()`

- Cancels a timeout set by `setTimeout()`.
    
- To cancel a timeout, store the ID returned by `setTimeout()` in a variable:
- 


**`setTimeout()`**  
- Executes a function after a delay (in milliseconds).  
- Example:  
  ```javascript
  setTimeout(function () {
    console.log('Hello from callback');
  }, 2000);
  console.log('Hello from the top-level code');
```


# `setInterval()` and `clearInterval()`

`setInterval()` is used to run a specific callback function and repeat it at a set interval. The number of miliseconds passed to the function is the amoount of time to wait between each function call. Let's look at a simple example

```js
const intervalID = setInterval(myCallback, 1000);

function myCallback() {
  console.log(a, Date.now());
}
```

This will log the timestamp every second.

We can also pass in parameters

```JavaScript
const intervalID = setInterval(myCallback, 1000, 'Hello');

function myCallback(a) {
  console.log(a, Date.now());
}
```

`clearInterval()`

To clear or stop the interval, we can use `clearInterval()` and pass in the interval ID

```JavaScript
clearInterval(intervalID);
```

Let's create a script to change the body background color every second. We will have buttons to start and stop it.

```JavaScript
let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeBackground, 1000);
  }
}

function changeColor() {
  if (document.body.style.backgroundColor !== 'black') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}

function stopChange() {
  clearInterval(intervalID);
}

document
  .getElementById('start')
  .addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);

```


We could make it a random color by generating a hex value

```JavaScript
function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}
```

## Callback-Hell

**Callback hell** refers to a situation in programming where you have many nested callback functions, making your code look messy and hard to read. This usually happens when you're working with multiple asynchronous operations, like reading files, making API requests, or handling events, and each operation depends on the previous one to finish.

The problem with callback hell is that the code becomes deeply indented and difficult to follow as more operations are added, creating a "pyramid" shape in the code.

```javascript
doSomething(function(result1) {
    doSomethingElse(result1, function(result2) {
        doAnotherThing(result2, function(result3) {
            // More nested functions...
        });
    });
});

```
#### Why it’s a problem:

- **Hard to read**: The code gets messy and difficult to follow.
- **Error handling is complicated**: You have to handle errors at every level.
- **Maintainability**: As your app grows, the code becomes harder to update or debug.

#### How to avoid it:

You can avoid callback hell by using **Promises** or **async/await**, which makes the code cleaner and more readable, as it lets you handle asynchronous operations in a more straightforward way.

## Promises

A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows handling asynchronous code in a more readable way compared to callbacks.
Basic Structure of a Promise

A Promise has three possible states:

#Pending: The initial state of a promise. The operation is still in progress.
#Fulfilled: The operation completed successfully, and the promise is resolved with a result.
#Rejected: The operation failed, and the promise is rejected with an error.

#### Creating a Promise

You create a promise using the new Promise() constructor. It takes a function as an argument with two parameters: resolve and reject.

#resolve(value): Marks the promise as fulfilled with the provided value.
#reject(reason): Marks the promise as rejected with the provided reason (usually an error).


```javascript
function savetoDB(data){

return new Promise((resolve,reject) => {

let internetSpeed = r   .floor(Math.random()*10) +1;

if(internetSpeed >4){

resolve("Success: data was saved"); //result

}else{

reject("failure: weak connection")
}})}
```

### Promise chaining

Promises allow you to chain multiple `.then()` methods for sequential asynchronous operations. Each `.then()` returns a new promise, allowing you to chain more operations.
##### Handling Errors with `.catch()`

The `.catch()` method is used to handle errors in the promise chain. If any promise is rejected or an error is thrown inside a `.then()`, it is caught by the nearest `.catch()`.

```javascript
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
```


### Async / Await

`async/await` is built on top of promises and provides a more readable way to work with      asynchronous code.

- `async` makes a function return a promise.
- `await` pauses the execution of the function until the promise resolves.
######  Async example

```javascript
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
```

#### await example

```javascript
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
```

#### Handling Errors
Use try and catch to handle errors while promise are rejected

```javascript
	async function color(){

try{

await colorChange("red",1000); //Try and Catch is used in error handling

await colorChange("purple",1000);

await colorChange("orange",1000);

await colorChange("yellow",1000);

}catch(err){

console.log("Error Caught")

console.log(err)

}

}
```
