function arrayToList(arr) {
    var len = arr.length;
    function addToList(depth) {
        if (depth >= len) return null;
        return {
            value: arr[depth],
            rest: addToList(depth+1)
        };
    }
    return addToList(0);
}

function listToArray(list) {
    function addToArray(arr, currList) {
        arr.push(currList.value);
        if (!currList.rest) return arr;
        return addToArray(arr, currList.rest);
    }
    return addToArray([], list);
}

function prepend(el, list) {
    return {
        value: el,
        rest: list
    };
}

function nth(list, depth) {
    if (depth) return nth(list.rest, depth-1);
    return list.value;
}

var arrayGuy = [10,20,30];

console.log(arrayToList(arrayGuy));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList(arrayGuy)));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList(arrayGuy), 1));
// → 20
