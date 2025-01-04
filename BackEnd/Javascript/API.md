A **Web API** (Application Programming Interface) is a set of rules and protocols that allow different software applications to communicate with each other over the internet. It enables applications to request and exchange data in a standardised way, often using HTTP (Hypertext Transfer Protocol).

### How Does a Web API Work?

1. **Client Request:**
    
    - A client (e.g., a web browser, mobile app, or another server) sends an HTTP request to the API's endpoint (a specific URL) with a specified method (GET, POST, PUT, DELETE, etc.).
2. **API Endpoint:**
    
    - An endpoint is a URL that defines where the API is hosted and what resource the client is requesting (e.g., `https://api.example.com/users`).
3. **Authentication (Optional):**
    
    - Many APIs require authentication (e.g., API keys, OAuth tokens) to ensure only authorised users can access the data.
4. **Server Processing:**
    
    - The API server processes the request, often interacting with a database or another backend system to retrieve or modify data.
5. **Response:**
    
    - The server sends back a structured response, usually in **JSON** or **XML** format, which the client can parse and use.

####  Example
  - https://catfact.ninja/fact

## JSON

> [!NOTE]
> **JSON** (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is widely used for transmitting data in web applications (e.g., between a server and a client).

### Key Features of JSON:

1. **Human-Readable:** It’s structured in a simple, text-based format.
2. **Language-Independent:** Though derived from JavaScript, it is supported in many programming languages.
3. **Lightweight:** Efficient for data storage and transfer.
4. **Flexible:** Can represent structured data like objects and arrays.

   To know more www.json.org
### Accessing JSON data

- JSON.parse(data) Method
        To parse a String data into JS object
        
- JSON.stringify(json) Method 
        To parse a JS object data into JSON
```javascript
let jsonRes =

`{"fact":"About 37% of American homes today have at least 1 cat.","length":54}`;

console.log(jsonRes);

  

// To covert into valid form

let validRes = JSON.parse(jsonRes);

console.log(validRes);

console.log(validRes.fact)
```

### Testing API request

##### Tools
- Hoppscoth
- Postman

### Ajax
(Asynchronous JavaScript and XML)

AJAX (Asynchronous JavaScript and XML) is a technique used in web development to create dynamic and interactive web applications. It allows a web page to send and receive data from a server asynchronously (in the background) without requiring a full page reload.
Key Features of AJAX

  What is AJAX?

AJAX (Asynchronous JavaScript and XML) is a technique used in web development to create dynamic and interactive web applications. It allows a web page to send and receive data from a server asynchronously (in the background) without requiring a full page reload.
Key Features of AJAX

### Key Features of AJAX

1. **Asynchronous Communication:** Users can interact with the page while data is being fetched or sent.
2. **Partial Updates:** Only parts of a webpage are updated, improving performance and user experience.
3. **Independent of Data Format:** Though originally designed for XML, AJAX works with JSON, HTML, or plain text.
4. **Built on Web Standards:** Uses a combination of:
	 -   **JavaScript** to control the behavior.
	- **XMLHttpRequest** (or Fetch API) to send/receive data.
	- **HTML/CSS** to update the page.

### HTTP Verbs

1. GET
2. POST
3. DELETE

### Important HTTP Status Codes


This document provides a summary of important HTTP status codes grouped by their categories.

## **Categories of HTTP Status Codes**

1. **2xx: Success**  
    Indicates that the request was successfully received, understood, and processed.
    
2. **3xx: Redirection**  
    Indicates that further action is required to complete the request (e.g., redirection).
    
3. **4xx: Client Errors**  
    Indicates an error caused by the client’s request.
    
4. **5xx: Server Errors**  
    Indicates that the server encountered an error while processing the request.
    
    
### Adding Information to the url's
?key= value 

### HTTP Headers

Explore it on Hoppscoth


### Fetch API

fetch(url) 

```javascript
//Fetch API

let url = "https://catfact.ninja/fact"

  

fetch(url)

  

.then((res) => {

console.log(res);

return res.json()

})

.then((data) =>{

console.log("data 1 =",data.fact);

return fetch(url);

})

.then((res)=> {

return res.json();

})

.then((data2) => {

console.log("data2=", data2.fact);

})

.catch((err) => {

console.log("ERROR -", err);

})
```

### Using Fetch with Async  and Await

```javascript
//Fetch API with aync and await

async function getFacts(){

try{

let res = await fetch(url);

let data = await res.json();

console.log(data.fact);

}catch(e){

console.log("Error -",e);

}

}
```

### Axios

Library to make HTTP requests

#### Why axios better then fetch()

- **Axios** simplifies error handling, JSON parsing, and request data transformation, while **Fetch** requires manual handling for these tasks.
- **Axios** supports request cancellation, timeouts, and interceptors, which **Fetch** lacks natively.
- **Axios** automatically rejects on HTTP errors, while **Fetch** does not.
- **Axios** works in older browsers, while **Fetch** requires polyfills for legacy support.
- **Axios** offers a more feature-rich API, whereas **Fetch** is more lightweight and relies on manual setup for complex functionality.

 **`Use this link in body tag of html to use axios`**

`<script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>`

```Javascript
//Using axios to get API response

async function getFacts1(){

try{

let res = await axios.get(url);

console.log(res.data.fact); 

}catch(e){

console.log("No fact found -",e);

}

}
```

#### Sending Headers
```javascript
//Sending Headers

let url2 = "https://icanhazdadjoke.com/";

  

async function getJokes() {

try{

const config = {headers: {Accept : "application/json"}} //This will help in getting object form of json

let res = await axios.get(url2,config);

console.log(res.data); //this is giving in html format

  

}catch(err){

console.log(err);

}

}
```

