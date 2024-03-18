// PURE COMPONENT ON STATE

import React, { Component, PureComponent } from 'react'

// export default class PureCompOnStat extends Component {

//   constructor(){
//     super();
//     this.state={
//       count:1
//     }
//   }

  
//   render() {
//     console.log('Check rerendring');
//     return (
//       <>
//         <h2 className='text-center'>Pure Component</h2>
//         <h5> It compares what content was previously rendred n what now we r going to rndr. If previour render(states) and now rndrd(state) is same then it don't rerender.</h5>
//         <p>PureComponent is that it performs a shallow comparison of the current and previous props and state to determine whether the component should update.</p>
//         <ul>
//           <li>Shallow Prop and State Comparison: PureComponent automatically implements the shouldComponentUpdate method with a shallow comparison of the current and previous props and state. If there is no change in the shallow values, the component will not re-render, which can lead to performance optimizations.</li>
//           <li>Implicit shouldComponentUpdate: PureComponent handles the shouldComponentUpdate logic for you, so you don't need to manually implement it. This can be convenient for preventing unnecessary renders in certain scenarios.</li>
//         </ul>

//         <hr />

//         <h3>Count:{this.state.count}</h3>
//         <button onClick={()=>this.setState({count:this.state.count = 100})}>Update count</button>  <br />
         
//         <h4>Note : Component is rendred everytime state updates. We are using normal component above not pure component.</h4>
        
//         <hr /><hr />
//       </>
//     )
//   }
// }


class PureCompOnStat extends PureComponent {
  constructor(){
    super();
    this.state={
      name:'Admin'
    }
  }
  render() {
    console.warn('Check rerendring');
    return (
      <div>
        <h2 className='text-center'>Pure Component </h2>
        <h5> It compares what content was previously rendred n what now we r going to rndr. If previour render(states) and now rndrd(state) is same then it don't rerender.</h5>
        <p>PureComponent is that it performs a shallow comparison of the current and previous props and state to determine whether the component should update.</p>
        <ul>
          <li>Shallow Prop and State Comparison: PureComponent automatically implements the shouldComponentUpdate method with a shallow comparison of the current and previous props and state. If there is no change in the shallow values, the component will not re-render, which can lead to performance optimizations.</li>
          <li>Implicit shouldComponentUpdate: PureComponent handles the shouldComponentUpdate logic for you, so you don't need to manually implement it. This can be convenient for preventing unnecessary renders in certain scenarios.</li>
        </ul>

        <hr />

        <h3 className='text-center'>Using pure component on state</h3>
        <h3>Name:{this.state.name}</h3>
        <button onClick={()=>this.setState({Name:this.state.name='Deepak Gautam'})}>Update State</button>  <br />
        <h4>Note : Component is not rendred everytime state updates. We are using pure component.</h4>
        <hr />


        
        <hr />
      </div>
    );
  }
}

export default PureCompOnStat;




