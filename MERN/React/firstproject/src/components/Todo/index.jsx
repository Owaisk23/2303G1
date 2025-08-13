import React from "react";
import { useState } from "react";

const Todo = () => {
  const [list, setList] = useState(["Working on assignment", "Go gym"]);
  const [text, setText] = useState("");

  //add
  const addTodo = () => {
    if(text == ""){
        alert('Plz enter valid todo');
        return;
    }
    setList([...list, text]);
    setText("")
  };

  return (
    <>
      <h1>Todo App!</h1>

      <input
        type="text"
        placeholder="Add Todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary" onClick={addTodo}>
        Add Todo
      </button>
      {
        list.length > 0 ?
      list.map((item, index) => {
        return (
          <div key={index} className="d-flex justify-content-between mt-3 align-item-center">
            <h4>
              {index + 1}: {item}{" "}
            </h4>
            <div>
              <button className="btn btn-warning" onClick={addTodo}>
                Edit 
              </button>
              <button className="btn btn-danger" onClick={addTodo}>
                Delete 
              </button>
            </div>
          </div>
        );
      })
      :
      <div>List is Empty!</div>
      
      }
    </>
  );
};

export default Todo;
