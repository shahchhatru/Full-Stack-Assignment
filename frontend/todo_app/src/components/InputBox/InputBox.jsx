import React from 'react';

import './styles.css'



const InputBox = ({name,width,inputId,vfield,dispatch,state,type="text"}) => {
  const handleChange = (event) => {
    const newValue = event.target.value;

    if (dispatch && vfield) {
      dispatch({
        type: 'UPDATE_FORM_FIELD',
        field:vfield,
        value: newValue,
      });
    }
  };
  return (
   
      <div className="inputBox" style={{width:width}}>
        <input id={inputId}  type={type} required={true} onChange={handleChange} value={state[vfield]} />
        <span>{name} </span>
      </div>
   
  );
};

export default InputBox;
