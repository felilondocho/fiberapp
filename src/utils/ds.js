var API = {
    inv: [
            {
                Name:'Promo',
                catalogs:[
                                {name:'Fiber1', bg:'#fff', elements:[1,2,3,4,5,6,7,8,9,10]},
                                {name:'Fiber2', bg:'#ccc', elements:[1,2,3,4,5]},
                            ]
            },
            {
                Name:'2017',
                catalogs:[
                                {name:'Fiber3', bg:'#aaa', elements:[1,2,3,4,5,6,7,8,9,10]},
                                {name:'Fiber4', bg:'#bbb', elements:[1,2,3,4,5,6,7,8,9,10,11]},
                            ]
            }
        ],
    all: function() { return this.inv},
    getCatalogNames: function() {
        var n =[];
        this.inv.forEach((element) => {
            n.push(element.Name)
        })
        return n;
    }
}

export function getData() {
    return API;
}