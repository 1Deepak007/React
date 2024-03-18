// I AM CHILD COMPONENT


import React from 'react'

export default function SndDataChild(props) {

  const username = 'Ishita Kirti Gautam';

  const myObj = {name:'Ishu',location:'Nainital'};
  return (
    <>
        <h3>Child Component</h3>
        {/* <button onClick={props.alert()}>Click Me!</button>  */}
 
        {/* Received alert (parentAlert()) fuction from parent component */}
        {/* sending data (username) to parent component */}
        <button onClick={()=>props.alert(username)}>Click Mee!</button> 

        <button onClick={()=>props.objalert(myObj)}>Receive Object!</button>    


        <h5>u_name received in parent component : '{props.user}'</h5>

        <hr />

    </>
  )
}
