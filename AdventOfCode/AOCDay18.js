//--- Day 18: Operation Order ---
// As you look out the window and notice a heavily-forested continent slowly appear over the horizon, you are interrupted by the child sitting next to you. They're curious if you could help them with their math homework.
//
// Unfortunately, it seems like this "math" follows different rules than you remember.
//
// The homework (your puzzle input) consists of a series of expressions that consist of addition (+), multiplication (*), and parentheses ((...)). Just like normal math, parentheses indicate that the expression inside must be evaluated before it can be used by the surrounding expression. Addition still finds the sum of the numbers on both sides of the operator, and multiplication still finds the product.
//
// However, the rules of operator precedence have changed. Rather than evaluating multiplication before addition, the operators have the same precedence, and are evaluated left-to-right regardless of the order in which they appear.
//
// For example, the steps to evaluate the expression 1 + 2 * 3 + 4 * 5 + 6 are as follows:
//
// 1 + 2 * 3 + 4 * 5 + 6
//   3   * 3 + 4 * 5 + 6
//       9   + 4 * 5 + 6
//          13   * 5 + 6
//              65   + 6
//                  71
// Parentheses can override this order; for example, here is what happens if parentheses are added to form 1 + (2 * 3) + (4 * (5 + 6)):
//
// 1 + (2 * 3) + (4 * (5 + 6))
// 1 +    6    + (4 * (5 + 6))
//      7      + (4 * (5 + 6))
//      7      + (4 *   11   )
//      7      +     44
//             51
// Here are a few more examples:
//
// 2 * 3 + (4 * 5) becomes 26.
// 5 + (8 * 3 + 9 + 3 * 4 * 3) becomes 437.
// 5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4)) becomes 12240.
// ((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2 becomes 13632.
// Before you can help with the homework, you need to understand it yourself. Evaluate the expression on each line of the homework; what is the sum of the resulting values?

var math = ["5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"];

//this array will track current total, and any sub-totals (those being added up in parenthesis)
var total=[0,0,0,0]

//this variable will track which total/sub-total we are currently working on.
var totalIndex=0;

//function modifyMath (x) {
    var mathArray = math[0].split(" ");
   // console.log(mathArray)
    if (mathArray[0][0]==="("){
        totalIndex++;
        total[1]=Number(mathArray[0].slice(1,));
    } else{
        total[0]=Number(mathArray[0])
    }
    for (var i =2; i<mathArray.length; i=i+2){
        if (isNaN(mathArray[i])===false){
            if (mathArray[i-1]==="+"){
                total[totalIndex]+=Number(mathArray[i])
            } else{
                total[totalIndex]*=Number(mathArray[i])
            }
        } else{
            if (mathArray[i][0]==="("){
                if (mathArray[i][1]==="("){
                    totalIndex++;
                    total[totalIndex]=[Number(mathArray[i].slice(2,))]
                    total[totalIndex].push(mathArray[i-1])e
                } else {
                    totalIndex++;
                    total[totalIndex] = Number(mathArray[i].slice(1,))
                }
            } else {
                if (mathArray[i][mathArray[i].length-2]===")"){
                    if (mathArray[i-1]==="+"){
                        total[totalIndex]+=Number(mathArray[i].slice(0, mathArray[i].length-2))
                    } else{
                        total[totalIndex]*=Number(mathArray[i].slice(0, mathArray[i].length-2))
                    }
                    totalIndex--;
                    total[totalIndex]+=total[totalIndex+1]
                    total[totalIndex+1]=0;
                    totalIndex--;
                    total[totalIndex]+=total[totalIndex+1]
                    total[totalIndex+1]=0;
                } else {
                    if (mathArray[i - 1] === "+") {
                        total[totalIndex] += Number(mathArray[i].slice(0, mathArray[i].length - 1))
                    } else {
                        total[totalIndex] *= Number(mathArray[i].slice(0, mathArray[i].length - 1))
                    }
                    totalIndex--;
                    total[totalIndex] += total[totalIndex + 1]
                    total[totalIndex + 1] = 0;
                }
            }
        }
    }
    console.log(total[0])
//}

////this array will track current total, and any sub-totals (those being added up in parenthesis)
// var total=[0,0,0,0]
//
// //this variable will track which total/sub-total we are currently working on.
// var totalIndex=0;
//
// //function modifyMath (x) {
//     var mathArray = math[0].split(" ");
//    // console.log(mathArray)
//     if (mathArray[0][0]==="("){
//         totalIndex++;
//         total[1]=Number(mathArray[0].slice(1,));
//     } else{
//         total[0]=Number(mathArray[0])
//     }
//     for (var i =2; i<mathArray.length; i=i+2){
//         if (isNaN(mathArray[i])===false){
//             if (mathArray[i-1]==="+"){
//                 total[totalIndex]+=Number(mathArray[i])
//             } else{
//                 total[totalIndex]*=Number(mathArray[i])
//             }
//         } else{
//             if (mathArray[i][0]==="("){
//                 if (mathArray[i][1]==="("){
//                     totalIndex++;
//                     total[totalIndex]=Number(mathArray[i].slice(2,))
//                 } else {
//                     totalIndex++;
//                     total[totalIndex] = Number(mathArray[i].slice(1,))
//                 }
//             } else {
//                 if (mathArray[i][mathArray[i].length-2]===")"){
//                     if (mathArray[i-1]==="+"){
//                         total[totalIndex]+=Number(mathArray[i].slice(0, mathArray[i].length-2))
//                     } else{
//                         total[totalIndex]*=Number(mathArray[i].slice(0, mathArray[i].length-2))
//                     }
//                     totalIndex--;
//                     total[totalIndex]+=total[totalIndex+1]
//                     total[totalIndex+1]=0;
//                     totalIndex--;
//                     total[totalIndex]+=total[totalIndex+1]
//                     total[totalIndex+1]=0;
//                 } else {
//                     if (mathArray[i - 1] === "+") {
//                         total[totalIndex] += Number(mathArray[i].slice(0, mathArray[i].length - 1))
//                     } else {
//                         total[totalIndex] *= Number(mathArray[i].slice(0, mathArray[i].length - 1))
//                     }
//                     totalIndex--;
//                     total[totalIndex] += total[totalIndex + 1]
//                     total[totalIndex + 1] = 0;
//                 }
//             }
//         }
//     }
//     console.log(total[0])
// //}
