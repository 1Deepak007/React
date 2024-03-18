import React from 'react'
import {Button,Alert} from 'react-bootstrap';     // using bootstrap we installed 

export default function ClickEvent() 
{
    function ClkMe() {
      alert('On Click Event Occured');
    }

    let data = "Deepak Gautam"
    
    return (
        <>
            <h3  className='text-center'>ClickEvent</h3>
            {/* Simple function */}
            <button onClick={ClkMe} className='btn btn-primary'>Click Event</button>

            {/* ARROW FUNCTION */}
            <button onClick={()=>alert('Arrow Function')}  className='btn btn-success'>Arrow Fxn</button>
            <button onClick={()=>alert('Hello '+data)}  className='btn btn-danger'>Hiiiii</button>
            <p>Using Variable : Hello {data}</p>        <hr />
        </>
    )
} 
