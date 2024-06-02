import { useState, useEffect } from "react";
import TodoItem from "./ToDo-item";

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Create Guest Experience mobile check-in",
      completed: false,
    },
    {
      id: 2,
      text: "Document current CI/CD process",
      completed: false,
    },
    {
      id: 3,
      text: "Perform Code Review for final Pillow-Talk release",
      completed: false,
    },
    {
      id: 4,
      text: "Implement new Color Palette from Design Team",
      completed: false,
    },
    {
      id: 5,
      text: "Fix image uploading process for guest check-in",
      completed: false,
    },
    {
      id: 6,
      text: "Provide on-boarding documentation",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  let checkedBoxes = document.querySelectorAll("input[type=checkbox]:checked");

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <br />
      <div class="border mb-4"></div>
      <div className="box">
        <h1 class="justify-center m-auto text-2xl">
          Done : {checkedBoxes.length}
        </h1>
        <h2>Add todo</h2>
        <input
          class="mb-4"
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div class="flex max-w-[60%] m-auto justify-start">
        <button
          class="bg-teal-300 py-2 px-4 text-black font-semibold rounded-md mt-4"
          onClick={() => addTask(text)}
        >
          ADD TASK
        </button>
      </div>
    </div>
  );
}
export default TodoList;
