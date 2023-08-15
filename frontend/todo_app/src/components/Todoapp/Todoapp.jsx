import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./style.module.css";

const Todoapp = () => {
  return (
    <div className={styles["to-do-app-container"]}>
      <div className={styles["todoapp-header"]}>hello</div>
      <div className={styles["todoapp-body"]}>
        <TaskCard />
      </div>
    </div>
  );
};

export default Todoapp;
