import React, { Component, createRef } from 'react'

export default class Ref extends Component {

    constructor(){
        super();
        this.inputRef = createRef();
    }

    // Manipulating input box
    componentDidMount(){
        console.warn(this.inputRef); //returns us whole DOM and we can manipulate it as below
        console.log(this.inputRef.current.value="7252904359"); // maipulating
    }

    // Manipulating Input Box
    getVal(){
        console.warn('Getval function called '+ this.inputRef);
        console.log("Value of Ref Inputbox is : "+ this.inputRef.current.value);
        this.inputRef.current.style.color = 'white';
        this.inputRef.current.style.fontSize = '20px';
        this.inputRef.current.style.backgroundColor = 'lime';
    }

  render() {
    return (
        <>
            <h2 className='text-center'>Ref in Class Component</h2>

            <ul>
                <li>Ref directly manipulates DOM.</li>
                <li>Not recommanded to use it much</li>
            </ul>

            Some text : <input type="text" ref={this.inputRef}/>

            <button onClick={()=>this.getVal()}>CheckRefValue</button>

            <hr />  
        </>
    )
  }
}
