import React from 'react';
import { useState,useEffect } from 'react';

export default function UseEffect() {
  //====> For UseEffect  
  React.useEffect(()=>{
    // alert('UseEffect');
  });


  //----> useEffect on state
  const[count,setCount]=useState(0)
  useEffect(()=>{
    console.warn('UseEffect count :',count)
  });

  return (
    <div>
      <h2 className='text-center text-decoration-underline my-5'>UseEffect</h2>
        <h2>UseEffect Hook</h2>
        <ul>
          <li>useEffect runs on every render.</li>
          <li>The useEffect hook is used to handle the side effects of a component.</li>
          <li>The useEffect Hook allows you to perform side effects in your components.</li>
          <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li>  
          <li>useEffect accepts two arguments. The second argument is optional.
                        useEffect (function, dependency);
          </li>
          <li>We can use  multiple UseEffects</li>
        </ul>

        <h4>useEffect in Rect {count}</h4>
        <button onClick={()=>setCount(count+1)}>Update Counter</button>
      <hr />  
    </div>
  )
}
