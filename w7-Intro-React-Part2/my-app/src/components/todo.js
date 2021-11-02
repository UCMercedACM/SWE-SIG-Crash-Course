import React, { useEffect, useState } from "react";
import {firebase} from '../firebase/config'
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Todos(){
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const completeToDo = (index) => {
    firebase.firestore().collection("todo").doc("tasks").get().then((documentSnapshot) =>{
      var temp = documentSnapshot.data().tasks;
      temp.splice(index,1);
      firebase.firestore().collection("todo").doc("tasks").update({tasks:temp})
    })
  }

  useEffect(() => {
    const listener = firebase.firestore().collection("todo").doc("tasks").onSnapshot((documentSnapshot) => {
      setTodo(documentSnapshot.data().tasks)
    })
    return listener;
  }, []);
  return (
    <>
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
  

    </>
  )
};

export default Todos;
