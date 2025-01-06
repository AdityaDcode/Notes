#### Object Prototype

In JavaScript, **prototypes** are the mechanism by which objects inherit features from one another. Every JavaScript object has a **prototype**, which is another object that acts as a template for the original object. This forms the basis of the prototype chain, a key feature of JavaScript's inheritance model.

#### **1. The `prototype` Property**

The `prototype` property is specific to **constructor functions** and defines properties and methods that will be inherited by instances of that constructor.

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Alice');
person1.greet(); // Output: Hello, my name is Alice

```

#### **2. The `__proto__` Property**

All JavaScript objects have an internal `[[Prototype]]` property that points to their prototype. This is accessible via the `__proto__` property (non-standard but widely supported).

```Javascript
const obj = { a: 1 };
console.log(obj.__proto__); // Output: {constructor: ƒ, ...} (Object prototype)

```

#### Factory Functions

**Factory functions** are functions that create and return objects. They provide an alternative to using constructor functions or ES6 classes for creating objects. Factory functions allow you to encapsulate object creation logic and are especially useful for creating objects with private data or shared behavior.

Disadvantage of factory functions is it creates new copy of functions for every object created taking memory

```Javascript
function createPerson(name, age){
const person = {
  name : name,
  age : age,
  talk() {
  console.log(`Hi, my name is ${this.name}`);
  },
};
return person;
}

let p1 = createPerson("john",24); 
let p2 = createPerson("paul",23);
```

#### New operator

The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a contructor function.


```javascript
//Constructors

  

function Person(name, age) {

this.name = name;

this.age = age;

}

Person.prototype.talk = function(){

console.log(`Hi, my name is ${this.name}`)

}

//Instances

let p1 = new Person("adam",25);

let p2 = new Person("john",21);
```

#### Classes

Classes are template for creating objects

The constructor method is a special method of a class for creating and initialising an object instance of that class.

```javascript
class Person{
constructor(name,age){
this.name = name;
this.age = age;
}
talk(){
	console.log(`Hi, my name is ${this.name}`);
}
}
let p1 = new Person("John",23);
let p2 = new Person("eve",25);
```

#### Inheritance
