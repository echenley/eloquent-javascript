var arrays = [[1, 2, 3], [4, 5], [6]];

var reduced = arrays.reduce(function(current, next) {
    return current.concat(next);
});

console.log(reduced);
// → [1, 2, 3, 4, 5, 6]
