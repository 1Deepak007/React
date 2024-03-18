import React,{Fragment} from 'react'

export default function Fragments() {
  return (
    <React.Fragment>       {/* or use    <> </> */}
        <h2>React Fragment</h2>
        <p> We must always use react fragment {'<> content/component </>'} </p>
        <p> {'<> </>'} are called react fragments</p>
        <hr />
    </React.Fragment>
  )
}
