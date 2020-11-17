//fourth weekly coding challenge - first try, only ran 104 times. need to optimize and remove one for loop.

// function maxAndMin(arr1,arr2) {
//     var minArr = [];
//     for (var i = 0; i < arr1.length; i++) {
//         for (var j = 0; j < arr2.length; j++) {
//                 minArr.push(Math.abs(arr1[i]-arr2[j]))
//             }
//         }
//     console.log(minArr);
//     return [Math.max(...minArr) ,Math.min(...minArr)]
// }

//final try, ran 139 times, but still not optimized as well as it needs to pass. Oh well beat JP!
function maxAndMin(arr1, arr2){
    var fullArray=[...arr1];
    fullArray=fullArray.concat(...arr2);
    fullArray.sort(function(a, b) {
        return a - b;
    });;
    var minDifference=Infinity;
    for (var i=1; i<fullArray.length;i++) {
        if (!((arr1.includes(fullArray[i]) || arr1.includes(fullArray[i-1] )) && (arr2.includes(fullArray[i]) || arr2.includes(fullArray[i-1])))) {
            continue;
        } else if (Math.abs(fullArray[i] - fullArray[i - 1]) < minDifference) {
            minDifference = Math.abs((fullArray[i] - fullArray[i - 1]));
        }
    }
    var array1max = Math.abs(Math.max(...arr1)-Math.min(...arr2))
    var array2max = Math.abs(Math.max(...arr2)-Math.min(...arr1))
    var maxDifference= (array1max>array2max) ? array1max : array2max
    return [maxDifference, minDifference]
}
console.log(maxAndMin([3,10,5],[20,7,15,8]));

