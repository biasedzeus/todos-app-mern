import React, { useEffect, useState } from "react";
import Preloader from "./Components/Preloader";
import { readTodos, createTodo, updateTodo } from "./functions/index";

function App() {
  const [todos, setTodos] = useState({ title: "", content: "" });
  const [fetchedTodos, setFetchedTodos] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    let currentTodo =
      currentId !== 0
        ? fetchedTodos.find((todo) => todo._id === currentId)
        : { title: "", content: "" };
    setTodos(currentTodo);
  }, [currentId, fetchedTodos]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await readTodos();
      console.log({ result });
      setFetchedTodos(result);
    };
    fetchData();
  }, [currentId]);

  // todos.map((todo) => {
  //   console.log("todo:", todo.title);
  // });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if(currentId === 0){
      const result = await createTodo(todos);
      setFetchedTodos([...fetchedTodos,result]);
      clearInput();
      console.log(result);}
      else{
        await updateTodo(currentId,todos);
        clearInput();
      }

  };

  const clearInput = () => {
    setCurrentId(0);
    setTodos({ title: "", content: "" });
    console.log("esc pressed");
  };

  useEffect(() => {
    const clearField = (e) => {
      if (e.keyCode === 27) {
        console.log("key pressed in useEffect");
        clearInput();
      }
    };
    window.addEventListener("keydown", clearField);
    return () => window.removeEventListener("keydown", clearField);
  }, []);

  return (
    <div className="container center-align">
      <div className="row">
        <pre style={{ color: "white" }}>{JSON.stringify(todos)}</pre>
        <pre style={{ color: "white" }}>{JSON.stringify(currentId)}</pre>
        <form className="col s12" onSubmit={handleOnSubmit}>
          <div className="row">
            <div className="input-field col s4">
              <i className="material-icons prefix">title</i>
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                value={todos.title}
                onChange={(e) => setTodos({ ...todos, title: e.target.value })}
              />
              <label htmlFor="icon_prefix">title</label>
            </div>
            <div className="input-field col s4">
              <i className="material-icons prefix">description</i>
              <input
                id="description"
                type="tel"
                value={todos.content}
                className="validate"
                onChange={(e) =>
                  setTodos({ ...todos, content: e.target.value })
                }
              />
              <label htmlFor="description">content</label>
            </div>
            <div className="input-field col s1"></div>
          </div>
          <div className="row center-align">
            <button className="btn waves-effect waves-light">Add Todos</button>
          </div>
        </form>
        {!fetchedTodos ? (
          <Preloader />
        ) : fetchedTodos.length > 0 ? (
          <div
            style={{ color: "white" }}
            className="container collection center-align text-white"
          >
            {fetchedTodos.map((todo) => {
              return (
                <li
                  onClick={() => {
                    setCurrentId(todo._id);
                  }}
                  key={todo._id}
                  className="collection-items"
                >
                  <div>
                    <h5>{todo.title}</h5>
                    <p>
                      {todo.content}

                      <a href="#!" className="secondary-content">
                        <i className="delete align-right material-icons">
                          delete
                        </i>
                      </a>
                    </p>
                    <hr />
                  </div>
                </li>
              );
            })}
          </div>
        ) : (
          <div>
            <h5>Nothing To Do</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
