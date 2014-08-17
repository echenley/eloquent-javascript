function every(arr, check) {
    var isEvery = true;
    arr.forEach(function(val, i, arr) {
        if (!check(val)) isEvery = false;
    });
    return isEvery;
}

function some(arr, check) {
    var isSome = false;
    arr.forEach(function(val, i, arr) {
        if (check(val)) isSome = true;
    });
    return isSome;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
