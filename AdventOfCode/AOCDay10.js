// //Part 1
//
// var adapterStringArray = ["28","33","18","42","31","14","46","20","48","47","24","23","49","45","19","38","39","11","1","32","25","35","8","17","7","9","4","2","34","10","3"]
// //var adapterStringArray=["77","10","143","46","79","97","54","116","60","91","80","132","20","154","53","14","103","31","65","110","43","38","47","120","112","87","24","95","33","104","73","22","66","137","21","109","118","63","55","124","146","148","84","86","147","125","23","85","117","71","48","136","151","130","83","56","140","9","49","113","131","133","74","37","127","34","32","106","1","78","11","72","40","96","17","64","92","102","123","126","90","105","57","99","27","70","98","111","30","50","67","2","155","5","119","8","39"];
// var adapterNumberArray=adapterStringArray.map(function(x){
//     return (Number(x))
// })
//
// var finalArray=adapterNumberArray.sort(function(a, b){return a-b});
// finalArray.unshift(0)
//
// console.log(finalArray)
// var oneDifference=0;
// var threeDifference=0;
// var totalPaths=1;
//
// for (var i=0; i<finalArray.length; i++){
//     if (finalArray[i]-finalArray[i-1]===1){
//         oneDifference++
//     } else if (finalArray[i]-finalArray[i-1]===3){
//         threeDifference++
//     } else if((finalArray[i]-finalArray[i-1])>3){
//         break;
//     }
//
// }
// console.log(oneDifference*(threeDifference+1))

//part 2

//Part 1

var adapterStringArray = ["28","33","18","42","31","14","46","20","48","47","24","23","49","45","19","38","39","11","1","32","25","35","8","17","7","9","4","2","34","10","3"]
//var adapterStringArray=["77","10","143","46","79","97","54","116","60","91","80","132","20","154","53","14","103","31","65","110","43","38","47","120","112","87","24","95","33","104","73","22","66","137","21","109","118","63","55","124","146","148","84","86","147","125","23","85","117","71","48","136","151","130","83","56","140","9","49","113","131","133","74","37","127","34","32","106","1","78","11","72","40","96","17","64","92","102","123","126","90","105","57","99","27","70","98","111","30","50","67","2","155","5","119","8","39"];
var adapterNumberArray=adapterStringArray.map(function(x){
    return (Number(x))
})
var finalArray=adapterNumberArray.sort(function(a, b){return a-b});
finalArray.unshift(0)
console.log(finalArray)
var pathsArray=[[0]];
//need to create a loop to go through each of the finalArray's numbers, and see if it will require a new branch.
for (var i=1; i<10; i++){
    // create loop that will check each new subArray to see if it will require a new branch
    for (var j=0; j<pathsArray.length; j++) {
        console.log("finalArray[i" + finalArray[i]);
        console.log("pathsArray[j][pathsArray[j].length-1]"+pathsArray[j][pathsArray[j].length-1])
        console.log("finalArray[i+2}"+finalArray[i+2])
        console.log("finalArray[i+3}"+finalArray[i+3])

        if (finalArray[i] - pathsArray[j][pathsArray[j].length-1] === 1 && (finalArray[i+2] - pathsArray[j][pathsArray[j].length-1] === 3)||(finalArray[i+3] - pathsArray[j][pathsArray[j].length-1] === 3)) {

            var newPathArray=[...pathsArray[j]]
            if ((finalArray[i+2] - pathsArray[j][pathsArray[j].length-1] === 3)) {
                newPathArray.push(finalArray[i+2])
                pathsArray.unshift(newPathArray);
            } else if((finalArray[i+3] - pathsArray[j][pathsArray[j].length-1] === 3)){
                newPathArray.push(finalArray[i+3])
                pathsArray.unshift(newPathArray);
            }
            pathsArray[j].push(finalArray[i]);
            i++
        } else if (finalArray[i] - pathsArray[j][pathsArray[j].length-1] === 1){
            pathsArray[j].push(finalArray[i])
        } else if (finalArray[i] - pathsArray[j][pathsArray[j].length-1] === 3){
            pathsArray[j].push(finalArray[i])
        }
    }
    console.log(pathsArray.length)
}

