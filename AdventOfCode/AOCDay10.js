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
//var adapterStringArray = ["16","10","15","5","1","11","7","19","6","12","4"]
//var adapterStringArray = ["28","33","18","42","31","14","46","20","48","47","24","23","49","45","19","38","39","11","1","32","25","35","8","17","7","9","4","2","34","10","3"]
var adapterStringArray=["77","10","143","46","79","97","54","116","60","91","80","132","20","154","53","14","103","31","65","110","43","38","47","120","112","87","24","95","33","104","73","22","66","137","21","109","118","63","55","124","146","148","84","86","147","125","23","85","117","71","48","136","151","130","83","56","140","9","49","113","131","133","74","37","127","34","32","106","1","78","11","72","40","96","17","64","92","102","123","126","90","105","57","99","27","70","98","111","30","50","67","2","155","5","119","8","39"];
var adapterNumberArray=adapterStringArray.map(function(x){
    return (Number(x))
})
var finalArray=adapterNumberArray.sort(function(a, b){return a-b});
finalArray.unshift(0)
var pathsArray=[[0]];
//need to create a loop to go through each of the finalArray's numbers, and see if it will require a new branch.
for (var i=0; i<finalArray.length; i++){

    //will create a sub-array of indexes to check. If two out of three of these index
    var checkArray=finalArray.slice(i+1, i+20)

    // create loop that will check every sub-array within PathsArray to see if it will require a new branch.
    for (var j=0; j<pathsArray.length; j++) {
        var newPathArray=[...pathsArray[j]]
        //creating a variable for the last number of each sub-array that we will be checking.
        var subArrayLastNumber=pathsArray[j][pathsArray[j].length-1];
        // if one of the next three numbers is either 1&2, 2&3, or 1%&3 higher than the current number being checked,

        var filteredArray=checkArray.filter(function(x){
            if (x-subArrayLastNumber>0 && x-subArrayLastNumber<=3){
                return x
            }
        })

        if (filteredArray.length===3){
            newPathArray.push(filteredArray[2])
            pathsArray.unshift(newPathArray);
            j++
        }
        if (filteredArray.length>=2) {
            newPathArray = [...pathsArray[j]]
            newPathArray.push(filteredArray[1]);
            pathsArray.unshift(newPathArray);
            j++
        }
        pathsArray[j].push(filteredArray[0])

    }
    console.log(pathsArray.length)

}


