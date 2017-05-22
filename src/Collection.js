import React, { Component } from 'react';
import Item from './Item'

class Collection extends Component {
    constructor(props) {
        super(props);
        this.handleItemChange = this.handleItemChange.bind(this);
    }
    handleItemChange(item) {
        var colName = this.props.name;
        this.props.onCollectionChange({
            colName,
            item
        });
    }
    render() {
        return (
            <div className='Collection'>
                {this.props.catalog.map(col => {
                    return (
                        <div>
                            <h1>{col.name}</h1>
                            <ul>
                                {col.elements.map(element => {
                                    return(
                                        <Item
                                            item={element}
                                            onItemChange={this.handleItemChange}
                                        />  
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Collection;