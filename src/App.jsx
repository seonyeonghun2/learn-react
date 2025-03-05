import React, { useState } from "react";
let count = 1;
function App() {
  const [count, setCount] = useState(1);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const style = {
    border: "1px solid #333",
  };
  function handleInputChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prev) => {
      return [...prev, { id: count, title: todo, done: false }];
    });
    setCount(count + 1);
    setTodo("");
  }
  function handleClick(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name=''
          id=''
          value={todo}
          onChange={handleInputChange}
          style={style}
        />
        <button type='submit'>추가</button>
      </form>
      <hr />
      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id} onClick={() => handleClick(todo.id)}>
              {todo.title} <span>{todo.done ? "done" : "not done"}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
