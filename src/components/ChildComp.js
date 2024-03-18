import React from 'react'

export default function ChildComp(props) {
    return (
        <div>
            <h6>Child Component of FxnAsProp_lifcyclmthd</h6>
            {/* <button onClick={()=>props.data()}>Clng getData fxn frm parent as prop</button> */}

                                {/* OR call fxn as */}
            <button onClick={props.data}>Clng getData fxn frm parent as prop</button>
        </div>
    )
}
