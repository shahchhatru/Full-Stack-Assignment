import React ,{useState}from "react";
import './style.css'
const ToggleSwitch = ({Value,setValue}) => {
    const [counter,setCounter]=useState(0)
    const handleToggle = () => {
     
      if(counter==0){
        const newValue = Value === 0 ? 1 : 0;
        setValue(newValue);
        console.log(newValue);
        setCounter(counter+1);
      
      }
     
      if(counter==1){
        setCounter(0);
      }

      
      
    };
  
  return (
    <>
      <label className="switch" onClick={handleToggle}>
      <input type="checkbox"  />
      <span className="slider round"></span>
    </label>
      
    </>
  );
};

export default ToggleSwitch;
