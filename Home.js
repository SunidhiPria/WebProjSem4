import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {

  const SunidhiPriya23bds0112 = "https://drive.google.com/file/d/1REqBkq7jTYzyk0enHD2YpiWBdBMzRRSv/view?usp=drive_link";

  return (
    <div className={styles.homeContainer}>
      <img 
        src="download2.jpg"  
        alt="Task Manager App" 
        className={styles.homeImage}
      />
      <h1>Task Manager</h1>
      <p>Stay organized and achieve your goals with ease!</p>

      {/* Internal App Links */}
      <Link to="/tasks" className={styles.navLink}>Manage Tasks</Link>
      <Link to="/goals" className={styles.navLink}>Set Goals</Link>
      <Link to="/progress" className={styles.navLink}>View Progress</Link>

      <a
        href={SunidhiPriya23bds0112}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.SunidhiPriya23bds0112}  
      >
        View My Portfolio (DOCX)
      </a>
    </div>
  );
};

export default Home;