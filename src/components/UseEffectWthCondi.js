import React,{useEffect,useState} from 'react'

export default function UseEffectWthCondi(props) {

    const [data,setData] = useState('default data');
    const [count,setCount] = useState(100);

    useEffect(()=>{
        console.warn("<h3>Useeffect Called on data</h3>");
        // alert('State Updated');
    },[data]);     // <== passed data as argument so usEffect will run only on data not on count

    useEffect(()=>{
        console.log('UseEffect called on count. Count : '+count);
    },[count]);   // <== passed data as argument so usEffect will run only on count not on data



    //-----------------------------------------------------------------------------
    //USEEFFECT WITH PROPS
    useEffect(()=>{
        alert("UseEffect running on both 'count' and 'data' ");
    },[props.nwdata,props.nwcount]);

    return (
        <>
            <h2 className='text-decoration-underline text-center'>Use Effect with Conditional Rendering</h2>
            <ul>
                <li>Use Effect with Conditional Rendering is used in functional component</li>
                <li>It only runs when the value of data changes.</li>

            </ul>

            <h4>Count : {count}</h4>
            <h4>Data : {data}</h4>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setData('React')}>Update Data</button>


            <h3 className='text-decoration-underline text-center'>Use Effect with props</h3>
            {/* USING useEffect with props */}
            <h4>Props : {props.nwCount}</h4>    {/* props passed from App.js */}
            <h4>Props : {props.nwData}</h4>     {/* props passed from App.js */}


            <hr />
        </>
    )
}
