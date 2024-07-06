import { useState } from 'react'
import React from "react";
import './Counter.css'


const Counter = ()=>{
    const [x , setX] = useState(0)
    return (
        <>
       <h1> Counter : {x} is {(x % 2 == 0 )? 'Even': 'Odd'} </h1>
        <div style={{display: "flex", gap: '20px' , alignItems: "center"}}>
        <button id='btn' style={{padding: '5px 10px', borderRadius: "20px" , fontSize: '16px'}} onClick={()=> setX(x+1) }>Increase</button> 
        <button style={{padding: '5px 10px', borderRadius: "20px" , fontSize: '16px'}} onClick={()=> setX(x-1) }>Decrease</button>
        </div>
        </>
    )
}

export default Counter;