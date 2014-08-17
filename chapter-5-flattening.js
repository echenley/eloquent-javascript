var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr) {
    return arr.reduce(function(current, next) {
        return current.concat(next);
    });
}

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
