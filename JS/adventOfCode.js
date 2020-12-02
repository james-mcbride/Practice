//advent of code day one!
//After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.
//
// The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.
//
// To save your vacation, you need to get all fifty stars by December 25th.
//
// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!
//
// Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.
//
// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.
//
// For example, suppose your expense report contained the following:
//
// 1721
// 979
// 366
// 299
// 675
// 1456
// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.
//
// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
var array=[1655,1384,1752,1919,1972,1766,1852,1835,1408,1721,1879,1846,1394,1577,1588,1097,1748,1585,765,1375,1806,1785,1824,1847,1037,1531,1989,1570,1625,1600,1832,1927,1691,1593,1936,1812,570,1391,1883,1592,1875,1185,1903,855,1331,1742,1884,1356,1944,1994,1556,1271,1572,1661,1914,1905,1581,1634,1252,1657,989,1907,1998,1040,1833,1612,1725,1680,1869,1900,1550,1768,1727,1930,1810,1841,734,1779,1774,1825,1446,1259,1552,1310,1885,1689,1929,1959,787,1642,1890,1164,1986,1796,1465,1217,1741,1480,1683,1808,1058,1970,1361,2003,1898,1668,1754,1773,1235,1158,1975,1479,1995,1648,1023,883,1553,1658,1794,1747,1978,1268,1966,1192,1886,1471,1548,1819,1551,1958,1732,1676,1745,1501,1858,1652,1596,473,1314,1814,1409,1877,1344,1735,1635,1273,871,1643,1599,1565,1695,1803,1764,1778,1823,1831,1701,282,1089,1623,1639,1568,1469,1674,1818,1992,1597,1711,1359,1851,1496,1630,1755,1529,1881,1718,1916,1325,1578,1441,1722,1545,1472,1783,1497,1791,1183,1926,1937,1255,1095,1451,1395,1665,1432,1693,1821,1938,1941,2002];
// function sum2020 (arr){
//     for (var i=0; i<arr.length;i++){
//         for (var j=0; j<arr.length; j++){
//             if (i!==j){
//                 if (arr[i]+arr[j]===2020){
//                     console.log(arr[i])
//                     console.log(arr[j])
//                     return arr[i]*arr[j]
//                 }
//             }
//         }
//         console.log(i);
//     }
// }
// console.log(sum2020(array));

//The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.
//
// Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.
//
// In your expense report, what is the product of the three entries that sum to 2020?
function sumThree2020(arr){
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            for (var k = 0; k < arr.length; k++) {
                if (i!==j && j!==k && i!==k){
                    if (arr[i]+arr[j]+arr[k]===2020){
                        return arr[i]*arr[j]*arr[k];
                    }
                }
            }
        }
        console.log(i);
    }


}

console.log(sumThree2020(array));