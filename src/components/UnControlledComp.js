import React,{useRef} from 'react'

export default function UnControlledComp() {
    let inputRef = useRef(null);
    let inputRef1 = useRef(null);

    function submitForm(e){
        e.preventDefault();             //to stop page reload
        console.log('Input Field 1 valid. Value : ',inputRef.current.value);
        console.log('Input Field 2 valid. Value : ',inputRef1.current.value);

        let ele = document.getElementById('input3').value;
        console.warn('Input Field 3 valid. Value : ',ele);
    }



  return (
    <>
        <h2 className='text-center'>Uncontrolled Component</h2>
        <ul>
            <li>Uncontrolled components are those which have some input fields and these fileds are not controlled by react states instead they are controlled by diractly Javascript or Ref.</li>
            <li>Uncontrolled component refers to a form element whose value is not directly controlled by React state. Instead of managing the input value through React state, the value is managed by the Javascript or Ref (DOM itself).</li>
            <li>With uncontrolled components, you rely on the DOM to handle the state of the input, and you typically access the current value through a reference to the DOM element. This is often done using the ref attribute in React.</li>
        </ul>                                                   <br/>

        <form onSubmit={submitForm} className='text-center'>
            <input ref={inputRef} type='text' />                               &nbsp;&nbsp;
            <input ref={inputRef1} type='text' />                              &nbsp;&nbsp;
            <input id='input3' type='text'/>                                   &nbsp;&nbsp;
            <button>Submit</button>
        </form>
    </>
  )
}
