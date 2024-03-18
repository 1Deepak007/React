// Constructor - is called very first. hence all states defined in cnstrctr also gets ready first.
// Render method automatically runs when props or state gets updated 

import React, { Component } from 'react'

export default class CnstrctrRndrlfcycl extends Component {
    constructor() { 
        super();        // for clng parent cnstrctr of compo cls
        this.state={
            data:'Sonu'
        }
        console.warn(this.props)
    }

    render() {
        console.warn('Render method',this.props)
        return (
            <>
            <h3 className="text-center">Constructor</h3>
            <h6>Hello {this.state.data}</h6>
            
            <h5 className="text-center">Render Lifecycle Method</h5>
            <p>{this.props.name}</p>
            </>
        )
    }
}

