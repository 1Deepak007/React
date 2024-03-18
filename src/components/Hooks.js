import React,{useState,useEffect} from 'react';  
import PropsWthFxnlComp from './PropsWthFxnlComp';   

//name of all hooks starts with 'use'  like 'useState','useEffect' etc....   use keywork is reserved fro hooks.
export default function Hooks() {
    ////useState -> hook
    const [data,setData] = useState('DefaultValue')
  return (
    <div>
        <h2 className='text-center text-decoration-underline'>useState</h2>
        <h4>{data}</h4>
        <button onClick={()=>setData("Hello World")}>Click Me.</button>

        <br/><br/>
        <h4>Hooks : we can use some features of class component in functional component via Hooks.</h4>
        <h5> Hooks are functions that enable functional components to have state and lifecycle features, which were traditionally associated with class components.</h5>
        <h6>All name of all hooks starts with 'use'  like 'useState','useEffect','useContext','useReducer' etc....   use keywork is reserved fro hooks.</h6>
        <hr/>
    </div>
  )
}

