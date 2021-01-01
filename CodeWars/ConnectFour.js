//Connect Four is a game in which two players take turns dropping red or yellow colored discs into a vertically suspended 7 x 6 grid. Discs fall to the bottom of the grid, occupying the next available space.
//
// A player wins by connecting four of their discs horizontally, vertically or diagonally.
//
// Given a multidimensional array representing a Connect Four board, your task is to create a function which can determine who won the game.
//
// Your connectFour function will be passed an array matrix similar to this:
//
// [['-','-','-','-','-','-','-'],
//  ['-','-','-','-','-','-','-'],
//  ['-','-','-','R','R','R','R'],
//  ['-','-','-','Y','Y','R','Y'],
//  ['-','-','-','Y','R','Y','Y'],
//  ['-','-','Y','Y','R','R','R']];
// 'R' represents a red disc
//
// 'Y' represents a yellow disc
//
// '-' represents an unoccupied space
//
// In this example the red player won by making a horizontal line of 4 red discs.
//
// If the red player won, your connectFour function should return 'R'. If the yellow player won, it should return 'Y'. If the board is full and no one won it should return 'draw'. If the game is still in progress it should return 'in progress'.

function connectFour(board) {
    var emptyCounter=0;
    for (let i=0; i< board.length; i++){
        for (let j=0; j<board[i].length; j++){
            let currentColor=board[i][j];

            //now I want to check if any of the eight discs around me match mine.

            if (currentColor==="-"){
                emptyCounter++
            } else{
                let winnerCheck=[]
                if (j<=3){
                    //horizontal check
                    winnerCheck.push([board[i][j],board[i][j+1], board[i][j+2], board[i][j+3]])

                    //upward diagonal check
                    if (i>=3) {
                        winnerCheck.push([board[i][j], board[i - 1][j + 1], board[i - 2][j + 2], board[i - 3][j + 3]])
                    }

                    // //downward diagonal check
                    if (i<=2) {
                        winnerCheck.push([board[i][j], board[i + 1][j + 1], board[i + 2][j + 2], board[i + 3][j + 3]])
                    }
                }
                if (i<=2) {
                    //vertical check
                    winnerCheck.push([board[i][j], board[i+1][j], board[i+2][j], board[i+3][j]])
                }

                //will now loop through the four directional checks, and check to see if any contain four in a row.
                for (var k=0; k<winnerCheck.length; k++){
                    var connectFourCount = winnerCheck[k].reduce(function(total,x){
                        if (x===currentColor){
                            return total+1
                        }
                    },0)
                    if (connectFourCount===4){
                        return currentColor
                    }
                }
            }
        }
    }

    //if no four in a row are found, it will state if game is still in progress or if all slots are full.
    if (emptyCounter>0){
        return "in progress"
    } else{
        return "draw"
    }
}

var board = [ [ '-', '-', '-', 'R', '-', '-', '-' ],
    [ '-', '-', '-', 'R', 'R', 'R', '-' ],
    [ '-', '-', '-', 'Y', 'Y', 'R', '-' ],
    [ '-', '-', 'R', 'Y', 'Y', 'Y', 'R' ],
    [ '-', 'Y', 'R', 'Y', 'Y', 'R', 'Y' ],
    [ 'R', 'Y', 'Y', 'R', 'R', 'Y', 'R' ] ]





console.log(connectFour(board));
