import {useState, useEffect} from "react"

export default function CountFunc(props){
    
    let [count, setCount] = useState(0)
    function handleClick(){
        setCount(count+= props.num)
    }
    function rollCount(){
        if (count > 10){
            setCount(0)
        }
    }
    useEffect(rollCount, [count, ])
    const buttonStyle = {
        background:props.color, 
        borderStyle:"solid", 
        borderWidth:"2px", 
        padding: "2px", 
        margin:"auto", 
        display:"flex"
     }
    return(
      <>
        <button onClick={handleClick}  style={buttonStyle}>[+{props.num}]</button>
        <div>= {count}</div>
      </>
    )
}

