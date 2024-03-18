import React,{Component} from 'react';
import CompWlUnmuntChild from './CompWlUnmuntChild'; // child component

export default class CompWlUnmunt extends Component {
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    
    render() {
        return (
            <>
                <div className="container">                
                    <h2 class='text-center'>Component will unmount</h2>

                    {this.state.show ? <CompWlUnmuntChild /> : <h5>Component is removed</h5>}
                    <button onClick={()=>this.setState({show:!this.state.show})}>Toggle child element</button>
                </div>

                <div className="container my-5">
In React function components with hooks, the equivalent of the componentWillUnmount lifecycle method is achieved using the useEffect hook with a cleanup function. The cleanup function is executed when the component is unmounted.
                </div>


            </>
        )
    }
}


// when component is removed from DOM componentwillunmount() method will be called.