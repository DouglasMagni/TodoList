import React from "react";
import { useState } from "react";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category) return;
    addTodo(title, category);
    setTitle("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2> Create task:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type the title"
          onChange={(e) => setTitle(e.target.value)}
          title={title}
        />
        <select title={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
        <button type="submit"> Create Task!</button>
      </form>
    </div>
  );
}

export default TodoForm;
