import React , { useEffect, useState }  from "react";
import "./Header.css";
import {firebase} from "../firebase/config"


export default function Header() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

const addTodo = () => {

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