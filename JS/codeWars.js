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
// function maxAndMin(arr1, arr2){
//     var fullArray=[...arr1];
//     fullArray=fullArray.concat(...arr2);
//     fullArray.sort(function(a, b) {
//         return a - b;
//     });;
//     var minDifference=Infinity;
//     for (var i=1; i<fullArray.length;i++) {
//         if (!((arr1.includes(fullArray[i]) || arr1.includes(fullArray[i-1] )) && (arr2.includes(fullArray[i]) || arr2.includes(fullArray[i-1])))) {
//             continue;
//         } else if (Math.abs(fullArray[i] - fullArray[i - 1]) < minDifference) {
//             minDifference = Math.abs((fullArray[i] - fullArray[i - 1]));
//         }
//     }
//     var array1max = Math.abs(Math.max(...arr1)-Math.min(...arr2))
//     var array2max = Math.abs(Math.max(...arr2)-Math.min(...arr1))
//     var maxDifference= (array1max>array2max) ? array1max : array2max
//     return [maxDifference, minDifference]
// }
// console.log(maxAndMin([3,10,5],[20,7,15,8]));

//We'll think that a "mirror" section in an array is a group of contiguous elements ( > 1) such that
// somewhere in the array, the same group appears in reverse order. For example, the largest mirror
// section in [1, 2, 3, 8, 9, 3, 2, 1] is length 3 (the ...1, 2, 3... part). Return the length of the largest
// mirror section in the given array.
//
// If the mirror doesn't exist or array is empty, return 0.
//
// Some examples:

//first attempt
//const maxMirror = (array) => {
//     console.log(array);
//     var counter=0;
//     var scoreKeeperArray=[];
//     var forwardIndex=0;
//     var backwardIndex=0;
//
//     for (var i=0; i<array.length; i++){
//         var exitInnerLoop=0;
//         for (var j=array.length-1; j>=0; j--){
//             if (exitInnerLoop>0){
//                 continue;
//             }
//             //console.log("var i = "+ i,"arr[i] = "+ array[i], "var j= "+ j, "array[j]= "+array[j] );
//             if (array[j]===array[i] && i!==j){
//                 if (counter===0) {
//                     counter++;
//                     forwardIndex = i;
//                     backwardIndex = j;
//                     exitInnerLoop++;
//                     //console.log("we have a match!")
//                 } else if(i===forwardIndex+1 && j===backwardIndex-1){
//                     counter++;
//                     forwardIndex=i;
//                     backwardIndex=j;
//                     exitInnerLoop++
//                     //console.log("We have another match!")
//                 } else{
//                     if (forward)
//                     scoreKeeperArray.push(counter);
//                     counter=1;
//                     forwardIndex=i;
//                     backwardIndex=j;
//                     exitInnerLoop++;
//                     //console.log("well, starting over again with a first match")
//                 }
//             } else if (array[j]===array[i] && i===j){
//                 if(array[i-1]===array[i+1]){
//                     counter++;
//                     forwardIndex=i;
//                     backwardIndex=j;
//                     exitInnerLoop++
//                    // console.log("We have a middle match!")
//                 }
//             }
//         }
//     }
//     scoreKeeperArray.push(counter);
//     if (Math.max(...scoreKeeperArray)>1){
//         return Math.max(...scoreKeeperArray);
//     }else{
//         return 0;
//     }
// }

const maxMirror = (array) => {
    console.log(array);
    //counter will count current mirror streak
    var counter=0;
    //scoreKeeperArray will log each mirror streak
    var scoreKeeperArray=[];
    //forwardIndex will hold the index i of the last mirrored element in the outer forward loop
    var forwardIndex=0;
    //backward index will hold the index j of the last mirrored element in the inner backwards loop
    var backwardIndex=0;

    for (var i=0; i<array.length; i++){
        //exitInnerLoop will skip the remainder of the inner loop after a match is found.
        var exitInnerLoop=0;
        for (var j=array.length-1; j>=0; j--){
            //will exit out of current innerLoop if a current mirror is being pursued

            if (counter>0 && exitInnerLoop===0){
                j=backwardIndex-1;
            }
            if (exitInnerLoop>0){
                console.log("We have found a match and are skipping to the next i-value")
                continue;
            }
            console.log("var i = "+ i,"arr[i] = "+ array[i], "var j= "+ j, "array[j]= "+array[j], "forward index = "+ forwardIndex, "backward index = "+backwardIndex, "counter = "+counter );
            //skip loop when i and j land on the same index and you are not in the middle of a mirror streak.
            if (array[j]===array[i] && i===j &&counter==0){
                continue;
            } else if (array[j]===array[i]){
                if (counter===0) {
                    if (array[i+1]===array[j-1]){
                        ++counter;
                        forwardIndex = i;
                        backwardIndex = j;
                        exitInnerLoop++;
                        console.log("we have a match!",  "counter= "+counter)
                    } else{
                        scoreKeeperArray.push(1);
                        counter=0;
                        exitInnerLoop=0;
                        continue;
                    }

                } else if(i===forwardIndex+1 && j===backwardIndex-1){
                    console.log("array[i+1]"+array[i+1], "array[j-1" )
                    if (array[i+1]===array[j-1]) {
                        ++counter;
                        forwardIndex = i;
                        backwardIndex = j;
                        exitInnerLoop++;
                        console.log("We have another match and will keep going!", "counter= "+counter)
                    } else{
                        ++counter;
                        console.log("we have another match, but the buck stops here.", "counter = " +counter)
                        scoreKeeperArray.push(counter);
                        counter=0;
                        exitInnerLoop=0;
                        continue;
                    }
                } else{
                    continue;
                    // scoreKeeperArray.push(counter);
                    // counter=1;
                    // forwardIndex=i;
                    // backwardIndex=j;
                    // exitInnerLoop++;
                    // console.log("well, starting over again with a first match")
                }
            } else{
                counter=0;
                backwardIndex=0;
                forwardIndex=0;
            }

        }
    }
    scoreKeeperArray.push(counter);
    if (Math.max(...scoreKeeperArray)>1){
        return Math.max(...scoreKeeperArray);
    }else{
        return 0;
    }
}
console.log(maxMirror([ 1, 2, 3, 8, 9, 3, 2, 1, 9, 8 ]))