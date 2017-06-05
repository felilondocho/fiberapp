import React, { Component } from 'react';
import Collection from './Collection';
import { generateCSV } from './utils/csvgen';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.handleColChange = this.handleColChange.bind(this);
        this.handleClickOnPrevNext = this.handleClickOnPrevNext.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.slideIndex = 1;
        this.order = [];
    }

    handleColChange(col) {
        if(this.order.length > 0) {
            var colFound = false;
            this.order.forEach(function(element) {
                if(element.colName === col.colName) {
                    colFound = true;
                    var refFound = false;
                    element.order.forEach(function(ele,i) {
                        if(ele.ref === col.itemCode) {
                            refFound = true;
                            if(col.inputValue === '') {
                                element.order.splice(i,1)
                            }else{
                                ele.cant = col.inputValue;
                            }
                        }
                    }, this);
                    if(!refFound){
                       element.order.push({
                           ref:col.itemCode,
                           cant:col.inputValue
                        }) 
                    }
                }
            }, this);
            if(!colFound) {
                this.order.push({
                    colName:col.colName,
                    order:[{
                        ref:col.itemCode,
                        cant:col.inputValue
                    }]
                })
            }
        }else{
            this.order.push({
                colName:col.colName,
                order:[{
                    ref:col.itemCode,
                    cant:col.inputValue
                }]
            })
        }
    }

    handleSubmit() {
        generateCSV(this.order);
    }

    componentDidMount() {
        this.showDivs(this.slideIndex);
    }

    showDivs(n) {
        var i;
        var x = document.getElementsByClassName("Collection");
        if (n > x.length) {this.slideIndex = 1}    
        if (n < 1) {this.slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[this.slideIndex-1].style.display = "block";
    }

    handleClickOnPrevNext(e) {
        if (e.target.classList.contains('prev')) {
            this.showDivs(this.slideIndex -= 1);
        }
        if (e.target.classList.contains('next')) {
            this.showDivs(this.slideIndex += 1);
        }
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
                <button className='ctrlbtn prev ' onClick={this.handleClickOnPrevNext}>
                </button>
                <button className='ctrlbtn next' onClick={this.handleClickOnPrevNext}>
                </button>
                <div className='App-footer'>
                    <button className='finishOrder' onClick={this.handleSubmit}>Finalizar</button>
                </div>
            </div>
        );
    }
}

export default Catalog;