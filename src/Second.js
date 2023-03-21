import "./Second.css";
import thankImg from "./images/thank.png";
import {useState} from 'react';

function Second(props) {
  console.log(props.clickNumber);
  return (
   <div className="mainContainer">
     <div className="secondContainer">
      <div className="thankImage">
        <img src={thankImg}/>
      </div>
      <div>
        {/* clickNumber doesn't work */}
        <div className="thankButton">You selected {props.clickNumber} out of 5</div>
      </div>
      <div className="thankDiv">
        <h1 className="thankTitle">Thank you</h1>
        <p className="thankText">
          We appreciate you taking the time to give a rating. If you ever need
          more support, do not hesitate to get in touch!
        </p>
      </div>
      
    </div>
   </div>
  );
}
export default Second;
