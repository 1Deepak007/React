import React, { Component, PureComponent } from 'react';
import PureCompOnPropsChild from './PureCompOnPropsChild';

class PureCompOnProps extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Adam'
        }
    }

    render() {
        return (
            <>
                <h4>Pure Component On Props</h4>

                <p>RENDERING BELOW CHILD COMPONENT : </p>


                <div className="container"> 
                    <PureCompOnPropsChild name={this.state.name}/>
                </div>

                <button onClick={()=>this.setState({name:this.state.name = 'Electra'})}>Update State</button>  <br />

                <p><b>Note : </b> Above once the state is updated the component again gets rendred so to stop that we can usepure component.</p>
                
                <hr />
            </>
        );
    }
}


export default PureCompOnProps;
