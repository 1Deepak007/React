// Function as a prop  - sending fxn as a prop
// Lifecycle method    -  before birth()->birth/baby()->child()->adult()->old()->dead n rebirth()
//                    similarly in react they are MOUNT,UPDATING,UNMOUNT

import React from 'react'
import ChildComp from './ChildComp'

export default function FxnAsPropLifcyclmthd() {

  function getData(){
    alert('Hello there')
  }


  return (
    <>
      <h3 className='text-center'>Function as Prop</h3>
      <ChildComp data={getData}/>

      <hr />
      <h3 className='text-center'>LifeCycle Method</h3>
      <p>Phase 1: Mount/Load</p>
      <p>Phase 2: Update</p>
      <p>Phase 3: Unmount/Unload</p>
      <hr />
    </>
  
  )
}