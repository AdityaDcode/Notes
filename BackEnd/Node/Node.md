
**Node.js** is a **runtime environment** for executing JavaScript code outside of a web browser. It enables developers to use JavaScript to build server-side applications, making it possible to create full-stack applications with a single programming language.



### To run node js files 

==node filename.js==

### Process
- Process : This object provides information about, and control over , the current Node.js process.
- process.argv : return an array containing the command line arguments passed when the Node.js process was launched

```javascript
//process.argv command

let args = process.argv;

for(let i=2;i<args.length;i++){

console.log("Hello",args[i])

}

console.log(process.argv)
```

### Module.exports

 In Node.js, the `module.exports` object is used to export functions, objects, or primitives from a module so that they can be reused in other files. This allows you to create modular and reusable code. Every file in Node.js is treated as a separate module.

##### require() : 
a built in function to include external modules that exist in seperate files.

**module.exports** : a special object
```javascript

//this is math.js

exports.const.sum = (a,b) => a+b;

exports.const.mul = (a,b) => a*b;

exports.const.g =9.8;

exports.const.PI = 3.14;

  

//This can also be done by creating object but lengthy so above

// method is shortcut

  

// let obj ={

// sum:sum,

// mul:mul,

// g:g,

// PI:PI,

// };

  

// module.exports = obj; //Exports the module



//Script.js
const math = require("./math")

console.log(math)

console.log(math.sum(2,2));
```

### NPM (Node package manager)

npm is the standard package manager for Node.js 

 - Library of packages 
 - Command line tool
 
#### Installing Packages

   npm install <- package name ->

1. **node_modules** : The node_modules folder contains every installed dependency for your project.
2. **package-lock.json** : It records the exact version of every installed dependency,including its sub-dependencies and their versions.

```javascript
const figlet = require("figlet");

  
  

figlet("Hello World!!", function (err, data) {

if (err) {

console.log("Something went wrong...");

console.dir(err);

return;

}

console.log(data);

}

```

#### Package.json

The `package.json` file is a core part of any Node.js project. It acts as a manifest that provides information about the project, its dependencies, and scripts. This file is crucial for managing and sharing Node.js applications and packages.

##### Local and Global installation

Global : npm install -g <-package name->
Local :  npm install <-package name->

### Export and Import

- To use this we have to set type to module in package.json
- ==require vs import== : we cant selectively load only the pieces we need with require. but with import, we can selectively load only the pieces we need , which can save memory.
- Loading is synchronous for 'require' but can be asynchronous for import.



