import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BiTimeFive} from '@react-icons/all-files/bi/BiTimeFive';
import {GiSandsOfTime} from '@react-icons/all-files/gi/GiSandsOfTime';
import {MdDoneAll} from '@react-icons/all-files/md/MdDoneAll';
import {MdDateRange} from '@react-icons/all-files/md/MdDateRange';
import {MdUpdate} from '@react-icons/all-files/md/MdUpdate';
import {FiEdit} from '@react-icons/all-files/fi/FiEdit';
import {AiOutlineDelete} from '@react-icons/all-files/ai/AiOutlineDelete';
import ToggleSwitch from '../switch/ToggleSwitch';
import styles from './style.module.css';
import { Link } from 'react-router-dom';



const TaskCard = (props) => {

   const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/task-delete/${props.task.id}/`);
      console.log('DELETE request response:', response.data);
      // Handle success or update state as needed

      // You might want to reload the tasks or update the list after deletion
      // You can do this by calling a function from your parent component or using a state management solution
    } catch (error) {
      console.error('Error deleting task:', error);
      // Handle error
    }
  };
  
  const [Value,setValue]=useState(0);
  return (
    <div className={styles.TaskcardContainer}>
    <div className={styles['body-container']}>
      <div className={styles['top-bar']}>
        <span className={styles['icon']}><MdDateRange/><span className={styles['date-text']}>{props.task.due_date?props.task.due_date:'not set'}</span></span>
        <span className={styles['icon']}><MdUpdate/><span className={styles['date-text']}>date</span></span>
       
      </div>
      <div className={styles.subHeader}>
        {Value===1?<span style={{color:"green"}}><MdDoneAll />Completed</span>:<span>Due</span>} <ToggleSwitch Value={Value} setValue={setValue}/>
      </div>
      <div className={styles['desc']}>
        <h2 className={styles['text']}>{props.task.title}</h2>
        {props.task.description?props.task.description:''}
        </div>
        <div className={styles["footer"]}>
        <Link to="#">
          <span className={styles['icon']} style={{color:"limegreen"}}>
          <FiEdit/> 
          </span>
          
        </Link>
        
        <Link to="#">
          <span className={styles['icon']} style={{color:"red"}} onClick={()=>{handleDelete()}}>
            <AiOutlineDelete/>
          </span>
        </Link>
        </div>
    </div>
  </div>
  )
}

export default TaskCard;
