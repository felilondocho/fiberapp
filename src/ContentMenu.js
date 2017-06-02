import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
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
            <ul>
                <li><Link to={'/'}>{'Home'}</Link></li>
                {this.props.cat_names.map((catalogName,i) => {
                    return(
                        <li key={i}><Link to={'/'+catalogName}>{catalogName}</Link></li>
                    );
                })}
            </ul>
        );
    }
}

export default Content;

