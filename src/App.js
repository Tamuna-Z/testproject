import "./App.css";
// import Splitter from "./Splitter";
import First from './First';
import {useState} from 'react';
import Second from './Second';

function App() {
  const  [selectTip,setSelectTip]=useState([5,10,15,25,50,'Custom']);
  // return(
  //   <div>
  //     <Splitter selectTip={selectTip}/>
  //   </div>
  // )
  let[numberArray, setNumberArray]=useState([1,2,3,4,5]);
  const[showSecond,setShowSecond]=useState(true);
  const[clickNumber, setClickNumber]=useState();
  return(
    <div>
      {showSecond ? <First numberArray={numberArray} clickNumber={clickNumber} setClickNumber={setClickNumber} showSecond={showSecond} setShowSecond={setShowSecond}/>
      :<Second clickNumber={clickNumber} />}
    </div>)
}

export default App;
