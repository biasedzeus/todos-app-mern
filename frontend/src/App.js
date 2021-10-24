import React, { useEffect, useState } from "react";
import Preloader from "./Components/Preloader";

import { readTodos, createTodo } from "./functions/index";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await readTodos();
      console.log({result});
      setTodos(result);
    };
    fetchData();
  }, []);

  todos.map((todo) => {
    console.log("todo:", todo.title);
  });

  return (
    <div classname="center-align">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s4">
              <i className="material-icons prefix">title</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">title</label>
            </div>
            <div className="input-field col s5">
              <i className="material-icons prefix">description</i>
              <input id="description" type="tel" className="validate" />
              <label htmlFor="description">content</label>
            </div>
            <div class="input-field col s1">
              <a className=" btn">
                <i className="material-icons center">delete</i>
              </a>
            </div>
          </div>
        </form>
        <Preloader />
        <div className="collection center-align ">
          {todos.map((todo) => {
           return <a href="#!" class="collection-item">
               {todo.title}
            </a>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
