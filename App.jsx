import React from "react";
import {Souvik} from "./chai.jsx"
import { useState } from "react";
function App(){
let [counter,setCount]=useState(0);
let plus=()=>{
  setCount(counter+1);
}
let minus=()=>{
  setCount(counter-1);
}
return (
  <>
  <h1>The counter is {counter}</h1>
  <button onClick={plus}>Plus</button>
  <br/>
  <button onClick={minus}>Minus</button>
  </>
)
 
}
export { App }

