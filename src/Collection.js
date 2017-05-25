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
                        <div key={col.id}>
                            <h1>{col.name}</h1>
                            {col.elements.map(element => {
                                return(
                                    <Item
                                        key={element.id}
                                        item={element}
                                        onItemChange={this.handleItemChange}
                                    />  
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Collection;