import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Create feature",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Go to the Gym",
      category: "Personal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Code",
      category: "Study",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };
  const completeTodo = (id) => {
    const newCompleteTodo = [...todos];
    newCompleteTodo.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newCompleteTodo);
  };
  const [search, setSearch] = useState("");
  return (
    <div className="app">
      <h1> ToDo List</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>

      <p>
        <TodoForm addTodo={addTodo} />
      </p>
    </div>
  );
}
export default App;
