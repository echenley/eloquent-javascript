function deepEqual(item1, item2) {
    function isObject(item) {
        return typeof item === "object" && item !== null;
    }
    
    if (isObject(item1) && isObject(item2)) {
        // check for same number of keys
        if (Object.keys(item1).length !== Object.keys(item2).length) return false;
        // iterate and compare
        for (var prop in item1) {
            if (item1.hasOwnProperty(prop) && item2.hasOwnProperty(prop)) {
                // recursive call for nested objects
                if (!deepEqual(item1[prop], item2[prop])) return false;
            } else if (item1.hasOwnProperty(prop) || item2.hasOwnProperty(prop)) {
                // if only one has the property
                return false;
            }
        }
        return true;
    } else {
        return item1 === item2;
    }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
