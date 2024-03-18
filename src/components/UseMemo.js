import {React,useState,useMemo} from 'react'

export default function UseMemo() {
    const[item,setitem] = useState(1);
    const[num,setnum] = useState(10);
    const[count,setcount] = useState(1);


    // function without memo : multiCount() gets called on every button that we click.
    // function multiCount(){
    //     console.warn('multiCount function called');
    //     return count * 2
    // }

    // function using memo : multipleCount() gets called on only when we call it by clicking "Update Count" button.
    const multipleCount=useMemo(
        function multiCount(){
            console.warn('multiCount function called');
            return count * 2
        }
        ,[count]
    );

  return (
    <>
        <h2 className='text-center'>UseMemo</h2>
        <p>useMemo is a React Hook that is used to memoize the result of a computation, preventing unnecessary recalculations and optimizing the performance of your React components.</p>
        <br />

        <h2>Item (without memo) : {item}</h2>
        <button onClick={()=>setitem(item*2)}>Update Item</button>


        <h2>Add Two : {num}</h2>
        <button onClick={()=>setnum(num+2)}>Update Add</button>


        <h2>Count : {count}</h2>
        <button onClick={()=>setcount(count+1)}>Update Count</button>

        <h2>Num : {multipleCount}</h2>
    
        {/* <h2>MultipleCount : {multiCount()}</h2> */}

    

        <p><b>Note : </b> Above when we click on 'Update Item' button 'multiCount()' is also gets called. So to stop that we can wrap fxn in "useMemo".</p>
        
        <hr />
    </>
  )
}
