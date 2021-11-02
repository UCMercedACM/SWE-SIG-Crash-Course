import './App.css';
import React, { useState } from 'react';
import Todos from "./components/todo"
import Header from "./components/header"
import Footer from "./components/footer"
function App() {
const [todo, setTodo] = useState([]);
  
  return (
    <div className="App">
      <Header/>
      <div style={{height:"100%"}}> 
     <Todos/>
     </div>
    </div>
  );
}

export default App;
