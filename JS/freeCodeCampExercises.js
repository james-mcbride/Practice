
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

// function alphabeticalOrder(arr) {
//     // Only change code below this line
//
//     return arr.sort();
//     // Only change code above this line
// }
// alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
//
// //sort will mutate the original array when used, so always concatenate an epty array to the one being sorted.
//
// var globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
//     // Only change code below this line
//     var copyArr=[...arr];
//     return copyArr.sort();
//
//     // Only change code above this line
// }
//
// //console.log(nonMutatingSort(globalArray));
// //console.log(globalArray);
//
// //split method can be used to split string into an array
// //regular expression can be used within split function to make string split on multiple characters as shown below.
// function splitify(str) {
//     // Only change code below this line
//     return str.split(/\W/)
//
//     // Only change code above this line
// }
// console.log(splitify("Hello World,I-am code"));
//
//
// //the goal is to take an input sentence, and convert it to url version (lowercase, hyphenated).
// function urlSlug(title) {
//     trimmedTitle =title.trim();
//     var array=trimmedTitle.split(/ +/); //regular expression is needed for condition with multiple spaces between words
//     var modArray=array.map(index=> index.toLowerCase());
//     return modArray.join("-")
//
// }
// console.log(urlSlug("Hold-the-door"));
//
//
// // The every method works with arrays to check if every element passes a particular test.
// //     It returns a Boolean value - true if all values meet the criteria, false if not.
// //     For example, the following code would check if every element in the numbers array is less than 10:
// //
// // var numbers = [1, 5, 8, 0, 10, 11];
// // numbers.every(function(currentValue) {
// //     return currentValue < 10;
// // });
// // Returns false
//
// function checkPositive(arr) {
//     // Only change code below this line
//     console.log(arr);
//     return arr.every(x => x>0);
//     // arr.every(function(x){
//     //     console.log(x + "is greater than 0: " + (x>0))
//     //     return x>0;
//     // })
//     // Only change code above this line
// }
// console.log(checkPositive([1, 2, 3, 4, 5]));
//
// // The some method works with arrays to check if any element passes a particular test.
// //     It returns a Boolean value - true if any of the values meet the criteria, false if not.
// //     For example, the following code would check if any element in the numbers array is less than 10:
// //
// // var numbers = [10, 50, 8, 220, 110, 11];
// // numbers.some(function(currentValue) {
// //     return currentValue < 10;
// // });
// // Returns true
//
// function checkPositive2(arr) {
//     // Only change code below this line
//     return arr.some(x=>x>0)
//
//     // Only change code above this line
// }
// console.log(checkPositive2([1, 2, 3, -4, 5]));
//
//
// // The arity of a function is the number of arguments it requires. Currying a function means to convert
// // a function of N arity into N functions of arity 1.
// // In other words, it restructures a function so it takes one argument, then returns another function
// // that takes the next argument, and so on.
// //
// //     Here's an example:
// //
// // //Un-curried function
// // function unCurried(x, y) {
// //     return x + y;
// // }
// //
// // //Curried function
// // function curried(x) {
// //     return function(y) {
// //         return x + y;
// //     }
// // }
// // //Alternative using ES6
// // const curried = x => y => x + y
// //
// // curried(1)(2) // Returns 3
// // This is useful in your program if you can't supply all the arguments to a function at one time. ' +
// // 'You can save each function call into a variable, which will hold the returned function reference that takes ' +
// // 'the next argument when it's available.
//
//     function add(x) {
//     // Only change code below this line
//         return function(y){
//             return function(z){
//                 return x+y+z;
//             }
//         }
//     // Only change code above this line
// }
// console.log(add(10)(20)(30));
//
// // We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers ' +
// // 'between them. The lowest number will not always come first.
// //
// // For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
//
// function sumAll(arr) {
//     var total=0;
//     if (arr[0]<arr[1]){
//         var i = arr[0]
//         while (i<= arr[1]){
//             total+=i;
//             i++;
//         }
//     } else{
//         i = arr[1];
//         while (i<= arr[0]){
//             total+=i;
//             i++;
//         }
//     }
//     return total;
//
// }
//
// console.log(sumAll([1, 4]));
//
// //Compare two arrays and return a new array with any items only found in one of the two given arrays,
//    // but not both. In other words, return the symmetric difference of the two arrays.
//
// function diffArray(arr1, arr2) {
//     var arr1Copy=[...arr1];
//     var arr2Copy=[...arr2];
//     var newArr = arr1Copy.filter(word=>arr2.indexOf(word)===-1);
//     var newArray2= arr2Copy.filter(word=>arr1.indexOf(word)===-1);
//
//
//     return newArr.concat(newArray2);
// }
//
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//
// // You will be provided with an initial array (the first argument in the destroyer function),
// // followed by one or more arguments. Remove all elements from the initial array that are of the same
// // value as these arguments.
//
// function destroyer(...args) {
//     var arrCopy=[...args[0]];
//     for (var i=1; i<args.length; i++) {
//         while (arrCopy.includes(args[i])) {
//             arrCopy.splice(arrCopy.indexOf(args[i]), 1);
//         }
//     }
//     return arrCopy;
// }
//
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//
//
//
// function whatIsInAName(collection, source) {
//     var arr = [];
//
//     const sourceKeys=Object.keys(source);
//     arr=collection.filter(function(object){
//         for (var i=0; i<sourceKeys.length; i++) {
//
//             if (!object.hasOwnProperty(sourceKeys[i]) || (object[sourceKeys[i]] !==source[sourceKeys[i]]) ){
//                 return false;
//             }
//         }
//         return true;
//         })
//
//
//
//     // Only change code above this line
//     return arr;
// }
//
// //console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// //console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
// //console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
// //console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))
//
// function spinalCase(str) {
//     var arr=str.split(/\s|(?=[A-Z])|-|_/);
//     console.log(arr);
//     return arr.map(function(x){
//         return x.toLowerCase();
//     }).join("-")
// }
//
// //console.log(spinalCase('ThisIsSpinalTap'));
// //console.log(spinalCase("TheAndyGriffith_Show"));
// //console.log(spinalCase("AllThe-small Things"));
//
//
// // Pig Latin is a way of altering English Words. The rules are as follows:
// //
// //     - If a word begins with a consonant, take the first consonant or
// // consonant cluster, move it to the end of the word, and add "ay" to it.
// //
// // - If a word begins with a vowel, just add "way" at the end.
// //
// //     Translate the provided string to Pig Latin. Input strings are guaranteed to be
// // English words in all lowercase.
//
// function translatePigLatin(str) {
//     var testRegex=/[^aeiou]/;
//     var vowelTest=/[aeiou]/;
//     var arr=str.split("");
//     console.log(arr);
//     console.log(testRegex.test(arr[0]))
//     var i=0;
//         if (!vowelTest.test(str)){
//             arr.push("ay");
//         } else if (testRegex.test(arr[i])) {
//             while (testRegex.test(arr[i])) {
//                 arr.push(arr[0]);
//                 arr.shift();
//             }
//             arr.push("ay");
//         } else {
//             arr.push("way");
//         }
//     return arr.join("")
// }
//
// console.log(translatePigLatin("glove"));
// console.log(translatePigLatin("rhythm"));
// //Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// //
// // First argument is the sentence to perform the search and replace on.
// //
// // Second argument is the word that you will be replacing (before).
// //
// // Third argument is what you will be replacing the second argument with (after).
//
// function myReplace(str, before, after) {
//     var beforeArray=before.split("");
//     var afterArray=after.split("");
//     if (beforeArray[0].toUpperCase()==beforeArray[0]){
//         afterArray[0]=afterArray[0].toUpperCase()
//     } else {
//         afterArray[0]=afterArray[0].toLowerCase()
//     }
//     after=afterArray.join("");
//     return str.replace(before,after)
// }
//
// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));
//
// //The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// //
// // Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// //
// // Return the provided character as the first element in each array.
// //
// // For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// //
// // The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
//
// function pairElement(str) {
//     var arr=str.split("");
//     return arr.map(function(x){
//         if (x==="G"){
//             return ["G","C"];
//         } else if(x==="C"){
//             return ["C","G"];
//         } else if(x==="A"){
//             return ["A","T"];
//         } else{
//             return ["T","A"];
//         }
//     })
// }
//
// console.log(pairElement("GCG"));
//
//
// //Find the missing letter in the passed letter range and return it.
// //
// // If all letters are present in the range, return undefined.
//
// function fearNotLetter(str) {
//     var alphabet="abcdefghijklmnopqrstuvwxyz";
//     var alphabetArray=alphabet.split("");
//     var strArray=str.split("")
//     var startingLetter=alphabetArray.indexOf(strArray[0]);
//     for (var k=0; k<str.length; k++){
//         if (strArray[k]!== alphabetArray[startingLetter]){
//             return alphabetArray[startingLetter]
//         } else{
//             startingLetter++
//         }
//
//     }
//     return undefined;
// }
//
// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("stvwx"));
//
// //Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// //
// // In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// //
// // The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//
// function uniteUnique(...args) {
//     var combinedArray=[];
//     for (var i=0; i<args.length; i++){
//         combinedArray.push(...args[i]);
//     }
//     var finalArray=combinedArray.filter(function(x,i, arr){
//         return arr.indexOf(x)==i;
//     })
//     return finalArray;
// }
//
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
//
// //Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their
// // corresponding HTML entities.
//
// function convertHTML(str) {
//     var arr=str.split("");
//     var converted=arr.map(function(x){
//         if(x=="&"){
//             return "&amp"
//         } else if(x==='"'){
//             return '&quot'
//         } else if (x==="'"){
//             return "&#039"
//         } else if(x==="<"){
//             return "&lt"
//         } else if(x===">"){
//             return "&gt"
//         } else{
//             return x
//         }
//     })
//      return converted.join("")
//     }
//
// console.log(convertHTML("Dolce & Gabbana"));
//
// //Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// //
// // The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum
// // of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// function sumFibs(num) {
//     var sum=2;
//     var arr=[1,1];
//     var i =1;
//     if (num===1){
//         return 1;
//     }
//     if (num===2){
//         return 4;
//     }
//     do{
//         i++;
//         arr[i]=arr[i-1]+arr[i-2]
//     }
//     while (arr[i]<=num){
//
//
//     }
//     console.log(arr);
//
//
//     return arr.reduce(function(sum,x){
//         console.log("sum is: "+sum, "x is: " +x)
//         if(x<=num && x%2!==0){
//             return sum+x;
//         } else{
//             return sum
//         }
//     },0);
// }
//
// console.log(sumFibs(75025));
//
// //A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example,
// // 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is
// // divisible by 1, 2 and 4.
// //
// // Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
//
// function sumPrimes(num) {
//     var array = [];
//     for (var i = 2; i <= num; i++) {
//         array.push(i);
//     }
//     console.log(array);
//     return array.reduce(function (sum,x) {
//         var primeNum=0;
//         console.log("sum=" +sum, "x= " + x)
//
//         for (var i = 2; i < x; i++) {
//             if (x % i === 0) {
//                 primeNum++
//             }
//         }
//         if (primeNum === 0) {
//             return sum+x;
//         } else{
//             return sum;
//         }
//     },0)
// }
//
//
// console.log(sumPrimes(977));
//
// //Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// // as well as by all sequential numbers in the range between these parameters.
// //
// // The range will be an array of two numbers that will not necessarily be in numerical order.
// //
// // For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly
// // divisible by all numbers between 1 and 3. The answer here would be 6.
//
// function smallestCommons(arr) {
//     var arrCopy=[...arr];
//     if (arrCopy[0]>arrCopy[arr.length-1]){
//         arrCopy.reverse();
//     }
//     for (var i=arrCopy[0]; i<=arrCopy[1]; i++){
//          arrCopy.push(i)
//     }
//     arrCopy.splice(0,2);
//     console.log(arrCopy)
//
//     var lowestMultiple=0;
//     var multipleTotal=0;
//     while(multipleTotal<arrCopy.length){
//         lowestMultiple++;
//         multipleTotal=0;
//         for (var i =0; i<arrCopy.length;i++){
//             if (lowestMultiple%arrCopy[i]===0){
//                 multipleTotal++;
//             }
//         }
//     }
//     return lowestMultiple;
//
// }
//
//
// console.log(smallestCommons([2,10]));
//
// //Given the array arr, iterate through and remove each element starting from the first element
// // (the 0 index) until the function func returns true when the iterated element is passed through it.
// //
// // Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an
// // empty array.
//
// function dropElements(arr, func) {
//     var arrCopy= [...arr];
//     for (var i =0; i<arr.length; i++){
//         if (func(arr[i])){
//             break;
//         } else{
//             arrCopy.shift();
//         }
//     }
//     return arrCopy
// }
//
// console.log(dropElements([1, 2, 3], function (n) {
//     return n < 3;
// }));
// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))

// //Flatten a nested array. You must account for varying levels of nesting.
//
// function steamrollArray(arr) {
//     var arrCopy=arr.join();
//     arrCopy=arrCopy.split(",");
//     console.log(arrCopy)
//     var finalArray=[];
//     var testRegex=/,/
//     for (var i=0; i<arrCopy.length; i++){
//         if (arrCopy[i]==="[object Object]"){
//             finalArray.push({})
//         } else if(arrCopy[i]===""){
//             continue;
//         } else if (!testRegex.test(arrCopy[i])){
//             if (isNaN(arrCopy[i])) {
//                 finalArray.push(arrCopy[i])
//             } else{
//                 finalArray.push(Number(arrCopy[i]));
//             }
//         }
//     }
//     return finalArray;
// }

// console.log(steamrollArray([1, [], [3, [[4]]]]));
// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([1, {}, [3, [[4]]]]));

//Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

// function binaryAgent(str) {
//     var binaryArray=str.split(" ");
//     var stringArray=binaryArray.map(function(x){
//         var arr=x.split("");
//         var binaryExponent=7;
//         var sum=0;
//         for (var i=0; i<arr.length; i++){
//             sum+=arr[i]* (2**binaryExponent);
//             binaryExponent--;
//         }
//         return String.fromCharCode(sum);
//     })
//     return stringArray.join("")
// }
//
// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//
// In other words, you are given an array collection of objects. The predicate pre will be an object property and
// you need to return true if its value is truthy. Otherwise, return false.
//
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
//
// Remember, you can access object properties through either dot notation or [] notation.

// function truthCheck(collection, pre) {
//     var total=collection.reduce(function(total,x){
//         if (x[pre]){
//             return total+1;
//         } else{
//             return total;
//         }
//     }, 0);
//     return total===collection.length;
// }
//
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))

//Create a function that sums two arguments together. If only one argument is provided, then return a function
// that expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.


// function addTogether(...args) {
//     console.log(args)
//     if (args.length===2){
//         if (typeof args[0] ==="number" && typeof args[1] ==="number"){
//             return args[0]+args[1];
//         } else{
//             return undefined;
//         }
//     } else{
//         if (typeof args[0]=== "number"){
//             return function(x){
//                 return x +args[0];
//             }
//         } else{
//             return undefined;
//         }
//     }
// }
function addTogether(x,y){
    if (x &&y){
        if (typeof x==="number" &&typeof y==="number"){
            return x+y
        } else{
            return undefined;
        }
    } else{
        if (x==="number"){
            return function(z){
                return z+x;
            }
        } else{
            return undefined;
        }
    }
}
console.log(addTogether(2,3));
console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));











