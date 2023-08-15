import React,{useState,useEffect,useRef} from "react";
import TaskCard from "../TaskCard/TaskCard";
import {AiOutlineFileAdd} from '@react-icons/all-files/ai/AiOutlineFileAdd'
import styles from "./style.module.css";
import {motion} from 'framer-motion';

const Todoapp = () => {
  const [width, setWidth] = useState();
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth+200);
  });

  return (
    <div className={styles["to-do-app-container"]}>
      <div className={styles["todoapp-header"]}>
        <div className={styles['heading']}>
          Tasks
        </div>
        <div className={styles['addbutton']}>
            <AiOutlineFileAdd/>
        </div>
      </div>
      <div className={styles["todoapp-body"]}>
      <motion.div
        ref={carousel}
        className={styles["carousel"]}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles["inner-carousel"]}
        >
        <motion.div className={styles["item"]} key={1}>
        <TaskCard />
        </motion.div>
        <motion.div className={styles["item"]} key={1}>
        <TaskCard />
        </motion.div>
        <motion.div className={styles["item"]} key={3}>
        <TaskCard />
        </motion.div>
        <motion.div className={styles["item"]} key={4}>
        <TaskCard />
        </motion.div>
        <motion.div className={styles["item"]} key={1}>
        <TaskCard />
        </motion.div>
        <motion.div className={styles["item"]} key={1}>
        <TaskCard />
        </motion.div>
        <motion.div className={styles["item"]} key={3}>
        <TaskCard />
        </motion.div>
        <motion.div className={styles["item"]} key={4}>
        <TaskCard />
        </motion.div>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Todoapp;
