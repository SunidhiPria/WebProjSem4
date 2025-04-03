import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TaskList from "./components/TaskList";
import GoalTracker from "./components/GoalTracker";
import ProgressSummary from "./components/ProgressSummary";
import styles from "./App.module.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  // Function to toggle task completion status
  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Router>
      <nav className={styles.navbar}>
        <Link to="/">Home</Link> | 
        <Link to="/tasks">Tasks</Link> | 
        <Link to="/goals">Goals</Link> | 
        <Link to="/progress">Progress</Link>
      </nav>

      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/tasks" 
            element={<TaskList tasks={tasks} addTask={addTask} toggleTask={toggleTaskCompletion} />} 
          />
          <Route path="/goals" element={<GoalTracker />} />
          <Route path="/progress" element={<ProgressSummary tasks={tasks} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
