import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TodoApp></TodoApp>
    </div>
  );
}

const TodoApp = () => {
  const [textInput, setTextInput] = useState("");
  const updateTextInput = (e) => setTextInput(e.target.value);

  const [list, setList] = useState([]);
  const postTodo = () => {
    setList([textInput, ...list]);
    setTextInput("");
  };

  const deleteTodo = (item, index) => {
    list.splice(index, 1);

    setList([...list]);
  };

  let randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div>
      <h1 className="bg-primary text-light p-3 sticky-top">My Todo</h1>
      <div className="alert alert-success row">
        <input
          type="text"
          className="form-control mb-1"
          value={textInput}
          onChange={(e) => {
            updateTextInput(e);
          }}
          placeholder="Your Todo?"
        />
        <input
          type="button"
          className="btn btn-dark"
          onClick={postTodo}
          value="Add List"
        />
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: randomColor(),
            color: "white",
            fontSize: "x-large",
            fontFamily: "-moz-initial",
          }}
          className="alert alert-warning d-flex justify-content-between align-items-center"
        >
          {item}
          <button className="btn btn-outline-danger" onClick={deleteTodo}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};
