### Intro to Databases using Firebase; Building a ToDo App.

## Getting Started

VS Code `https://code.visualstudio.com/`
Download NodeJS `https://nodejs.org/en/`
Firestore Documentation `https://firebase.google.com/docs/firestore`

## What is Firebase

Firebase is a service offered by google that has many applications including

- Realtime Database
- Analytics
- Deployment
- Authentication
- Cloud Firestore
- Cloud Functions
- API Hosting

## How to use Firebase

Create a new folder named Intro-To-Firebase and open this in VS Code

Create Four Files

- index.html
- styles.css
- index.js

MAKE SURE NODE.JS IS INSTALLED GLOBALLY ON YOUR SYSTEM

using the termnial type node -v to see if it installed successfully, if you are having troubles on window visit this link `https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10`

## index.html

Copy this code block into your index.html:

```
<html>
    <head>
        <title>we're going to learn JS!</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div id="myDIV" class="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title...">
        <span onclick="addTodo()" class="addBtn">Add</span>
      </div>

      <ul id="myUL">

      </ul>


        <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-firestore.js"></script>
        <script src="index.js"></script>
    </body>
</html>
```

Quick Notes

- Our Div tag we give an ID called myDIV and created an input field with a button at the end for submit
- the script tags at the bottom connect to our index.js and firebase services as a whole

## index.css

lets add some styling:

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

## Getting started with Firebase

Visit `https://firebase.google.com/`

- Step 1: Login into your google account and click 'Get Started'
- Step 2: Click Add Project
- Step 3: Enter the project name "Workshop"
- Step 4: Disable Google Analytics and click create project
- Step 5: Click the icon that stands for Web "</>"
- Step 6: Give your app the nickname 'Workshop' and click Register
- Step 7: IMPORTANT!!!!!!! DO NOT SHARE THIS CODE SNIPPET WITH ANYONE
- - This code snippet contains your API key, this will give anyone access to your database and rack up reads and writes
- Step 8: Paste this code snipped intoyour index.js

```
(Your config)
const firebaseConfig = {
    apiKey: "xxxxxxxxxxx",
    authDomain: "xxxxxxx",
    projectId: "xxxxxx,
    storageBucket: "xxxxxxxx",
    messagingSenderId: "xxxxxxxx",
    appId: "xxxxxxx",
    measurementId: "xxxxxxx"
  };

firebase.initializeApp(firebaseConfig);
```

- Step 9: On the left hand side click `Firestore Database`
- Step 10: Click `Create Database`
- Step 11: Select 'Start in Test Mode"
- Step 12: Keep the default time zone and press "Enable"

## Creating a Collection for our ToDo

Now that you are in your Database lets go over some key terms:

- Collection: think of this as a folder for a certain type of data
- Documents: Each document has a unique id and data associated to it
- ID a unique set of numbers and letters for a certain document in a collection

# Creating your first collection

- Step 1: Click `Start collection`
- Step 2: Name this collection ToDo
- Step 3: Click "auto id"
- Step 4: Type "Tasks" into Field
- Step 5: In the drop down menu for `Type` select `Array`
- Step 6: In this Array click the other drop down menu `Type` and click `map`
- Step 7: In this map we need our first field: `title = string = "Task one"`
- Step 8: Add another one named description and give any description you want.

## We have A Database !!!!! What now?

Remember when we pasted our code snippet into our index.js file? Lets go back to that. Keep your firebase website open.

## Install firebase

Before we interact with our database we need to install the correct tools. In vs code make sure your are in the correct folder and run `npm install firebase` you will need node.js for this.

## Lets call some data

To fetch documents we simply just use this line:

```firebase.firestore().collection("[collectionname]").doc("[copy and pase the documents id").get().then((documentSnapshot) =>{
    console.log(documentSnapshot.data());
})
```

This code is also available in the repo.

Opening our website we can check the console and find the collection that we created in the console.

This is very cool but what now?

## LETS MAKE A TODOOOOOO!!!!

# Fetch the tasks from the database

Lets create a list of ToDo's by writing a firebase functions

Lets use this code block

```
firebase.firestore().collection("[yourcollection]").doc("[yourdocumentID]").get().then((snapshot) => {
  var ul = document.getElementById("myUL");
  ul.innerHTML = "";
  for(var i =0; i < snapshot.data().toDo.length;i++){
    var li = document.createElement("li");
    var inputValue = snapshot.data().toDo[i].title;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);

    var BUTTON = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");

    BUTTON.className = "close";
    BUTTON.onclick = close;
    BUTTON.appendChild(txt);
    BUTTON.id = i;
    li.appendChild(BUTTON);

  }
});
```

In this code block we are creating a list of tasks. We call firebase to grab the documents data and then we create a for loop going through each task in the document we created. Here can then use DOM manipulation to create new LI items. We give each close button an ID for another function

# Lets add a ToDo to our firebase

Add this code snippet to your inde.js

```
function addTodo(){
  var task ={
    title: document.getElementById("myInput").value,
    description: "",
  }
  firebase.firestore().collection("test").doc("test").get().then((documentSnapshot) =>{
    var temp = documentSnapshot.data().toDo;
    temp.push(task);
    firebase.firestore().collection("test").doc("test").update({toDo:temp})
  })

}
```

Here we are creating a task object just like in our database to insert. We give it the title of the value from the ID "myInput" and a blank description. Then call firebase to get all of the current tasks and append our new tasks to the rest.

# Thats awesome I have a list of ToDo's. How do I delete????

Add this code snippet to index.js

```
function close(){
  console.log(this.id)

  firebase.firestore().collection("test").doc("test").get().then((documentSnapshot) =>{
    var temp = documentSnapshot.data().toDo;
    temp.splice(this.id,1);
    firebase.firestore().collection("test").doc("test").update({toDo:temp})
  })


}
```

Using our dom manipulation when we loaded the TODO's we simply call the close function wehn the button is pressed and call firebase to delete it from our database. Instead of pushing to our array we splice it given the index within the list of `<li></li>` which matches our database.

# You now have a Todo list!!!

# Project Ideas

- Build on top of this task list to include multiple documents. You can add todos to different folders of tasks. This would require you to create multiple add buttons and create more documents within your collection throught the firebase website.

- Try Firebase authentication to see if you can create a user
  `https://firebase.google.com/products/auth?gclid=CjwKCAjw2bmLBhBREiwAZ6ugo-A1yB6N_enCwYSw0veOYOMPexy2TFN9hxzUdnArDhDbpQTfs3XyfBoCO_oQAvD_BwE&gclsrc=aw.ds`
