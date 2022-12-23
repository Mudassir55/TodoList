import './App.css';
import Header from './MyComponents/Header';
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (Todos) => {
    setTodos(todos.filter((e) => {
      return e !== Todos;

    }));
    localStorage.setItem("todos", JSON.stringify(todos));

  }


  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    if (todos.length === 0) {
      sno = 0;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    setTodos([...todos, mytodo]);
    console.log(mytodo)

  }



  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /></>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}


export default App;
