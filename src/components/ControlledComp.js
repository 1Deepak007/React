import React,{useState} from "react";

function ControlledComp() {
  let [val,setVal] = useState();
  let [item,setItem] = useState('null');

  return (
    <>
        <div className="container my-2">
            <h2 className="text-center">Controlled Component</h2>
            <p>In React, a controlled component refers to a form element whose value is controlled by the React state. In other words, the state of the component is used to control and manipulate the value of the form element.</p>

            <input type='text' value={val} onChange={(e)=>setVal(e.target.value)} defaultValue='0' className="my-3"/>
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} className="my-2"/>

            <h3>Value : {val}</h3>
            <h3>Item : {item}</h3>


        </div>
    </>
  )
}

export default ControlledComp;
// export default React.forwardRef(ControlledComp);