(function(exports) {
    
    var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    exports.name = function(num) {
        return monthNames[num];
    }
    
    exports.number = function(name) {
        return monthNames.indexOf(name);
    }
    
    return exports;
}(this.month = {}));
    
console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10
