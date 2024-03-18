import React, { useState } from 'react'
export default function GtInpBxVlu() {

    const [value, setValue] = useState(null);
    function getData(val) {
        setValue(val.target.value)
    }


    const [data,setdata] = useState(null);
    const [prnt,setprnt] = useState(false);
    function getDta(valu) {
        setdata(valu.target.value)
        setprnt(false)       // to make all txt reset whn agn start tyipng
    }


    const [status, setstatus] = useState(true);


    return (
        <>
            <h3 className='text-center'>Get Input Box Value</h3>
            <p>{value}</p>
            <input type="text" onChange={getData} />

            {/*----------------------------------------------------------*/}

            { prnt ?  <p>{data}</p> : null}
            <input type="text" onChange={getDta} />
            <button onClick={()=>setprnt(true)}>Print value</button>

            {/*----------------------------------------------------------*/}

                            <hr />

            <h3 className='text-center'>Hide/show or Toggle element/tag using buttons</h3>

            {   status ? <p>Toggle button</p> : null   }
            <button onClick={()=>setstatus(false)} className='btn btn-success'> Hide </button>      &nbsp;&nbsp;

            <button onClick={()=>setstatus(true)} className='btn btn-success'> Show </button>       &nbsp;&nbsp;            
            
            <button onClick={()=>setstatus(!status)} className='btn btn-success'> Toggle </button>  &nbsp;&nbsp;

            <hr />
        </  >
    )
}

