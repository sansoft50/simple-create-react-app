import React, { Component } from 'react';

class NameInput extends Component {

    constructor() {
        super();

        this.state = {
            nameInputValue: "Ravi",
            otherValue: 1,
            someanothervalue: 2,
        };
    }

    changeNameInput = e => {
        this.setState({
            nameInputValue: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Your Name..." 
                    value={this.state.nameInputValue} 
                    onChange={this.changeNameInput} 
                />
                <button>submit</button>
            </div>
        )
    }
}

export default NameInput;