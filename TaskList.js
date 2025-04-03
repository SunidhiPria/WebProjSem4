import React, { useState } from "react";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, addTask, toggleTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return alert("Task cannot be empty!");
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className={styles.taskContainer}>
      <h2>Daily Tasks</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            {task.completed ? <s>{task.text}</s> : task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
