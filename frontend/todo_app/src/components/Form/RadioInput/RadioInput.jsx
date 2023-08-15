import React from 'react';
import './styles.css';


const RadioInput = ({ dispatch }) => {
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;

    if (dispatch) {
      console.log("is completed",selectedValue);
      dispatch({
        type: 'UPDATE_FORM_FIELD',
        field: 'completed', // Adjust the field name according to your form
        value: selectedValue,
      });
    }
  };

  return (
    <div className="radio-input-container">
    <div className="input-group">
      <input
        type="radio"
        name="completed-status"
        id="due"
        value={'false'}
        onChange={handleRadioChange}
      />
      <label htmlFor="due">Due</label>
      </div>
      <div className="input-group">

      <input
        type="radio"
        name="completed-status"
        id="completed"
        value={'true'}
        onChange={handleRadioChange}
      />
      <label htmlFor="completed">Completed</label>
      </div>
    </div>

  );
};

export default RadioInput;
