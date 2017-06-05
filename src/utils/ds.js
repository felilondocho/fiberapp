var API = {
    inv: [
            {
                Name:'Sale',
                catalogs:[
                    {name:'Sale pag 1',
                    icon:require('../assets/images/sale.png'),
                    bg:'#FF27B1',
                    elements:['BICI - 01','BICI - 02','BICI - 03','BICI - 04','BICI - 05','BICI - 06','BICI - 07',
                                            'CC01-1','CC01-4','CC01-5',
                                            'FBR03','FBR04','FBR18']},
                    {name:'Sale pag 2',
                    icon:require('../assets/images/sale.png'),
                    bg:'#FF27B1',
                    elements:['ID003','ID004','ID005','ID007','ID008','ID009','ID0014',
                                                    'J 05','J 08','J 17','J 19','J 22','J 25','J 30',
                                                    'MAR-26A','MAR-26B']},
                    {name:'Sale pag 3',
                    icon:require('../assets/images/sale.png'),
                    bg:'#FF27B1',
                    elements:['MVP001','MVP002','MVP003','MVP004','MVP005','MVP006','MVP007','MVP008','MVP009','MVP0010','MVP0011','MVP0012','MVP0013',
                                                'NOV-REF 04',
                                                'S-01','S-02','S-03','S-04','S-05','S-06','S-07','S-08']},
                    {name:'Sale pag 4',
                    icon:require('../assets/images/sale.png'),
                    bg:'#FF27B1',
                    elements:['Short 01','Short 02','Short 03','Short 04','Short 05','Short 06','Short 07','Short 08',
                                                'Short 09','Short 19','Short 20','Short 21','Short 25','Short 26','Short 27','Short 28',
                                                'Short 29','Short 30','Short 31','Short 32','Short 33','Short 37','Short 38','Short 39',
                                                'Short 40','Short 41','Short 42','Short 43','Short 44','Short 45']},
                    {name:'Sale pag 5',
                    icon:require('../assets/images/sale.png'),
                    bg:'#FF27B1',
                    elements:['L-10','L-26A','Poison Ivy 02']}
                ]
            },
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