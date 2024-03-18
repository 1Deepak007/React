import {React,useState} from 'react';
import { Link } from 'react-router-dom';


export default function HighOrderComp(){
    return(
        <>
            <h2 className='text-center text-decoration-underline'>High Order Component</h2>
            <ul>
                <li>A component that takes a component as prop and returns a component with some extra features.</li>
                <li>Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional props or behavior. </li>
                <li>HOCs are a way to reuse component logic and add features to components in a modular and reusable way.</li>
            </ul>

            <div className='container text-center'>
                <HOCRed cmp={Counter}/>
                <HOCGreen cmp={Counter}/>
            </div>

            <a href='/'>Home</a>
            
        </>
    )
}

function Counter(){
    const [count, setCount] = useState(0);
    return<div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
}

function HOCRed(props){
    return <h2 style={{backgroundColor:'red'}}> Red <props.cmp/></h2>
}

function HOCGreen(props){
    return <h2 style={{backgroundColor:'green'}}> Green <props.cmp/></h2>
}

