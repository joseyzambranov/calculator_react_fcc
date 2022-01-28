import './App.css';
import React,{useEffect, useState} from "react";

const inputCalculator = [{
  id:"equals",
  nam:"="
},{
  id:"zero",
  nam:"0"
},{
  id:"one",
  nam:"1"
},{
  id:"two",
  nam:"2"
},{
  id:"three",
  nam:"3"
},{
  id:"four",
  nam:"4"
},{
  id:"five",
  nam:"5"
},{
  id:"six",
  nam:"6"
},{
  id:"seven",
  nam:"7"
},{
  id:"eight",
  nam:"8"
},{
  id:"nine",
  nam:"9"
},{
  id:"add",
  nam:"+"
},{
  id:"subtract",
  nam:"-"
},{
  id:"multiply",
  nam:"*"
},{
  id:"divide",
  nam:"/"
},{
  id:"decimal",
  nam:"."
},{
  id:"clear",
  nam:"Clear"
}]

const operators = ["/","*","-","+",".","Clear","="]
const numbers = [0,1,2,3,4,5,6,7,8,9]

const Display = ({value,outValue})=>{
  return(
    <div>
    <div><span>{outValue}</span></div>
    <div><span id="display">{value}</span></div>
    </div>
  )
}


const InputC = ({inputCdata : {id , nam}, handleInput})=>{
  return <button id={id} onClick={()=> handleInput(nam)}>{nam}</button>
  }
  
  const PrintInput = ({handleInput})=>
  { return inputCalculator.map((key)=>(
      <InputC key={key.id} inputCdata={key} handleInput={handleInput}/>
        ))
  };

function App(){
  const[value,setValue]=useState("0")
  const[outValue,setOutValue]=useState("0")
  const[calculatorData,setCalculatorData]=useState("")
  
  const handleSubmit=()=>{

  }
  const handleClear=()=>{
    
  }
  const dothOperator=()=>{
    
  }
  const handleNumber=()=>{
    
  }
  const handleOperator=()=>{
    
  }

  const handleInput=(nam)=>{
    const operator = operators.find(op=>op===nam)
    const number = numbers.find(num=>num===nam)

    switch(nam){
      case "=":
        handleSubmit();
      case "Clear":
        handleClear();
      case ".":
        dothOperator();
      case number:
        handleNumber(nam);
      case operator:
        handleOperator(nam)
      break;
      default: 
    }
  }
  const handleOutInput=()=>{
    setOutValue(calculatorData)
  }
  
  useEffect(()=>{
    handleOutInput()
  },[calculatorData])
   
  return(
    <div className='container w-75 text-center'>
      <div>
           <Display value={value} outValue={outValue}/>
      </div>
      <PrintInput handleInput={handleInput}/>
      
    </div>
    
    )
  } 
    
    export default App;