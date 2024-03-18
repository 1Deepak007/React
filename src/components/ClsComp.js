import React, { Component } from 'react'

export default class ClsComp extends Component {
  render() {
    return (
        <>
            <h3  className='text-center'>Class Based Component</h3>
            <p>This is a class component.</p> <hr />

            Key points about class-based components:

            State:<br/>

            Class components can hold and manage local component state using the this.state object. State is typically initialized in the constructor.
            
            <br/><br/>
            Lifecycle Methods:<br/>

            Class components have access to lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. These methods are used to perform actions at different stages of a component's lifecycle.
            <br/><br/>
            this Keyword:<br/>

            Class components use the this keyword to access props and state.
            <br/><br/>
            Class Syntax:

            The component is defined as a class that extends React.Component or a custom base class.
          
        </>
    )
  }
}
