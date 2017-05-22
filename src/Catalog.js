import React, { Component } from 'react';
import Collection from './Collection';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.handleColChange = this.handleColChange.bind(this);
    }

    handleColChange(Col) {
        console.log(Col)
    }

    render() {
        return (
            <div className='Catalog'>
                {this.props.collections.map(cat => {
                    return(
                        <Collection
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