import React,{useState,useEffect,useRef} from "react";
import axios from 'axios'
import TaskCard from "../TaskCard/TaskCard";
import {AiOutlineFileAdd} from '@react-icons/all-files/ai/AiOutlineFileAdd'
import styles from "./style.module.css";
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';

const Todoapp = () => {
  const [width, setWidth] = useState();
  const carousel = useRef();
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
   

    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth+200);
  });

  

  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios.get('http://127.0.0.1:8000/api/task-list/')
    .then(response => {
      setTasks(response.data);
      // console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching tasks:', error);
      window.alert(error);
    });
  });

  const handleAddBtn=()=>{
    navigate('/add')
  }


  return (
    <div className={styles["to-do-app-container"]}>
      <div className={styles["todoapp-header"]}>
        <div className={styles['heading']}>
          Tasks
        </div>
        <div className={styles['addbutton']} onClick={handleAddBtn}>
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
        >{
          tasks.map((task)=>(
            <motion.div className={styles["item"]} key={task.id}>
            <TaskCard task={task}/>
            </motion.div>)
          )
        }
       
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Todoapp;

/**
 * 
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

*/
