
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


//the goal is to take an input sentence, and convert it to url version (lowercase, hyphenated).
function urlSlug(title) {
    trimmedTitle =title.trim();
    var array=trimmedTitle.split(/ +/); //regular expression is needed for condition with multiple spaces between words
    var modArray=array.map(index=> index.toLowerCase());
    return modArray.join("-")

}
console.log(urlSlug("Hold-the-door"));


// The every method works with arrays to check if every element passes a particular test.
//     It returns a Boolean value - true if all values meet the criteria, false if not.
//     For example, the following code would check if every element in the numbers array is less than 10:
//
// var numbers = [1, 5, 8, 0, 10, 11];
// numbers.every(function(currentValue) {
//     return currentValue < 10;
// });
// Returns false

function checkPositive(arr) {
    // Only change code below this line
    console.log(arr);
    return arr.every(x => x>0);
    // arr.every(function(x){
    //     console.log(x + "is greater than 0: " + (x>0))
    //     return x>0;
    // })
    // Only change code above this line
}
console.log(checkPositive([1, 2, 3, 4, 5]));

// The some method works with arrays to check if any element passes a particular test.
//     It returns a Boolean value - true if any of the values meet the criteria, false if not.
//     For example, the following code would check if any element in the numbers array is less than 10:
//
// var numbers = [10, 50, 8, 220, 110, 11];
// numbers.some(function(currentValue) {
//     return currentValue < 10;
// });
// Returns true

function checkPositive2(arr) {
    // Only change code below this line
    return arr.some(x=>x>0)

    // Only change code above this line
}
console.log(checkPositive2([1, 2, 3, -4, 5]));


// The arity of a function is the number of arguments it requires. Currying a function means to convert
// a function of N arity into N functions of arity 1.
// In other words, it restructures a function so it takes one argument, then returns another function
// that takes the next argument, and so on.
//
//     Here's an example:
//
// //Un-curried function
// function unCurried(x, y) {
//     return x + y;
// }
//
// //Curried function
// function curried(x) {
//     return function(y) {
//         return x + y;
//     }
// }
// //Alternative using ES6
// const curried = x => y => x + y
//
// curried(1)(2) // Returns 3
// This is useful in your program if you can't supply all the arguments to a function at one time. ' +
// 'You can save each function call into a variable, which will hold the returned function reference that takes ' +
// 'the next argument when it's available.

    function add(x) {
    // Only change code below this line
        return function(y){
            return function(z){
                return x+y+z;
            }
        }
    // Only change code above this line
}
console.log(add(10)(20)(30));

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers ' +
// 'between them. The lowest number will not always come first.
//
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    var total=0;
    if (arr[0]<arr[1]){
        var i = arr[0]
        while (i<= arr[1]){
            total+=i;
            i++;
        }
    } else{
        i = arr[1];
        while (i<= arr[0]){
            total+=i;
            i++;
        }
    }
    return total;

}

console.log(sumAll([1, 4]));

//Compare two arrays and return a new array with any items only found in one of the two given arrays,
   // but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    var arr1Copy=[...arr1];
    var arr2Copy=[...arr2];
    var newArr = arr1Copy.filter(word=>arr2.indexOf(word)===-1);
    var newArray2= arr2Copy.filter(word=>arr1.indexOf(word)===-1);


    return newArr.concat(newArray2);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of the same
// value as these arguments.

function destroyer(...args) {
    var arrCopy=[...args[0]];
    for (var i=1; i<args.length; i++) {
        while (arrCopy.includes(args[i])) {
            arrCopy.splice(arrCopy.indexOf(args[i]), 1);
        }
    }
    return arrCopy;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



function whatIsInAName(collection, source) {
    var arr = [];

    const sourceKeys=Object.keys(source);
    arr=collection.filter(function(object){
        for (var i=0; i<sourceKeys.length; i++) {

            if (!object.hasOwnProperty(sourceKeys[i]) || (object[sourceKeys[i]] !==source[sourceKeys[i]]) ){
                return false;
            }
        }
        return true;
        })



    // Only change code above this line
    return arr;
}

//console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
//console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
//console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))

function spinalCase(str) {
    var arr=str.split(/\s|(?=[A-Z])|-|_/);
    console.log(arr);
    return arr.map(function(x){
        return x.toLowerCase();
    }).join("-")
}

//console.log(spinalCase('ThisIsSpinalTap'));
//console.log(spinalCase("TheAndyGriffith_Show"));
//console.log(spinalCase("AllThe-small Things"));


// Pig Latin is a way of altering English Words. The rules are as follows:
//
//     - If a word begins with a consonant, take the first consonant or
// consonant cluster, move it to the end of the word, and add "ay" to it.
//
// - If a word begins with a vowel, just add "way" at the end.
//
//     Translate the provided string to Pig Latin. Input strings are guaranteed to be
// English words in all lowercase.

function translatePigLatin(str) {
    var testRegex=/[^aeiou]/;
    var vowelTest=/[aeiou]/;
    var arr=str.split("");
    console.log(arr);
    console.log(testRegex.test(arr[0]))
    var i=0;
        if (!vowelTest.test(str)){
            arr.push("ay");
        } else if (testRegex.test(arr[i])) {
            while (testRegex.test(arr[i])) {
                arr.push(arr[0]);
                arr.shift();
            }
            arr.push("ay");
        } else {
            arr.push("way");
        }
    return arr.join("")
}

console.log(translatePigLatin("glove"));
console.log(translatePigLatin("rhythm"));

