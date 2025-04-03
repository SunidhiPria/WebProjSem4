import React, { useState } from 'react';
import styles from './GoalTracker.module.css';

const GoalTracker = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [deadline, setDeadline] = useState('');
  const [goalType, setGoalType] = useState('weekly');

  const addGoal = () => {
    if (!newGoal.trim()) return;
    setGoals([...goals, {
      id: Date.now(),
      text: newGoal,
      deadline,
      completed: false,
      type: goalType,
      createdAt: new Date()
    }]);
    setNewGoal('');
    setDeadline('');
  };

  const toggleGoal = (id) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const getGoalsByType = (type) => {
    return goals
      .filter(goal => goal.type === type)
      .sort((a, b) => {
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        if (a.deadline && b.deadline) return new Date(a.deadline) - new Date(b.deadline);
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  };

  return (
    <div className={styles.taskContainer}>
      <h2 className={styles.header}>Goal Tracker</h2>
      
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Add a new goal..."
          onKeyPress={(e) => e.key === 'Enter' && addGoal()}
          className={styles.input}
        />
        <select 
          value={goalType}
          onChange={(e) => setGoalType(e.target.value)}
          className={styles.select}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className={styles.dateInput}
        />
        <button onClick={addGoal} className={styles.addButton}>Add Goal</button>
      </div>

      <div className={styles.columnsContainer}>
        <div className={`${styles.goalColumn} ${styles.weeklyColumn}`}>
          <h3 className={styles.columnHeader}>Weekly Goals</h3>
          <ul className={styles.goalsList}>
            {getGoalsByType('weekly').map(goal => (
              <li key={goal.id} className={`${styles.goalItem} ${goal.completed ? styles.completed : ''}`}>
                <input
                  type="checkbox"
                  checked={goal.completed}
                  onChange={() => toggleGoal(goal.id)}
                  className={styles.checkbox}
                />
                <span className={styles.goalText}>{goal.text}</span>
                {goal.deadline && (
                  <span className={styles.deadline}>
                    {new Date(goal.deadline).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                )}
                <button 
                  onClick={() => deleteGoal(goal.id)}
                  className={styles.deleteButton}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.goalColumn} ${styles.monthlyColumn}`}>
          <h3 className={styles.columnHeader}>Monthly Goals</h3>
          <ul className={styles.goalsList}>
            {getGoalsByType('monthly').map(goal => (
              <li key={goal.id} className={`${styles.goalItem} ${goal.completed ? styles.completed : ''}`}>
                <input
                  type="checkbox"
                  checked={goal.completed}
                  onChange={() => toggleGoal(goal.id)}
                  className={styles.checkbox}
                />
                <span className={styles.goalText}>{goal.text}</span>
                {goal.deadline && (
                  <span className={styles.deadline}>
                    {new Date(goal.deadline).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                )}
                <button 
                  onClick={() => deleteGoal(goal.id)}
                  className={styles.deleteButton}
                >
                  
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.goalColumn} ${styles.yearlyColumn}`}>
          <h3 className={styles.columnHeader}>Yearly Goals</h3>
          <ul className={styles.goalsList}>
            {getGoalsByType('yearly').map(goal => (
              <li key={goal.id} className={`${styles.goalItem} ${goal.completed ? styles.completed : ''}`}>
                <input
                  type="checkbox"
                  checked={goal.completed}
                  onChange={() => toggleGoal(goal.id)}
                  className={styles.checkbox}
                />
                <span className={styles.goalText}>{goal.text}</span>
                {goal.deadline && (
                  <span className={styles.deadline}>
                    {new Date(goal.deadline).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                )}
                <button 
                  onClick={() => deleteGoal(goal.id)}
                  className={styles.deleteButton}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GoalTracker;