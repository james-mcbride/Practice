const squareList = (arr) => {
    // Only change code below this line
    var filteredArr=arr.filter(array => (array.toFixed(0) == array && array>0));
    var squaredArray=filteredArr.map(array=>array*array)

    return squaredArray;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
