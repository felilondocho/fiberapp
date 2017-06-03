export function generateCSV(obj){
    var result = '';
    obj.forEach(function(element) {
        result += element.colName+'\n';
        result += 'Referencia,Cantidad\n'
        var total = 0;
        element.order.sort((a,b)=>a.ref-b.ref)
            .forEach(function(item) {
                result += item.ref+','+item.cant+'\n';
                total += parseInt(item.cant);
            }, this);
        result += 'Total,'+total+'\n';
        result += '\n';
    }, this);
    var FileSaver = require('file-saver');
    var filename = "OrdenFiber.csv";
    var blob = new Blob([result], {
        type: "data:text/csv;charset=utf-8"
    });
    FileSaver.saveAs(blob, filename);
}
