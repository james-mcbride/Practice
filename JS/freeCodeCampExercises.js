
//.sort() exercise and directions, below are the examples provided by freeCodeCamp

// function ascendingOrder(arr) {
//     return arr.sort(function(a, b) {
//         return a - b;
//     });
// }
// ascendingOrder([1, 5, 2, 3, 4]);
// // Returns [1, 2, 3, 4, 5]
//
// function reverseAlpha(arr) {
//     return arr.sort(function(a, b) {
//         return a === b ? 0 : a < b ? 1 : -1;
//     });
// }
// reverseAlpha(['l', 'h', 'z', 'b', 's']);
// // Returns ['z', 's', 'l', 'h', 'b']

function alphabeticalOrder(arr) {
    // Only change code below this line

    return arr.sort();
    // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//sort will mutate the original array when used, so always concatenate an epty array to the one being sorted.

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Only change code below this line
    var copyArr=[...arr];
    return copyArr.sort();

    // Only change code above this line
}

//console.log(nonMutatingSort(globalArray));
//console.log(globalArray);

//split method can be used to split string into an array
//regular expression can be used within split function to make string split on multiple characters as shown below.
function splitify(str) {
    // Only change code below this line
    return str.split(/\W/)

    // Only change code above this line
}
console.log(splitify("Hello World,I-am code"));




