import './App.css';
import React,{useEffect, useState} from "react";

const inputCalculator = [{
  id:"clear",
  nam:"Clear"
},{
  id:"divide",
  nam:"/"
},{
  id:"multiply",
  nam:"x"
},{
  id:"seven",
  nam:7
},{
  id:"eight",
  nam:8
},{
  id:"nine",
  nam:9
},{
  id:"subtract",
  nam:"-"
},{
  id:"four",
  nam:4
},{
  id:"five",
  nam:5
},{
  id:"six",
  nam:6
},{
  id:"add",
  nam:"+"
},{
  id:"one",
  nam:1
},{
  id:"two",
  nam:2
},{
  id:"three",
  nam:3
},{
  id:"decimal",
  nam:"."
},{
  id:"zero",
  nam:0
},{
  id:"equals",
  nam:"="
}]

const operators = ["/","x","-","+","Clear","="]
const numbers = [0,1,2,3,4,5,6,7,8,9]

const Display = ({value,outValue})=>{
  return(
    <div className='list-group list-group-flush text-end'>
    <div className='list-group-item'>
      <div >
      <span>{outValue}</span>
      </div>
    <div >
      <span className='card-title' id="display">{value}</span>
    </div>

    </div>
        <br/>
    </div>
  )
}

const InputC = ({inputCdata : {id , nam}, handleInput})=>{
  return<button className="btn btn-outline-primary" id={id} onClick={()=> handleInput(nam)}>{nam}</button>
  }
  
  const PrintInput = ({handleInput})=>
  { return inputCalculator.map((key)=>(
      <InputC key={key.id} inputCdata={key} handleInput={handleInput}/>
        ))
  };

function App(){
  const[value,setValue]=useState("0")
  const[outValue,setOutValue]=useState("")
  const[calculatorData,setCalculatorData]=useState("")
  
  const handleSubmit=()=>{
    console.log(calculatorData)
    const total = eval(calculatorData)
    setValue(`${total}`)
    setOutValue(`${total} = ${total}`)
    setCalculatorData(`${total}`)
  }
  const handleClear=()=>{
    setValue("0")
    setCalculatorData("")
  }
  
  const handleNumber=(nam)=>{
    if(!calculatorData.length){
      setValue(`${nam}`)
    setCalculatorData(`${nam}`)
    }else{
      if(nam=== 0 && (calculatorData==="0"||value==="0")) {
      setCalculatorData(`${calculatorData}`)}
      else{
      const lastChat=calculatorData.charAt(calculatorData.length - 1)
      const isLastChatOperator = 
      lastChat=== "*" || operators.includes(lastChat)

      setValue(isLastChatOperator ? `${nam}` : `${value}${nam}`)
      setCalculatorData(`${calculatorData}${nam}`)
    }
  }
}
  const dotOperator=()=>{
    const lastChat=calculatorData.charAt(calculatorData.length -1)
    if(!calculatorData.length){
      setValue("0.")
      setCalculatorData("0.")
    }else{
      if(lastChat === "*"||operators.includes(lastChat)){
        setValue("0.")
        setCalculatorData(`${calculatorData} 0.`)
      }else{
        setValue(lastChat==="."||value.includes(".") ?
         `${value}` : `${value}.`)
      
      const formatteVaule = 
      lastChat==="."||value.includes(".")
      ? `${calculatorData}`:`${calculatorData}.`
      setCalculatorData(formatteVaule)
    }
  } 
  }
  const handleOperator=(nam)=>{
    if(calculatorData.length){
      setValue(`${nam}`)
      const beforeLastChat = calculatorData.charAt(calculatorData.length-2)
      const beforeLastChatIsOperator = 
      operators.includes(beforeLastChat)|| beforeLastChat==="*"
      const lastChat = calculatorData.charAt(calculatorData.length -1)
      const lastChatIsOperator = 
      operators.includes(lastChat)||lastChat==="*"
      const validOp = nam==="x"?"*":nam;
      if((lastChatIsOperator && nam !== "-" )||
      beforeLastChatIsOperator&&lastChatIsOperator){
        if(beforeLastChatIsOperator){
          const updatenam = 
          `${calculatorData.substring(0,calculatorData.length-2)}${nam}`
          setCalculatorData(updatenam)
        }else{
          setCalculatorData(`${calculatorData.substring(
            0,calculatorData.length-1)}${validOp}`)
        }
      } else{
        setCalculatorData(`${calculatorData}${validOp}`)
      }
    }
  }


  const handleInput=(nam)=>{
    const operator = operators.find(op=>op===nam)
    const number = numbers.find(num=>num===nam)
    switch(nam){
      case "=":
        handleSubmit();
        break;
      case "Clear":
        handleClear();
        break;
      case ".":
        dotOperator();
        break;
      case number:
        handleNumber(nam);
        break;
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
    <div className='container-sm contenedor text-center '>
      <br/>
      <h1 className='display-5'>Calculator React</h1>
      <br/>
      
       <div className='card bg-dark'>
         <div className='card-body'>
         <div>
           <Display  value={value} outValue={outValue}/>
       </div>
      
       <div className='row'>
         <div className='row-cols-4'>
           <PrintInput className="btn btn-primary col" handleInput={handleInput}/>
         </div>
       </div>
         </div>
      </div> 
   </div>  
        
    )
  } 
    
    export default App;