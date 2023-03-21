import "./First.css";
import { useState } from "react";

function First(props) {
  // submit button function
  const buttonClick = () => {
    props.setShowSecond(false);
  };
console.log(props.clickNumber);
  return (
    <div className="App">
      <div className="firstContainer">
        <div className="starDiv">
          <svg
            className="starImg"
            width="17"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
              fill="#FC7614"
            />
          </svg>
        </div>
        <div className="textContainer">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
{/* appear number button by map and change color on click a button */}
        <div className="buttonDiv">
          {props.numberArray.map((number, index) => {
            
            return (
              <button
                className="numberButton"
                key={index}
                style={{
                   backgroundColor:props.clickNumber === number ? "grey" : "orange"
                    
                }}
                onClick={()=>{
                  props.setClickNumber(number);
                }}
              >{number}</button>
            );
          })}
        </div>

        <div>
          <button className="buttonSubmit" onClick={buttonClick}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default First;
