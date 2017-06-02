export function generateCSV(obj){
    var result = '';
    obj.forEach(function(element) {
        result += element.colName+'\n';
        result += 'Referencia,Cantidad\n'
        element.order.forEach(function(item) {
            result += item.ref+','+item.cant+'\n';
        }, this);
        result += '\n';
    }, this);
    console.log(result);

    var FileSaver = require('file-saver');
    var filename = "OrdenFiber.csv";

    var blob = new Blob([result], {
    type: "data:text/csv;charset=utf-8"
    });

     FileSaver.saveAs(blob, filename);
}