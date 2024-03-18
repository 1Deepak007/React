// State : used to store some data.
//         State represents the value of a dynamic properties of a React component at a given instance
//         The state object is where you store property values that belong to the component.
//        we can't update data using variable so we use state.
//        When the state object changes, the component re-renders.
// Note : useState : is hook that allow us to maintain/update state


// Props : are the data that we pass in a component.

import React,{useState} from 'react'


export default function StateWthFxnlComp(props) {

  const[data,setData] = useState('Nobita')
  function updateData(){ setData("Doremon") }


  const[num,setNum] = useState(0);
  function updateNum(){ setNum(num+1) }

  console.log(props.name)

  return (
    <>
      <div>
        <h3 className='text-center'>State with Functional Component</h3>

        <p>{data}</p>
        <button onClick={updateData}>Update Data</button>

        <b><p>{num}</p></b>
        <button onClick={updateNum}>Update Number</button>

      </div> <hr />

    </>
  )


}
