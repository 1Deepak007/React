import React, { useRef } from 'react'

export default function UseRefFxnlComp() {

    let InputRef = useRef(null);

    function myFunction(){
      InputRef.current.value = '10000';
      InputRef.current.focus(); //bring focus to input box on button click 
      InputRef.current.style.color = 'red'; //change background color of the text field
      InputRef.current.style.backgroundColor = 'blue';
      InputRef.current.style.font = 'bold';

      //InputRef.current.style.display = "none";   // will hide the text field
    }

  return (
    <>
        <h2 className='text-center'>UseRef in Fxnl Comp</h2>

        <ul>
            <li>Used for DOM manipulation.</li>
            <li>useRef is a React Hook that is used to create a mutable object called a ref. This ref can hold a .current property, which can be assigned any value.</li>
            <li>The main purpose of useRef is to persist values across renders without causing the component to re-render when the ref's value changes.</li>
        </ul>

        <input type="text" ref={InputRef} className='text-center'/>
        <button onClick={myFunction}>Handle Input</button>



        <hr />
    </>
  )
}
