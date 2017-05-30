import React, { Component } from 'react';
import Item from './Item'

class Collection extends Component {
    constructor(props) {
        super(props);
        this.handleItemChange = this.handleItemChange.bind(this);
    }
    handleItemChange(item) {
        var colName = this.props.name;
        var inputValue = item.inputValue;
        var itemCode = item.itemCode;
        this.props.onCollectionChange({
            colName,
            itemCode,
            inputValue
        });
    }
    render() {
        return (
            <div className='Collection'>
                {this.props.catalog.map((col,i) => {
                    return (
                        <div key={i} style={{backgroundColor:col.bg}}>
                            <h1>{col.name}</h1>
                            {col.elements.map((element,i) => {
                                return(
                                    <Item
                                        key={i}
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