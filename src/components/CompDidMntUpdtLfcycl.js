                        // componentDidMount
// getting ready sequence : Constructor -> Render -> componentDidMount
// componentDidMount is cled after our HTML,DOM etc gets ready, it runs only once.
// componentDidMount is used in api calling  (any operation depending on HTML is done inside it). Cuz it don't updt agn n agn.
// componentDidMount after state/props are updated

                        // componentDidUpdate
// runs only when any component gets update(state/props update)

import React, { Component } from 'react'

export default class CompDidMntUpdtLfcycl extends Component {
    constructor() {
        super();                                 console.log('Constructor');
        this.state = { name:'Nobita' }
        this.state = { location:'Lucknow' }
        this.state = { count:0 }
    }
    //run only once when component is mounted
    componentDidMount() {
        console.log("Component did mount")
    }


    //-->runs only whn state/props gets updated
    // componentDidUpdate() {
    //     console.log('Component did update')
    // }
                    // Also
    // --> provides previous props,state,snpshot
    componentDidUpdate(preProps,preState,snapshot) {
        console.log('Component did update1',preState.count,this.state.count)   // return value of previous state
        
        
        if (this.state.count <= 10){
            this.setState({count:this.state.count + 1})
        }
    }
    

    render() {
        // console.log('Render')
        return (
            <>
                <h3 className="text-center">Component Did Mount Update Lifecycle</h3>
                <p>{this.state.name}</p>
                <button onClick={()=>{this.setState({name:'Sizuka'})}}>Update state</button>
                
                <p>{this.state.location}</p>
                <button onClick={()=>{this.setState({location:'Pune'})}}>Update state</button>

                <p>{this.state.count}</p>       
                <button onClick={()=>{this.setState({count:this.state.count + 1})}}>Update state</button>

                <hr />
            </>
        )
    }
}

