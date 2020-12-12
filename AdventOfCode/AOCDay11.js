//--- Day 12: Rain Risk ---
// Your ferry made decent progress toward the island, but the storm came in faster than anyone expected. The ferry needs to take evasive actions!
//
// Unfortunately, the ship's navigation computer seems to be malfunctioning; rather than giving a route directly to safety, it produced extremely circuitous instructions. When the captain uses the PA system to ask if anyone can help, you quickly volunteer.
//
// The navigation instructions (your puzzle input) consists of a sequence of single-character actions paired with integer input values. After staring at them for a few minutes, you work out what they probably mean:
//
// Action N means to move north by the given value.
// Action S means to move south by the given value.
// Action E means to move east by the given value.
// Action W means to move west by the given value.
// Action L means to turn left the given number of degrees.
// Action R means to turn right the given number of degrees.
// Action F means to move forward by the given value in the direction the ship is currently facing.
// The ship starts by facing east. Only the L and R actions change the direction the ship is facing. (That is, if the ship is facing east and the next instruction is N10, the ship would move north 10 units, but would still move east if the following action were F.)
//
// For example:
//
// F10
// N3
// F7
// R90
// F11
// These instructions would be handled as follows:
//
// F10 would move the ship 10 units east (because the ship starts by facing east) to east 10, north 0.
// N3 would move the ship 3 units north to east 10, north 3.
// F7 would move the ship another 7 units east (because the ship is still facing east) to east 17, north 3.
// R90 would cause the ship to turn right by 90 degrees and face south; it remains at east 17, north 3.
// F11 would move the ship 11 units south to east 17, south 8.
// At the end of these instructions, the ship's Manhattan distance (sum of the absolute values of its east/west position and its north/south position) from its starting position is 17 + 8 = 25.
//
// Figure out where the navigation instructions lead. What is the Manhattan distance between that location and the ship's starting position?

//var directionsArray=["F10","N3","F7","R90","F11"];
// var directionsArray=["N3","L90","F63","W5","F46","E3","F22","N2","R90","F68","E4","W3","R90","S3","W4","R180","E1","S5","F90","N4","E3","N1","R90","F74","R90","E2","R90","W1","S3","W4","F5","S1","E5","S1","E4","R90","E5","L90","E4","R90","E2","F57","N1","L90","F59","R90","N1","W3","S2","L90","N3","E1","F56","L180","S3","R90","F88","E3","F59","W1","N2","F52","W4","F69","W2","F10","W1","R180","W1","R90","F14","L90","W1","S5","L90","S3","R90","E3","F35","R90","E3","S3","F45","E2","R90","F86","E1","E4","F35","L180","S1","L90","N2","F71","L180","W3","S4","R90","N5","F93","W4","F74","L180","E2","R180","F11","S5","F28","S3","F93","W2","N4","F26","R90","S4","L90","N1","L90","E2","L90","F3","E4","F43","R90","W4","R90","E3","S1","R180","L90","F62","L90","E5","R90","W3","L180","F40","F20","N2","L270","E1","F14","W3","S5","R90","F3","S2","L90","W5","L270","W1","R90","F11","R90","E3","N1","E3","F19","S5","L180","N4","E2","R180","E5","S2","W4","S3","W1","F4","L90","S2","W4","S5","F21","L180","W4","S3","L90","S4","L90","E1","F28","L180","S3","E2","N3","L180","W3","L90","F99","S2","F63","E2","N3","R90","E3","L90","E5","L90","N4","F39","R180","S3","R90","N3","F7","E3","S2","E2","F98","S1","F87","E1","S3","F49","N1","W2","F4","L270","F91","L90","E1","S4","R180","F43","S3","E3","R90","F46","W2","R90","W5","F13","R180","F52","N4","F28","N3","R90","E5","S3","F82","R90","W3","L90","F33","S5","R90","R90","S5","F24","R90","N4","F89","W1","S4","F80","W3","L270","F11","L90","W2","N3","F18","R90","W2","R90","E1","R270","N3","R180","S4","F36","S3","L90","N2","L90","N2","E1","F48","E5","L180","S3","F81","E4","L90","W3","F31","E5","R90","F66","S4","W3","L90","E3","N4","F85","L90","F58","E5","L90","S1","W3","F79","S4","F60","N2","F42","S3","W3","R90","E1","N1","L90","F15","E4","F98","L90","R90","S4","E1","F19","E2","S4","R90","W2","L180","N3","E2","S3","F34","S4","S4","L180","S1","R90","S4","S1","L90","E3","F28","R90","W1","N2","E5","F48","E4","S1","W2","F95","W2","N2","L90","E2","L90","W3","S2","L270","W4","L90","N4","R90","E4","R270","W4","F6","W2","N1","E1","F19","W2","N1","F54","W2","L90","S1","L90","F80","E1","S5","E5","F80","R90","L270","E4","F93","N4","E5","S1","E1","R90","F63","N3","R90","E1","N2","L90","W5","R90","R270","N1","E4","L180","E4","F19","L90","F27","W2","S2","W5","S1","F54","S4","R90","F85","W2","F13","R90","F73","S5","E2","S2","F12","W5","F23","N1","E1","F38","N2","W2","N3","E2","L270","F7","L90","S3","L90","S3","F86","E5","R90","E1","F52","L180","S4","L180","W4","F41","R90","E3","F70","R270","N3","F32","S2","E5","R180","F20","W3","F54","E2","F34","F61","S5","W1","L90","S5","N5","W2","R180","W2","L90","E5","S4","L90","S4","L180","F84","S1","W1","L90","F92","F46","N1","F22","F24","L90","N5","W4","R270","F79","N1","W1","F68","R90","W5","R180","N5","L90","L180","S1","W4","N1","L180","S1","N4","E4","R90","E1","E4","F58","S4","E5","F49","N1","E2","S4","L90","W2","F67","E2","N5","W1","L90","E5","F82","N5","F91","W5","R90","F17","W5","S2","R90","N2","R90","N5","E4","L90","N1","F26","N3","E3","F19","L270","R90","E3","F21","L180","S4","F50","S4","W2","F56","F49","N2","E3","R180","E4","F5","F17","E2","R90","N3","F96","L180","E4","F64","W5","R90","W5","S5","F92","E5","F10","N1","W1","F94","R90","W4","F22","S1","W4","F38","W1","F17","E3","L90","F3","S1","L90","F27","W4","F31","S5","W4","N2","E5","F44","W2","E4","F54","L180","E5","L90","N1","E5","N4","L180","L270","W3","F80","S2","F49","E4","F46","E2","E5","L270","F12","F63","L90","N2","E5","N3","F85","R270","S3","F71","N4","E5","F36","N5","F23","L90","N2","E3","F93","S5","F1","S2","F29","L90","F17","R180","S4","R90","E2","S3","W5","R90","S3","R90","W4","F62","L180","S4","L90","N2","F46","N3","R180","E1","R90","F73","S5","F12","L180","F47","L90","F79","N4","R270","W3","N1","W1","N3","F63","S2","F50","R90","F30","N3","F7","N4","L90","S4","N1","E5","S5","F9","L90","L90","F7","N1","R90","F52","E3","L90","N3","F50","L90","F83","E3","F74","L90","N1","L90","F4","N1","F28","E4","F9","E4","S2","W4","L270","S1","W4","F23","E1","F52","E1","L180","E2","N5","L90","W5","L90","S1","E3","R90","E4","L90","S1","W2","N4","W1","S4","E2","L90","E5","S2","L180","F91","N5","W4","N5","F14","S5","R90","S5","L90","F78","N2","W3","R90","F17","N5","W1","F53","W2","F33","R90","E2","F15","L90","E5","F77","L90","S1","F33"]
//
// var directionsSubArray=directionsArray.map(function(x){
//     return [x[0], Number(x.slice(1,))]
// })
// var northSouthMovment=0;
// var eastWestMovement=0;
// var currentDirection ="E"
//
// var compassArray=["N", "E", "S", "W"]
//
// function rotateRight(degrees){
//     degrees/=90;
//     var compassArrayIndex=compassArray.indexOf(currentDirection);
//     compassArrayIndex+=degrees;
//     if (compassArrayIndex>3){
//         compassArrayIndex-=4;
//     }
//     currentDirection=compassArray[compassArrayIndex];
// }
//
// function rotateLeft(degrees){
//     degrees/=90;
//     var compassArrayIndex=compassArray.indexOf(currentDirection);
//     compassArrayIndex-=degrees;
//     if (compassArrayIndex<0){
//         compassArrayIndex+=4;
//     }
//     currentDirection=compassArray[compassArrayIndex];
// }
//
// function movement(x){
//     if (x[0]==="N"){
//        return northSouthMovment+=x[1]
//     } else if (x[0]==="S"){
//        return northSouthMovment-=x[1]
//     } else if (x[0]==="E"){
//         return eastWestMovement+=x[1]
//     } else if (x[0]==="W"){
//         return eastWestMovement-=x[1]
//     } else if(x[0]==="F"){
//         return movement([currentDirection,x[1]])
//     } else if(x[0]==="R"){
//         return rotateRight(x[1]);
//     } else if(x[0]==="L"){
//     return rotateLeft(x[1]);
// }
//
// }
// for (var i=0; i<directionsSubArray.length; i++){
//     movement(directionsSubArray[i])
// }
// console.log(Math.abs(northSouthMovment)+Math.abs(eastWestMovement))
//first guess 1678 too high


//--- Part Two ---
// Before you can give the destination to the captain, you realize that the actual action meanings were printed on the back of the instructions the whole time.
//
// Almost all of the actions indicate how to move a waypoint which is relative to the ship's position:
//
// Action N means to move the waypoint north by the given value.
// Action S means to move the waypoint south by the given value.
// Action E means to move the waypoint east by the given value.
// Action W means to move the waypoint west by the given value.
// Action L means to rotate the waypoint around the ship left (counter-clockwise) the given number of degrees.
// Action R means to rotate the waypoint around the ship right (clockwise) the given number of degrees.
// Action F means to move forward to the waypoint a number of times equal to the given value.
// The waypoint starts 10 units east and 1 unit north relative to the ship. The waypoint is relative to the ship; that is, if the ship moves, the waypoint moves with it.
//
// For example, using the same instructions as above:
//
// F10 moves the ship to the waypoint 10 times (a total of 100 units east and 10 units north), leaving the ship at east 100, north 10. The waypoint stays 10 units east and 1 unit north of the ship.
// N3 moves the waypoint 3 units north to 10 units east and 4 units north of the ship. The ship remains at east 100, north 10.
// F7 moves the ship to the waypoint 7 times (a total of 70 units east and 28 units north), leaving the ship at east 170, north 38. The waypoint stays 10 units east and 4 units north of the ship.
// R90 rotates the waypoint around the ship clockwise 90 degrees, moving it to 4 units east and 10 units south of the ship. The ship remains at east 170, north 38.
// F11 moves the ship to the waypoint 11 times (a total of 44 units east and 110 units south), leaving the ship at east 214, south 72. The waypoint stays 4 units east and 10 units south of the ship.
// After these operations, the ship's Manhattan distance from its starting position is 214 + 72 = 286.
//
// Figure out where the navigation instructions actually lead. What is the Manhattan distance between that location and the ship's starting position?

//var directionsArray=["F10","N3","F7","R90","F11"];
var directionsArray=["N3","L90","F63","W5","F46","E3","F22","N2","R90","F68","E4","W3","R90","S3","W4","R180","E1","S5","F90","N4","E3","N1","R90","F74","R90","E2","R90","W1","S3","W4","F5","S1","E5","S1","E4","R90","E5","L90","E4","R90","E2","F57","N1","L90","F59","R90","N1","W3","S2","L90","N3","E1","F56","L180","S3","R90","F88","E3","F59","W1","N2","F52","W4","F69","W2","F10","W1","R180","W1","R90","F14","L90","W1","S5","L90","S3","R90","E3","F35","R90","E3","S3","F45","E2","R90","F86","E1","E4","F35","L180","S1","L90","N2","F71","L180","W3","S4","R90","N5","F93","W4","F74","L180","E2","R180","F11","S5","F28","S3","F93","W2","N4","F26","R90","S4","L90","N1","L90","E2","L90","F3","E4","F43","R90","W4","R90","E3","S1","R180","L90","F62","L90","E5","R90","W3","L180","F40","F20","N2","L270","E1","F14","W3","S5","R90","F3","S2","L90","W5","L270","W1","R90","F11","R90","E3","N1","E3","F19","S5","L180","N4","E2","R180","E5","S2","W4","S3","W1","F4","L90","S2","W4","S5","F21","L180","W4","S3","L90","S4","L90","E1","F28","L180","S3","E2","N3","L180","W3","L90","F99","S2","F63","E2","N3","R90","E3","L90","E5","L90","N4","F39","R180","S3","R90","N3","F7","E3","S2","E2","F98","S1","F87","E1","S3","F49","N1","W2","F4","L270","F91","L90","E1","S4","R180","F43","S3","E3","R90","F46","W2","R90","W5","F13","R180","F52","N4","F28","N3","R90","E5","S3","F82","R90","W3","L90","F33","S5","R90","R90","S5","F24","R90","N4","F89","W1","S4","F80","W3","L270","F11","L90","W2","N3","F18","R90","W2","R90","E1","R270","N3","R180","S4","F36","S3","L90","N2","L90","N2","E1","F48","E5","L180","S3","F81","E4","L90","W3","F31","E5","R90","F66","S4","W3","L90","E3","N4","F85","L90","F58","E5","L90","S1","W3","F79","S4","F60","N2","F42","S3","W3","R90","E1","N1","L90","F15","E4","F98","L90","R90","S4","E1","F19","E2","S4","R90","W2","L180","N3","E2","S3","F34","S4","S4","L180","S1","R90","S4","S1","L90","E3","F28","R90","W1","N2","E5","F48","E4","S1","W2","F95","W2","N2","L90","E2","L90","W3","S2","L270","W4","L90","N4","R90","E4","R270","W4","F6","W2","N1","E1","F19","W2","N1","F54","W2","L90","S1","L90","F80","E1","S5","E5","F80","R90","L270","E4","F93","N4","E5","S1","E1","R90","F63","N3","R90","E1","N2","L90","W5","R90","R270","N1","E4","L180","E4","F19","L90","F27","W2","S2","W5","S1","F54","S4","R90","F85","W2","F13","R90","F73","S5","E2","S2","F12","W5","F23","N1","E1","F38","N2","W2","N3","E2","L270","F7","L90","S3","L90","S3","F86","E5","R90","E1","F52","L180","S4","L180","W4","F41","R90","E3","F70","R270","N3","F32","S2","E5","R180","F20","W3","F54","E2","F34","F61","S5","W1","L90","S5","N5","W2","R180","W2","L90","E5","S4","L90","S4","L180","F84","S1","W1","L90","F92","F46","N1","F22","F24","L90","N5","W4","R270","F79","N1","W1","F68","R90","W5","R180","N5","L90","L180","S1","W4","N1","L180","S1","N4","E4","R90","E1","E4","F58","S4","E5","F49","N1","E2","S4","L90","W2","F67","E2","N5","W1","L90","E5","F82","N5","F91","W5","R90","F17","W5","S2","R90","N2","R90","N5","E4","L90","N1","F26","N3","E3","F19","L270","R90","E3","F21","L180","S4","F50","S4","W2","F56","F49","N2","E3","R180","E4","F5","F17","E2","R90","N3","F96","L180","E4","F64","W5","R90","W5","S5","F92","E5","F10","N1","W1","F94","R90","W4","F22","S1","W4","F38","W1","F17","E3","L90","F3","S1","L90","F27","W4","F31","S5","W4","N2","E5","F44","W2","E4","F54","L180","E5","L90","N1","E5","N4","L180","L270","W3","F80","S2","F49","E4","F46","E2","E5","L270","F12","F63","L90","N2","E5","N3","F85","R270","S3","F71","N4","E5","F36","N5","F23","L90","N2","E3","F93","S5","F1","S2","F29","L90","F17","R180","S4","R90","E2","S3","W5","R90","S3","R90","W4","F62","L180","S4","L90","N2","F46","N3","R180","E1","R90","F73","S5","F12","L180","F47","L90","F79","N4","R270","W3","N1","W1","N3","F63","S2","F50","R90","F30","N3","F7","N4","L90","S4","N1","E5","S5","F9","L90","L90","F7","N1","R90","F52","E3","L90","N3","F50","L90","F83","E3","F74","L90","N1","L90","F4","N1","F28","E4","F9","E4","S2","W4","L270","S1","W4","F23","E1","F52","E1","L180","E2","N5","L90","W5","L90","S1","E3","R90","E4","L90","S1","W2","N4","W1","S4","E2","L90","E5","S2","L180","F91","N5","W4","N5","F14","S5","R90","S5","L90","F78","N2","W3","R90","F17","N5","W1","F53","W2","F33","R90","E2","F15","L90","E5","F77","L90","S1","F33"]
//var directionsArray=["R270", "R90", "L270"]
var directionsSubArray=directionsArray.map(function(x){
    return [x[0], Number(x.slice(1,))]
})
var northSouthMovment=0;
var eastWestMovement=0;
var currentDirection =[10, 1]

var compassIndex=1

function rotateRight(degrees){
   //  degrees/=90;
   // compassIndex+=degrees;
   // if (compassIndex>4){
   //     compassIndex-=4;
   // }
   var originalDirection=[...currentDirection];
   if (compassIndex===1){
       currentDirection[0]=originalDirection[1];
       currentDirection[1]=-originalDirection[0];
   } else if (compassIndex===2){
       currentDirection[0]=originalDirection[1];
       currentDirection[1]=-originalDirection[0];
   } else if (compassIndex===3){
       currentDirection[0]=originalDirection[1];
       currentDirection[1]=-originalDirection[0];
   } else if (compassIndex===4){
       currentDirection[0]=originalDirection[1];
       currentDirection[1]=-originalDirection[0];
   }
}

function rotateLeft(degrees){
    // degrees/=90;
    // compassIndex-=degrees;
    // if (compassIndex<4) {
    //     compassIndex += 4;
    // }
    var originalDirection=[...currentDirection];
    if (compassIndex===1){
        currentDirection[0]=-originalDirection[1];
        currentDirection[1]=originalDirection[0];
    } else if (compassIndex===2){
        currentDirection[0]=-originalDirection[1];
        currentDirection[1]=originalDirection[0];
    } else if (compassIndex===3){
        currentDirection[0]=-originalDirection[1];
        currentDirection[1]=originalDirection[0];
    } else if (compassIndex===4){
        currentDirection[0]=-originalDirection[1];
        currentDirection[1]=originalDirection[0];
    }
}



function movement(x){
    if (x[0]==="N"){
        return currentDirection[1]+=x[1];
    } else if (x[0]==="S"){
        return currentDirection[1]-=x[1]
    } else if (x[0]==="E"){
        return currentDirection[0]+=x[1]
    } else if (x[0]==="W"){
        return currentDirection[0]-=x[1]
    } else if(x[0]==="F"){
        eastWestMovement+=currentDirection[0]*x[1];
        northSouthMovment+=currentDirection[1]*x[1]
    } else if(x[0]==="R"){
        if (x[1]===90){
            return rotateRight(x[1]);
        } else if (x[1]===180){
            currentDirection[0]*=-1;
            currentDirection[1]*=-1;
            return currentDirection
        } else if(x[1]===270){
            return rotateLeft([x[1]])
        } else{
            return currentDirection
        }
    } else if(x[0]==="L"){
        if (x[1]===90){
            return rotateLeft(x[1]);
        } else if (x[1]===180){
            currentDirection[0]*=-1;
            currentDirection[1]*=-1;
            return currentDirection
        } else if(x[1]===270){
            return rotateRight([x[1]])
        } else{
            return currentDirection
        }
    }

}

function setCompassIndex(){
    if (currentDirection[0]>=0 && currentDirection[1]>=0){
        compassIndex=1
    } else if(currentDirection[0]<=0 && currentDirection[1]<=0){
        compassIndex=3
    } else if (currentDirection[0]>=0 && currentDirection[1]<=0){
        compassIndex=2
    } else{
        compassIndex=4
    }
}
for (var i=0; i<directionsSubArray.length; i++){
    setCompassIndex()
    movement(directionsSubArray[i])
}
console.log(Math.abs(northSouthMovment)+Math.abs(eastWestMovement))


//37617 too low
//88503 too high
//56889 too high
//73561 not correct.