// This is PureCompOnProps's child component PureCompOnProps

import React, { Component, PureComponent } from 'react';

// USING NORMAL COMPONENT
// class PureCompOnPropsChild extends Component {
//     render() {
//         console.warn('PureCompOnPropsChild  check-rendring');
//         return (
//             <div>
//                 <h2>I am PureCompOnPropsChild</h2>

//                 <h5>{this.props.name}</h5>

//             </div>
//         );
//     }
// }

// USING PURECOMPONENT
class PureCompOnPropsChild extends PureComponent {
    render() {
        console.warn('PureCompOnPropsChild  check-rendring');
        return (
            <div>
                <h2>I am PureCompOnPropsChild</h2>

                <h5>{this.props.name}</h5>

            </div>
        );
    }
}

export default PureCompOnPropsChild;
