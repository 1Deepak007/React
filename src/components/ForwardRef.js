import React,{useRef} from 'react'
import ForwardRefChild from './ForwardRefChild'


export default function ForwardRef() {
    let inputRef = useRef(null);
    function updateInput(){
        inputRef.current.value = 999999;
        inputRef.current.style.color = 'green';
        inputRef.current.style.text = 'bold';
        inputRef.current.focus();
    }
    return (
        <>
        <h2 className='text-center'>ForwardRef</h2>
        <p>Forward ref is a technique in React that allows a parent component to access a child component's DOM node or a class component's instance. This can be useful in scenarios where a parent component needs to interact with a child component in a way that would not normally be possible using props and state.</p>

        {/* we will change dom of child component by button in parent component (ForwardRef.js) */}
        <ForwardRefChild ref={inputRef}/>   {/*sending ref*/}
        
        <button onClick={updateInput}>Update Inputbox</button>
    </>
  )
}
