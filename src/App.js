import React, { useState } from "react";
import './App.css';



const App = () => {
   const [todo, setTodo] =useState("");
   const [todos, setTodos] =useState([]);

  const handleSubmit =(e) => {
    e.preventDefault();
    if(todo !== ""){
      setTodos([{ id: `${todo}-${Date.now()}`,todo},...todos]);
      setTodo("");
      console.log(todos)
    }
  }

  const handleDelete =(id) =>{
    const delTodo =todos.filter((to) => to.id !==id);
    setTodos([...delTodo]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>TO-DO-LIST</h1>
        <form className="todoform" onSubmit={handleSubmit}>
          <input type="text"   placeholder="add to-do list" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
          <button>GO</button>
          </form>

          <ul className="alltodos">
            {todos.map((t)=>(
                <li className="singletodo">
                <span className="todotext" key={t.id}>{t.todo}</span>
                <button>Edit</button>
                <button onClick={()=>handleDelete(t.id)}>Delete</button>
              </li>
                ))}
           
          </ul>
      </div>
    </div>
  );
};

export default App;
