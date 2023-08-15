import React,{useReducer} from 'react'
import InputBox from '../InputBox/InputBox';
import RadioInput from './RadioInput/RadioInput';
import axios from 'axios'
import styles from './styles.module.css';

function formReducer(state,action) {
  switch (action.type) {
      case 'UPDATE_FORM_FIELD':
          return {
              ...state,
              [action.field]: action.value
          };
      case 'RESET_FORM':
        return{
          ...initialFormField,

        }
      default:
          return state;
  }

}

const initialFormField={
   "title": '',
    "description": '',
    "due_date": '',
    "completed": false
}
const Formpage = () => {

  const [state,dispatch]=useReducer(formReducer,initialFormField);


  // ... (your existing code)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/task-create/', state);
      console.log('POST request response:', response.data);
      // You can handle the response data here as needed

      // If you want to reset the form fields after successful submission
      dispatch({ type: 'RESET_FORM' }); // You can define a new action type to reset the form
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error here
    }
  };

  // ... (rest of your component code)







    
  return (
    <div className={styles["mainform-container"]}>
      <h1>ADD TASK</h1>
      <form onSubmit={handleSubmit} >
      <div className={styles["form-page-container"]}>
          <div className={styles["inlabel-group"]} style={{alignItems:"baseline"}}>
            <InputBox name="title" width="40%" inputId="title" vfield="title" dispatch={dispatch} state={state} type="text"/>
          </div>
           <div className={styles["inlabel-group"]} style={{alignItems:"baseline"}}>
            <InputBox name="desc" width="40%" inputId="desc" vfield="description"  dispatch={dispatch} state={state} type="text"/>
          </div>
          <div className={styles["inlabel-group"]} style={{alignItems:"baseline"}}>
            <InputBox name="due_date" width="40%" inputId="due_date" vfield="due_date" type="date" dispatch={dispatch}
            state={state}
            />
          </div>
         <div className="box">
            <RadioInput dispatch={dispatch}/>
          </div>
          <div className={styles["buttonContainer"]}>
          <button
            className={styles["button-9"]}
            role="button" 
            type="submit">
          ADD
          </button>
        </div>
        </div>
         
    </form>
    </div>
  )
}

export default Formpage;
