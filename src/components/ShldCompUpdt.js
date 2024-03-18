// It ask us whtr comp hv to be updtd or nt
// used for stoping rendring


import React from 'react';

class ShldCompUpdt extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate(){
        console.log('Should I update?',this.state.count);
        //Updating with conditions
        if(this.state.count >= 0 && this.state.count<6)
        {
            return true;
        }
    }    

    render() {
        return (
            <div className='App'>
                <h3 className="text-center">Should Component Update</h3> <br />
                <p>{this.state.count}</p>
                <button onClick={() => (this.setState({ count: this.state.count + 1 }))}>Update Counter</button>
            </div>
        );
    }
}

export default ShldCompUpdt;

