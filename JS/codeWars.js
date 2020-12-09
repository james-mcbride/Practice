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

// const maxMirror = (array) => {
//     console.log(array);
//     //counter will count current mirror streak.
//     var counter = 0;
    //scoreKeeperArray will log each mirror streak final counter.
//     var scoreKeeperArray=[];
//     //forwardIndex will hold the index i of the last mirrored element in the outer forward loop
//     var forwardIndex=0;
//     //backward index will hold the index j of the last mirrored element in the inner backwards loop
//     var backwardIndex=0;
//     //will hold the j-value of the beginning of a mirror streak, to allow us to go back to where we left off afterwards
//     var mirrorSequenceInnerLoopStart=0;
//     //will hold the i-value of the beginning of a mirror streak, to allow us to go back to where we left off afterward.
//     var mirrorSequenceOuterloopStart=0;
//
//     for (var i=0; i<array.length; i++){
//         //exitInnerLoop will skip the remainder of the inner loop after a match is found and a mirror streak begins.
//         var exitInnerLoop=0;
//         for (var j=array.length-1; j>=0; j--){
//             //will skip to the mirror streak inner loop index if a streak is going on and you are on the next outer loop index
//             if (counter>0 && exitInnerLoop===0){
//                 j=backwardIndex-1;
//             }
//             //will exit out of current innerLoop if a current mirror streak is being pursued
//             if (exitInnerLoop>0){
//                 console.log("We have found a match and are skipping to the next i-value")
//                 continue;
//             }
//             console.log("var i = "+ i,"arr[i] = "+ array[i], "var j= "+ j, "array[j]= "+array[j], "forward index = "+ forwardIndex, "backward index = "+backwardIndex, "counter = "+counter );
//             //skip loop when i and j land on the same index and you are not in the middle of a mirror streak.
//             if (array[j]===array[i] && i===j && counter==0){
//                 continue;
//             } else if (array[j]===array[i]){
//                 if (counter===0) {
//                     //will start mirror streak if it is longer than 1
//                     if (array[i+1]===array[j-1]){
//                         ++counter;
//                         forwardIndex = i;
//                         backwardIndex = j;
//                         exitInnerLoop++;
//                         console.log("we have a match!",  "counter= "+counter)
//                         mirrorSequenceInnerLoopStart=j;
//                         mirrorSequenceOuterloopStart=i;
//                      //if mirror streak is only one, it will ignore it and keep going.
//                     } else{
//                         scoreKeeperArray.push(1);
//                         counter=0;
//                         exitInnerLoop=0;
//                         continue;
//                     }
//                 //will continue mirror streak if it is on the correct inner and outer loop indexes.
//                 } else if(i===forwardIndex+1 && j===backwardIndex-1){
//                     console.log("array[i+1]= "+array[i+1], "array[j-1= " +array[j-1] )
//                     if (array[i+1]===array[j-1]) {
//                         ++counter;
//                         forwardIndex = i;
//                         backwardIndex = j;
//                         exitInnerLoop++;
//                         console.log("We have another match and will keep going!", "counter= "+counter)
//                     //will register when mirror streak ends, will add value to the scoreKeeperArray.
//                     //will return inner and outer loop to place where mirror streak started to keep going.
//                     } else{
//
//                         ++counter;
//                         console.log("we have another match, but the buck stops here.", "counter = " +counter)
//                         scoreKeeperArray.push(counter);
//                         counter=0;
//                         exitInnerLoop=0;
//                         j=mirrorSequenceInnerLoopStart;
//                         i=mirrorSequenceOuterloopStart
//                         continue;
//                     }
//                 } else{
//                     continue;
//                 }
//             //Will reset all values to zero when no mirror value is found.
//             } else{
//                 counter=0;
//                 backwardIndex=0;
//                 forwardIndex=0;
//             }
//
//         }
//     }
//     scoreKeeperArray.push(counter);
//     //will return the value of the highest streak!
//     if (Math.max(...scoreKeeperArray)>1){
//         return Math.max(...scoreKeeperArray);
//     }else{
//         return 0;
//     }
// }
// console.log(maxMirror([ 7, 7, 8, 10, 5, 4, 10, 10, 6, 6, 10, 5, 10, 1, 10, 3, 9, 3, 2, 4 ]))

//You are going to be given an array of integers. Your job is to take that array and find an
// index N where the sum of the integers to the left of N is equal to the sum of the integers to the
// right of N. If there is no index that would make this happen, return -1.
//     function findEvenIndex(arr) {
//         var firstSum = 0;
//         var secondSum = 0;
//         for (var i = 0; i < arr.length; i++) {
//             var k = arr.length - 1;
//             for (var j = 0; j < arr.length; j++) {
//                 if (j < i) {
//                     firstSum += arr[j];
//                 }
//                 if (k > i) {
//                     secondSum += arr[k]
//                 }
//                 k--;
//                 console.log("var i=" + i, "var j= " + j, "var k = +" + k, firstSum, secondSum)
//             }
//             if (firstSum === secondSum) {
//                 return i;
//             }
//             firstSum=0;
//             secondSum=0;
//         }
//         return -1;
//     }
//     console.log(findEvenIndex([1,2,3,4,3,2,1]));
//     console.log(findEvenIndex([1,100,50,-51,1,1]));

//A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
//
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
//
// His mother looks out of a window 1.5 meters from the ground.
//
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
//
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.


function bouncingBall(h,  bounce,  window) {
    //checking float parameters
    if (h<=0 || bounce <0 || bounce>=1 || window>=h){
        return -1
    }
    //building array to store each bounce's height value
    var bounceHeight=[];
    //building counter variable to log each time ball passes window. Will be at least once since h must be greater than window.
    var bounces =1;
    while(h>bounce){
        h*=bounce;
        bounceHeight.push(h);
        console.log(bounceHeight);
        if (h>window){
            bounces+=2;
        }
    }
    return (bounces)
    // your code here
}

console.log(bouncingBall(30, 0.66, 1.5));



