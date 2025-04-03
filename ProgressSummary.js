import React from "react";
import styles from "./ProgressSummary.module.css";

const ProgressSummary = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progressPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className={styles.progressContainer}>
      <h2>📊 Progress Summary</h2>
      <p><strong>Tasks Completed:</strong> {completedTasks} / {totalTasks}</p>
      <p><strong>Progress:</strong> {progressPercentage}%</p>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progressPercentage}%` }}></div>
      </div>

      {progressPercentage === 100 ? (
        <p className={styles.successMessage}>Great job! You've completed all tasks! Sunidhi congratulates you.</p>
      ) : (
        <p className={styles.motivationMessage}>Keep going! You're doing great!</p>
      )}
    </div>
  );
};

export default ProgressSummary;
