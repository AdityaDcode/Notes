(Representational state transfer)

REST is an architectural style that defines a set of constraints(rules) to be used for creating web services

Use nouns instead of verbs in endpoint paths.

#### CRUD Operations

- **GET** : retrieves resources
- **POST** : submits new data to the server
- **PUT** : updates existing data
- **Patch** : update existing data partially
- **DELETE** : removes data

---
#### Creating RESTful APIs (quora project)

- **GET**         /posts            to get data for all posts (index) main
- **POST**       /posts            to add a new post   (CREATE))
- **GET**         /posts/:id       to get one post(using id)  (VIEW)
- **Patch**      /posts/:id        to update specific post (UPDATE)
- **DELETE**    /posts/:id       to delete specific post (DESTROY)




![[Screenshot from 2025-01-06 11-53-51.png]]

#### Redirect

To connect different pages
``res.redirect()``

```javascript
app.get("/posts",(req,res)=>{ //This is landing page where posts are displayed

res.render("index.ejs",{posts})

});

  

app.get("/posts/new",(req,res)=>{

res.render("new.ejs") //to create new posts - Form part

})

  

app.post("/posts",(req,res)=>{

let {username, content} = req.body; //push new post to the posts array

posts.push({username,content});

res.redirect("/posts"); //this will redirect to posts to display them

});
```

#### Implement: GET/posts/:id

Show Route

GET       /posts/:id                 to get one post(using id)

Using id it gives one post information

#### Create id for posts

UUID Package

Universally unique identifier

npm install uuid

`` const {v4: uuidv4} = require('uuid'); //to create new unique ids ``
#### Implement : PATCH /posts/:id
Update Route

PATCH           /posts/:id            to update specific post


```javascript
app.patch("/posts/:id",(req,res) => {

let {id} = req.params;

let newContent = req.body.content;

let post = posts.find((p) => id === p.id);

post.content = newContent;

res.send("patch request working");

})
```