import React, { useState } from "react";
import "./App.css";


function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [checked,setChecked]=useState([])

  
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  console.log("hello");

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...todos, { id: Date.now(), text: todo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {todos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input onChange={(e) => {
                setTodos(todos.map(todoItem => {
                  if (todoItem.id === obj.id) {
                    
                    return { ...todoItem, status: e.target.checked };
                  }
                  return todoItem;
                }));
              }} value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={() => handleDeleteTodo(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
        {todos.map((obj) => {
          if (obj.status) {
            return <h1 key={obj.id}>{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
