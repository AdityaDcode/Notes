A Node.js web application framework that helps us to make web applications 
It is used for server side programming.

- **Web Servers**: Create and manage HTTP servers for web applications.
- **RESTful APIs**: Build lightweight APIs for web and mobile applications.
- **Middleware Handling**: Use middleware for request/response processing (e.g., authentication, logging, parsing).
- **Routing**: Define URL endpoints and their handlers (e.g., `GET`, `POST`, `PUT`, `DELETE`).
- **Static File Hosting**: Serve static assets like HTML, CSS, and JavaScript files.
- **Template Rendering**: Render dynamic HTML using template engines like EJS, Pug, or Handlebars.
- **Real-Time Applications**: Combine with libraries like Socket.io for real-time communication.
- **Integration with Databases**: Easily connect to databases like MongoDB, MySQL, and PostgreSQL.

#### Ports
Ports are the logical endpoints of a network connection that is used to exchange information between a 'web server' and a 'web client'.


```javascript
const express = require("express");

const app = express();

  

console.dir(app);

let port = 3000;

  

app.listen(port,()=>{

console.log(`app is listening on port ${port}`)

});
```

start a server by running the index.js file

### Handling request

#### app.use
```javascript
app.use((req,res) => {

console.log("Request received");

})
```

### Sending requests

#### res.send()
```javascript
app.use((req,res) => {
console.log("Request received");

res.send("This is a basic response")

});
```

### Routing

It is a process of selecting a path for traffic in a network or between or across multiple networks.
```javascript
//Routing

app.get("/",(req,res)=>{

res.send("You contacted root path");

})

  

app.get("/apple",(req, res)=>{

res.send("you contacted apple path");

})

app.get("/car",(req,res)=>{

res.send("you contacted car path");

})

//Default

app.get("*",(req,res)=>{

res.send("Invalid link");

})
```

#### Nodemon
- Package that helps to automatically restart server with code changes

### Path parameters

In **Express.js**, **path parameters** are dynamic segments of a URL defined in route patterns, allowing you to capture values from the URL.

##### Syntax:
- Path parameters are defined using `:` followed by a parameter name in the route path.
##### Key Points:
1. **Dynamic Parts**: The `:id` in the route `/user/:id` captures the value of `id` from the URL (e.g., `/user/123` → `id = 123`).
2. **Accessing Parameters**: Use `req.params` to access the values.
3. **Multiple Parameters**: You can define multiple path parameters:

```javascript
app.get("/:username/:id",(req, res)=>{

let {username, id} = req.params;

res.send(`Welcome to the page of ${username}`)

})
```

### Query Strings

In **Express.js**, **query strings** are key-value pairs appended to the URL after a `?`, typically used to pass optional parameters to the server.

- **Structure**:
    - Everything after `?` in the URL is the query string.
    - Parameters are separated by `&` (e.g., `term=books&sort=asc`).
- **Accessing Query Strings**: Use `req.query` to access query string parameters as an object.

http://localhost:3000/search?q=apple&color=red
```javascript
app.get("/search",(req,res) => {

let {q} =req.query;

if(!q){

res.send(`<h1>No request sent</h1>`)

}

res.send(`<h1>search result for query: ${q} </h1>`);

})
```

### Templating

==EJS (Embedded Javascript templates)==

- EJS is a simple templating language that lets you generate HTML markup with plain Javascript.
- To install : npm i ejs
- EJS need not to be required seperatly it is by default required after installing express and EJS
- We use **res.render()** instead of res.send() to send larger files or arrays or strings in ejs format in response to the request.
---
  EJS files has to be stored in Views directory.
  
  We can also run start the server outside the directory by
  `nodemon dirname/index.js`  
  but it cannot find views folder to run home.ejs file so we have to set a path.

```javascript
const express = require("express");

const app = express();

const port = 8080;

app.set("view engine", "ejs");

app.get("/",(req,res)=>{

res.render("home.ejs");

});

app.listen(port, () =>{

console.log(`Listening on port ${port}`);

})
```

#### Views Directory

Through this we can run server from outside directory also
```javascript
const path = require("path") //this is used to chnage the views directory accessibility to ejs

app.set("views",path.join(__dirname,"/views"));
```

#### Interpolation Syntax

Interpolation refers to embedding expression into market up text.
eg:  `<h3><%= 1+2 %></h3>`

| Syntax   | Purpose                   | Escaping       |          Ex       | Output                               |
| -------- | ------------------------- | -------------- | ----------------- | ------------------------------------ |
| `<%= %>` | Outputs content (escaped) | **Yes** (safe) | `<%= userName %>` | `Alice` (Escapes special characters) |

|          |                                   |                 |                  |                                 |
| -------- | --------------------------------- | --------------- | ---------------- | ------------------------------- |
| `<%- %>` | Outputs raw content (not escaped) | **No** (unsafe) | `<%- rawHTML %>` | `<strong>Bold</strong>` (as-is) |

|         |                                      |     |                                      |                                   |
| ------- | ------------------------------------ | --- | ------------------------------------ | --------------------------------- |
| `<% %>` | Executes JavaScript code (no output) | N/A | `<% if (isAdmin) { %>Welcome<% } %>` | `Welcome` (conditional rendering) |

|          |                                |     |                            |                       |
| -------- | ------------------------------ | --- | -------------------------- | --------------------- |
| `<%# %>` | Comment (not rendered in HTML) | N/A | `<%# This is a comment %>` | _(Nothing in output)_ |

|                    |                              |        |                                     |                                   |
| ------------------ | ---------------------------- | ------ | ----------------------------------- | --------------------------------- |
| `<%- include() %>` | Includes other EJS templates | **No** | `<%- include('partials/header') %>` | _(Contents of `header.ejs` file)_ |
#### Passing Data to EJS :
```html
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Document</title>

</head>

<body>

<h1>Dice gave value : <%=Math.floor(Math.random() * 6) + 1 %></h1>

  

</body>

</html>

```
```javascript
app.get("/rolldice",(req,res) =>{

res.render("rolldice.ejs",)

})
```

Another way we can pass as argument from index.js

```html
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Document</title>

</head>

<body>

<h1>Dice gave value : <%= num %></h1>

  

</body>

</html>
```
```javascript
app.get("/rolldice",(req,res) =>{

let diceVal = Math.floor(Math.random() * 6) + 1;

res.render("rolldice.ejs",{num : diceVal}) //we can also pass diceval only as argument and there also we have to write diceval only

})
```

#### Conditional Statements

```html
<% if(num == 6) { %>

<h2>Nice! Roll dice again</h2>

<% } %>
```

#### Loops
```html
<ul><% for (name of followers){ %>

<li><%= name %></li>

<% } %>

</ul>
```

### Serving Static Files
To serve static files we need to have public folder

`app.use(express.static(folder_name))`
```javascript
//Serving static files

app.use(express.static(path.join(__dirname,"public")));
```

#### Includes
Used to access perticular sub templates or code into another code

Example:
`<%- include("includes/head.ejs") %>`
`<%- include("includes/footer.ejs") %>`


### Get and Post

####  GET Method

- **Purpose**: Used to request data from a server.
- **Characteristics**:
    - Parameters are sent in the **URL query string** (e.g., `?key=value`).
    - Limited data size because URLs have length restrictions.
    - Cached by browsers and logged in browser history.
    - Typically **safe** (doesn't modify server state).
    - Used for actions like searching or retrieving information.

 
#### POST Method

- **Purpose**: Used to send data to a server to create or update resources.
- **Characteristics**:
    - Data is sent in the **body** of the HTTP request.
    - No size limitations (compared to GET's URL restrictions).
    - Not cached or logged in browser history.
    - Used for actions like form submissions, creating new records, etc.

Example: GetPost directory

```html
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Get And Post</title>

</head>

<body>

<h3>GET Request Form</h3>

<form action="http://localhost:8080/register" method="get">

<input type="text" name="user" placeholder="enter username">

<input type="password" name="password" placeholder="enter password">

<button>Submit</button>

</form>

<br>

<hr>

<h3>Post Request Form</h3>

<form action="http://localhost:8080/register" method="post">

<input type="text" name="user" placeholder="enter username">

<input type="password" name="password" placeholder="enter password">

<button>Submit</button >

</form>

</body>

</html>

```
```javascript
const express = require("express");

const app = express();

const port = 8080;

  
  

app.listen(port,()=>{

console.log(`Listening to port ${port}`);

});

  

app.get("/register",(req,res)=>{

let {user, password} = req.query;

res.send(`standard GET response. Welcome ${user}`);

})

  

app.post("/register",(req,res)=>{

res.send("standard POST response");

})
```

#### Handling Post Request

1. Set up POST request route to get some response
2. Parse POST request data

We have to parse the data so that express can understand so, we use middlewares.

- `app.use(express.urlencoded({ extended:true}))`  : To parse the data from url encoded type
- `app.use(express.json)` : To parse the data from data.json type.

  **req.body** will be containing the information
```javascript
app.post("/register",(req,res)=>{

let {user, password} = req.body;

//console.log(req.body) //we have to parse it

res.send(`standard POST response,Welcome ${user}`);

})
```
