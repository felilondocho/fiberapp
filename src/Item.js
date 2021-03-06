import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onItemChange({
            itemCode: event.target.name,
            inputValue: event.target.value
        });
    }
    render() {
        return (
            <div className='Item'>
                <p>{this.props.item}</p>
                <input
                    name={this.props.item} 
                    type='number'
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Item;

