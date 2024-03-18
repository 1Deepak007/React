// I AM PARENT COMPONENT


import React from 'react';
import SndDataChild from './SndDataChild';

export default function SndDataToParentComp() {

    function parentAlert(username){
        alert('I am a function in Parent Component called in this child component. Data received from child component is : '+username);
    }

    function objjalert(myObj) { 
        alert(`The object received by parent is ${JSON.stringify(myObj)}`);
        console.log(myObj);
    }

    let u_name="Deepak Gautam";


  return (
    <>
        <h2 className='text-center text-decoration-underline'>Send data to parent component / Lifting State Up</h2>
        <h4>Parent Component</h4>
        <p>Sending data from child to parent is LIFTING-UP state</p>
        <p>Below we are grabbing child component (SndDataChild.js)</p>
        


        <div className="container">
            {/* Sending 'alert' function to child component */}
            <SndDataChild alert={parentAlert}   user={u_name}/>

            {/* Data received from child */}
            <SndDataChild objalert = {objjalert} />
            

        
        </div>



        <hr />
    </>
  )
}
