import React, { Component } from 'react';
import Collection from './Collection';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.handleColChange = this.handleColChange.bind(this);
    }

    handleColChange(col) {
        this.props.onColChange(col);
    }

    render() {
        return (
            <div className='Catalog'>
                {this.props.collections.map((cat,i) => {
                    return(
                        <Collection
                            key={i}
                            catalog={[cat]}
                            name={cat.name}
                            onCollectionChange={this.handleColChange}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Catalog;