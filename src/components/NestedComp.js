import React from 'react'

export default function NestedComp() {

    function NstdComp(){
        return(<>
            <p>This is NestedComp.js's nested component. </p>
        </>)
    }
        
    return (
        <>
            <h3  className='text-center'>Nested Component</h3>
            <p>This NestedComp.js's main component. </p>

            <NstdComp/>
            <hr />
        </>
    )
}
