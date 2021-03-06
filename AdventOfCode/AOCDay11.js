//--- Day 11: Seating System ---
// Your plane lands with plenty of time to spare. The final leg of your journey is a ferry that goes directly to the tropical island where you can finally start your vacation. As you reach the waiting area to board the ferry, you realize you're so early, nobody else has even arrived yet!
//
// By modeling the process people use to choose (or abandon) their seat in the waiting area, you're pretty sure you can predict the best place to sit. You make a quick map of the seat layout (your puzzle input).
//
// The seat layout fits neatly on a grid. Each position is either floor (.), an empty seat (L), or an occupied seat (#). For example, the initial seat layout might look like this:
//
// L.LL.LL.LL
// LLLLLLL.LL
// L.L.L..L..
// LLLL.LL.LL
// L.LL.LL.LL
// L.LLLLL.LL
// ..L.L.....
// LLLLLLLLLL
// L.LLLLLL.L
// L.LLLLL.LL
// Now, you just need to model the people who will be arriving shortly. Fortunately, people are entirely predictable and always follow a simple set of rules. All decisions are based on the number of occupied seats adjacent to a given seat (one of the eight positions immediately up, down, left, right, or diagonal from the seat). The following rules are applied to every seat simultaneously:
//
// If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
// If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
// Otherwise, the seat's state does not change.
// Floor (.) never changes; seats don't move, and nobody sits on the floor.
//
// After one round of these rules, every seat in the example layout becomes occupied:
//
// #.##.##.##
// #######.##
// #.#.#..#..
// ####.##.##
// #.##.##.##
// #.#####.##
// ..#.#.....
// ##########
// #.######.#
// #.#####.##
// After a second round, the seats with four or more occupied adjacent seats become empty again:
//
// #.LL.L#.##
// #LLLLLL.L#
// L.L.L..L..
// #LLL.LL.L#
// #.LL.LL.LL
// #.LLLL#.##
// ..L.L.....
// #LLLLLLLL#
// #.LLLLLL.L
// #.#LLLL.##
// This process continues for three more rounds:
//
// #.##.L#.##
// #L###LL.L#
// L.#.#..#..
// #L##.##.L#
// #.##.LL.LL
// #.###L#.##
// ..#.#.....
// #L######L#
// #.LL###L.L
// #.#L###.##
// #.#L.L#.##
// #LLL#LL.L#
// L.L.L..#..
// #LLL.##.L#
// #.LL.LL.LL
// #.LL#L#.##
// ..L.L.....
// #L#LLLL#L#
// #.LLLLLL.L
// #.#L#L#.##
// #.#L.L#.##
// #LLL#LL.L#
// L.#.L..#..
// #L##.##.L#
// #.#L.LL.LL
// #.#L#L#.##
// ..L.L.....
// #L#L##L#L#
// #.LLLLLL.L
// #.#L#L#.##
// At this point, something interesting happens: the chaos stabilizes and further applications of these rules cause no seats to change state! Once people stop moving around, you count 37 occupied seats.
//
// Simulate your seating area by applying the seating rules repeatedly until no seats change state. How many seats end up occupied?

//var seatArray=["L.LL.LL.LL","LLLLLLL.LL","L.L.L..L..","LLLL.LL.LL","L.LL.LL.LL","L.LLLLL.LL","..L.L.....","LLLLLLLLLL","L.LLLLLL.L","L.LLLLL.LL"]
var seatArray=["LLLLL.LLLLLLLLL.LLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL","LLLLL.LL.L.LLLL.LLL..LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLLLLLLLLLLLLLLLLLL.L..LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.L.LLLLLLLLLL","LLLLLLLLLL.LLLL.LLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL","LLLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLL.LL.LLLLLL..LLLLLLLLLLLLL.LL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLL","LLLLLLLLLL.LLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLL","LLLLLL.LLL.LLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLL.LL.LLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLL",".LL..LL.L..L.L...LL..L..L.L...LL..L...LL..LLLL.L.L.L.....L....L.LL...L.LL.LL....L...L..L....L....L","LLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLLL","LLLLLLLLLL.LLLL.LLLL.LLL.L.LLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLL.LLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLL","LLLLL.LLLL.LLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL...LLLLLLLLLL.LLLLLLL","LLLLLL.LLLLLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLLLL..LLLL.L.LLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLL.LL","L.L...L.....LLL.L..LL...L......L.LLL........LL..LLL..L.LLL....L..L.L.L..L..L.LL..L.......LL..L.L..","LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","LLLLLLLLL.LLLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LL.LLLL.LLLLLLLLLL.LLLLLLLLL","LLLLLLLLLL.LLLL.LLLL.LLLL.LLLLLLL.LLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLL.L.LLLLLLL.LLLLLLLLLLLL","LLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLL.LLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL..LLLLLL.LLLL.LLLLLLL","LLLLL.LLLL.LLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL","..L..L.L........LL.L.L..LLL........L....LL..LLL.LL....L.......LL.LLLL....L...L.LL........L.L......","LLLLL.L.LL.LLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.L.LLLLLLLL.L","LLLLL.LLLL.LLLL..LLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL",".LLLLLLLLL.LLLL.LLLL..LLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLL.L.L..LLLL.LLLLLLLLLLLLLLLLLLLL","LLLLL.LLLL.LLLL.LLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLL",".....LL.L.LL...L..LL.LL..L...L..L.LL..LL..L.L..........L....L...L.L....L.L.L....LL.........LL..LL.","LLLLL.LLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.L.L.LLL.LLLLLLLLLLLL","LLLLLLLLLL.LLLL.LLLL.LLLLL.LLLLLLLLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLLLLL.LLL.LLL.LLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLLLL.LL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LL.LLLLL..LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LL","LLLLLLLL.LLLLLL.LLLL.LLLLL.LLLLLLL.LLLLLL.LL.LLLLLLLLLLLLLLL.L..LLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLL.LLLLLLLLLLL.LLLLLLLLLLLL","L..LL.L.......L.LL..L.....L..L.L..L.L...L....LLL..........LLL.LL......L.L..L.LL..L....LL..L.......","LLLLL.LLLL.LLLL.LLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL","LLLLL.LL.L.LLL..LLLL.LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLL.","LLLLL.LLLL.LLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL.L.LLLLLLLLLL","LLLLL.LLLL.LLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLL.LL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL","LLLLL.LLLL.L.LL.LLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLL.LLL..LLLLL.LLLLLL..LLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.L.LLLLL.LLLLLLLLLLLLLLLLLLLL","LLLLLLLLLL.LLLL.LLLLLLLLLL.LLLL.L..LLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLL.LLLL.LLLLLLLLLLLLL.LL.LLLLLL.L.LLLLL.LLLLLLLLLLLLLLL..LLLLLLL.LLLLLLLLLLLLLLLLLLLL","...LLLLL..L...L..L..L.............L..L...L..L.L.L..LLL.L.....L.L.L.L.L..L.LL.L..L.L..LLL..LL...LLL","LLLLL.LLLL.LLLL.LLLL.LLLLL.LLL.LLL.LLLLLLLLL.LL.LLLL.LLLL.LLLLLLLLLLL.LLLLLL..LLLLLLL.LLLLLLLLLLLL","LLLLLLLLLL.L.LL.LLLLLL.LLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL..L.LLLL.LLLL.LL.LLLLLLL.LLLLLLLLLLLL",".LLLLLLLLL.LLLL.LLLL.LLLLL.LL.LLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LL.LLLLLLLLL","LLLLL.LLLL.LLLL.LLLL.LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLL","LLLL..LLLLLLLLL.LLLL.LL.LL..LLLLLL.LLLLLLL.L.LLLLLLL.LLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLL.LLLL.LLLLLLL","LLLLLL.LLL.LLLL.LLLL.LLLLL.LLL...LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LL.LLL.LLLLL","LLLLLLLLLLLLLLLLL.LL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL","LLLLLLLLLL..LLL.LLLL.LLLLL.LLLLLLL.LL.LLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL",".LL..L....L..LL....L.......L........LL......L...L..............L.L...L.L....LLLL.....L......LLL..L","LLLLL.LLLL.LLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLL.LLL..LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL","LLLLL.LLLLLLLLL.LLLLLLLLLL.LL.LLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLL.LLLLLLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLLLLLLLLLLLLL.LLLLLLL.LL.LLLLLL.LLLLLL.LLLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL.LLLLLLL.LLLL","LLLLL.LLLL.LLLL.LLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLL","LLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLL..LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLL","...L.L.L.LLL..L......LLL.L..L......L...LLL....L....L..LL.L.L..L..L......L.....LL.L.....L........L.","LL.LLLLL.L.LLLL.LLLL.LLLLL.LLL.LLL.LLLLLLLLL.LLLLLLL.LLLLLLLL..LLLLLL.LLLLLLL.LLLLLLL.L.LLLLLLLLLL","LLLLL.LLLL.LLLLLLLLLLLLLLL.LLLLLLL.L.LLLLLL..LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL","LLLLL.LLL..LLLLLLLLL.L.LLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLL","LLLLL.LLL..LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LL..LLLLLLL.L.LLL.LL.LLLLL.LLLLLLLLLLLLLLLLLLLLLL","LLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLL.LLLLLLL.LLLLLLL.L.LLLLLLLLLL","LLLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL.LL.","LLLLL.LLLL.LLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LL","LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLL..LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLL","...L...L...L...LL...LL.L.L..LL..L....LL...LLLL.L........L......L..L....L.L....L...L.L.L.LLL.L..L.L","LLLLL.L.LL.LLLL.LLLL.LLLLLLLLLLLLLLLL.LLLLLL.LLLL.LL.LL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLLLLLLL.LLLLL.LLLL.LL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL","LLLLLLLLLL.LLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLL","LLLLL.LLLL.LLLL.LLLLLLLLLLLLLL.LLL.LLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL","LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL.LLL","LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","LLLLL.LLLLLLLLL.LL.L.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLL..LLLLLLLLLLLL","LL.L...LL..LL..L..L.L....L...L..L..LL......LL.L.......L..LL........LL.LLLLL.......L.....LL.LL.....","LLLLL.LLLLLLL.L.LLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLL..LLLLLL.LLLLLLLLLLLL.LL.LLLLLLLLLLLL","LLLLL.LLLLLLL.L.LLLL.LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLLLLLLLL.LLLL.L.LLLLL.LLLLLLLLL.LLLLLLL.LLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLL","LLL.L.LLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL.LLLLLLLL.LLL","..L.L....LL.LL.....L.LL......L.LL..LLLLLL......LL.L.LL.LLL...LLLL......L.L.L...LL..L..L..L...LL..L","LLLLL.LLLLLLLLL.LLL..LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLL..LLLLLLLL.LLLLLLLLL.LLLL.LLLLLLL.LLLLLLLL.LLL","LLLL..LLLL.LLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL","LLL.L.LLLL.LLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLL.L.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LL","L.LL..LLLL.L.LLLLLLLLLLLLL.LLLLLLL.LLLLLLLL..LLL.LLL.LLLLLL.LL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LL.L.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLL..LLLLLLL.LLLLLLL.LLLLLLLLLLLL","L....L...L..L.L...L....L......L..LLL..L..LL.LL.L.L....L..L.L.LLL.L.LLLL.........L..LL.LLL......L..","LLLLL.LLLL.LLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL.L","LLLLL.LLL..LLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LL","LLLLL.LLLLLL.LL.LLLL.LLLLL.LLLLLLL.L.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLL.LL.LLLLLLLLLLLL.LLLLLLLLLLLL","LLLLL.LLLL.LLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL","LLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL"]

seatArray=seatArray.map(function(x){
    return x.split("")
})

seatArray=seatArray.map(function(x,i){
    return x.map(function(y){
        if (y==="L"){
            return "#"
        } else{
            return y
        }
    })
})

var totalSeatsTaken=seatArray.reduce(function(sum,x){
    var rowTotal= x.reduce(function(total, y){
        if (y==="#"){
             total++
        }
        return total;
    },0)
    return sum+rowTotal
},0)

function surroundingSeats(arr,row, column){
    var surroundingSeatStatus=[];
    for (var i=0; i<arr.length; i++){
        for (var j=0; j<arr[i].length; j++){
            if (row===j && column==i){
                continue;
            }else if (Math.abs(row-j)<=1 && Math.abs(column-i)<=1){
                surroundingSeatStatus.push(arr[i][j])
            }

        }
    }
    return surroundingSeatStatus

}
function surroundingSeatsFullCount(arr){
    return arr.reduce(function(sum, x){
        if (x==="#"){
            sum++;
        }
        return sum;
    },0)
}

//var seatCount will hold number of held seats before each re-loop
var previousSeatCount=1;
var seatCount=0;
var iterationCounter=0;
var nextSeatArray = JSON.parse(JSON.stringify(seatArray));
while (seatCount!==previousSeatCount){
    previousSeatCount=seatCount
    seatCount=0;

    for (var i=0; i<seatArray.length; i++){
        for (var j=0; j<seatArray[i].length; j++){
            var currentSeatStatus=surroundingSeats(seatArray, j, i)
            var currentSeatCount=surroundingSeatsFullCount(currentSeatStatus);
            if (seatArray[i][j]==="#"){
                seatCount++
            }
            if (iterationCounter%2===0){
                if (seatArray[i][j]==="#"&&currentSeatCount>=4){
                    nextSeatArray[i][j]="L"
                }
            } else if (iterationCounter%2===1){
                if (seatArray[i][j]==="L"&&currentSeatCount===0){
                    nextSeatArray[i][j]="#"
                }
            }
        }
    }
    seatArray = JSON.parse(JSON.stringify(nextSeatArray));
    iterationCounter++;
    console.log("seatcount: "+seatCount)
    console.log("previous seatcount + "+previousSeatCount)
}





