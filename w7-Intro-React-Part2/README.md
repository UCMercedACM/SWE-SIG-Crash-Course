# React Workshop Part 2

## Getting Started

- Git
- React
- Node
- Firebase

If you were here during the firebase workshop go ahead and open your firebase project. If not please clone this repo and follow along.

## Creating a React Project.

To create a react project, start a new folder in your vs code and open your terminal. Make sure you are in the right folder and run the command

`npx create-react-app my-app`

## Navigating your React Project

### node_modules

These are for storing dependencies you have installed, you will never need to go in here.

### Public

This folder is used for creating the title of your website on the tab bar as well as storing the icon for the tab.

### src

This is the bread and butter of your application. Here you will do all of your application development.

### package.json

This json houses the depencies your application is using.

## lets create some folders.

Go ahead and create two folders under src

- `components`

- `firebase` Inside here create a file called `config.js`

## configuring firebase

From the last workshop, past your firebaseConfig={} that you used to access firebase. Your config file should include something like this:

```
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "xxxxxxxx",
  authDomain: "xxxxxx",
  projectId: "xxxxxx",
  storageBucket: "xxxxxxx",
  messagingSenderId: "xxxxxxx",
  appId: "xxxxx"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
```

Be sure to include the imports, exports and the firebase.initalizeApp

## Using Firebase in React

Install firebase into your react project with this line

`npm install firebase --save`

Open your app.js folder and import firebase using:

```
import {firebase} from '../firebase/config'
```

Be sure that it is pointing to it correctly. Now that you have imported firebase go ahead and paste this line above "return" and modify it to call your specific collection you created.

```
firebase.firestore().collection("Your collection name").doc("your doc name"").get().then((doc) => {
  console.log(doc.data())
})
```

You now can call firebase within your application!!!!!

## Lets Create some components

In your component folder lets create some files

- `todo.js`
- `header.js`
- `header.css`

in your `todo.js` folder past this code

```
import React, { useEffect, useState } from "react";
import {firebase} from '../firebase/config'


function Todos(){
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const completeToDo = (index) => {

  }

  useEffect(() => {

  }, []);
  return (
    <>
   <h1>Yeet</h1>
    </>
  )
};
export default Todos;
```

In your `header.js` file paste this:

```
import React , {useState }  from "react";
import "./Header.css";
import {firebase} from "../firebase/config"


export default function Header() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

const addTodo = () => {

  }
  return (
    <div id="myDIV" class="header">
    <h2>My To Do List</h2>
    <input type="text" placeholder="Title..." onChange={e => setTitle(e.target.value)}/>
    <input type="text" placeholder="Description..." onChange={e => setDescription(e.target.value)}/>
    <span onClick={() => addTodo()} class="addBtn">Add Todo</span>
  </div>
  );
}
```

Finally in your `header.css` file paste this:

```
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
```

## Lets add these components to our "App.js" Page

In your app .js page delete everything within the

```
return(

)
```

Lets import the components we created. Header and Todo by simply grabbing them.

```
import Todos from "./components/todo"
import Header from "./components/header"
```

Now we simply need to add these components to our webpage by adding them in the return like so

```
return(
  <div className="App">
      <Header/>
      <div style={{height:"100%"}}>
     <Todos/>
     </div>
    </div>
)
```

## React Bootstrap

For styling we are going to be using React Bootstrap for the frontend to make things nicer quicker

Install bootstrap into your project

```
npm install react-bootstrap bootstrap@5.1.3
```

Now open your `todo.js` and add some bootstrap

```
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
```

Now we can start making out todos, lets go over some code:

add this to your useEffect

```
const listener = firebase.firestore().collection("todo").doc("tasks").onSnapshot((documentSnapshot) => {
      setTodo(documentSnapshot.data().tasks)
    })
    return listener;
```

replace this into your return

```
<Container style={{marginTop:200}}>
  <Row>
    {todo.map((todo,index) => {
        return (
          <Col sm>
          <Card style={{ width: '18rem', borderRadius:20}}>
          <Card.Body style={{backgroundColor:"blue"}}>
            <Card.Title style={{color:"white"}}>{todo.title}</Card.Title>
            <Card.Text style={{color:"white"}}>
              {todo.description}
            </Card.Text>
            <button onClick={(index) => completeToDo(index)}>Complete</button>
          </Card.Body>
        </Card>
        </Col>
        );
      })}
  </Row>
</Container>
```

## CompleteTodo Function

see if you can find a solution to the complete todo function.

## Header.js

Add this to the "add todo" section

````
    if(title == "" || description == ""){
        alert("Please fill in all fields")
        return
    }
    var task ={
      title: title,
      description: description,
    }
    firebase.firestore().collection("todo").doc("tasks").get().then((documentSnapshot) =>{
      var temp = documentSnapshot.data().tasks;
      temp.push(task);
      firebase.firestore().collection("todo").doc("tasks").update({tasks:temp})
    })

    setTitle("");
    setDescription("");
    ```
````

## Review Time

# Resources

Bootstrap: `https://react-bootstrap.github.io/getting-started/introduction`
React: `https://create-react-app.dev/`
