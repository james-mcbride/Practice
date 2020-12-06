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
//var array=[1655,1384,1752,1919,1972,1766,1852,1835,1408,1721,1879,1846,1394,1577,1588,1097,1748,1585,765,1375,1806,1785,1824,1847,1037,1531,1989,1570,1625,1600,1832,1927,1691,1593,1936,1812,570,1391,1883,1592,1875,1185,1903,855,1331,1742,1884,1356,1944,1994,1556,1271,1572,1661,1914,1905,1581,1634,1252,1657,989,1907,1998,1040,1833,1612,1725,1680,1869,1900,1550,1768,1727,1930,1810,1841,734,1779,1774,1825,1446,1259,1552,1310,1885,1689,1929,1959,787,1642,1890,1164,1986,1796,1465,1217,1741,1480,1683,1808,1058,1970,1361,2003,1898,1668,1754,1773,1235,1158,1975,1479,1995,1648,1023,883,1553,1658,1794,1747,1978,1268,1966,1192,1886,1471,1548,1819,1551,1958,1732,1676,1745,1501,1858,1652,1596,473,1314,1814,1409,1877,1344,1735,1635,1273,871,1643,1599,1565,1695,1803,1764,1778,1823,1831,1701,282,1089,1623,1639,1568,1469,1674,1818,1992,1597,1711,1359,1851,1496,1630,1755,1529,1881,1718,1916,1325,1578,1441,1722,1545,1472,1783,1497,1791,1183,1926,1937,1255,1095,1451,1395,1665,1432,1693,1821,1938,1941,2002];
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
// function sumThree2020(arr){
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length; j++) {
//             for (var k = 0; k < arr.length; k++) {
//                 if (i!==j && j!==k && i!==k){
//                     if (arr[i]+arr[j]+arr[k]===2020){
//                         return arr[i]*arr[j]*arr[k];
//                     }
//                 }
//             }
//         }
//         console.log(i);
//     }
//
//
// }
//
//console.log(sumThree2020(array));

var array2=["5-10 b: bhbjlkbbbbbbb","3-4 j: hjvj","8-9 p: pmljtsttp","3-4 t: hvtttqhdjmmnbqwbgfs","4-6 m: mblwtzmvmdjkkmmtsckm","6-9 f: ffffftfff","1-3 g: xggg","3-10 k: rwkhttkxxdpnlkq","3-11 w: wwmwwwwwwwww","5-7 f: fffffffff","1-4 l: lglllbc","2-5 n: njnnn","6-8 t: tcjtltttttdttjttbt","10-20 d: djddddccdbdddddddndd","2-5 z: gzppzhrhzdthnpcr","13-14 p: plvppptppppzppbkpk","11-13 t: jjtjvzfhsrtsmkdhj","11-12 r: rtrdvrrxrrxrzr","2-6 x: dxsvxgvk","7-11 x: hcxxpvxrnmxckkq","12-17 s: sssssssssssrssssss","2-4 v: vvpvvvjvvjvvqbvv","15-18 h: thqhhhgjjqhhnhhznz","8-11 j: jbmgbtmjtbb","2-4 d: xxdfvp","2-7 p: fftlppz","9-13 d: dfddddddsdddds","5-7 d: ddddddz","2-3 h: hfbhhh","1-4 k: rmkvkkkk","16-17 w: wwwhwwwwwwwwwwwwq","5-8 l: gllxllnlqlglrplk","1-7 p: mhnpspp","5-13 f: qhwffbtfzmdffztfjs","2-8 f: fkjhvcbflbwhggtbbcb","2-3 m: bcmldxmdh","6-7 p: ppcpppw","3-10 m: mmmmmmmmmj","4-12 s: ssjssssssssmsss","2-5 j: rmjnjtjjjj","2-3 q: qqdqq","10-15 v: vvvvvvvvvvvvvvdvvvvv","1-4 w: wwwc","4-14 m: mmsmmmvmmmmmqqmmmmm","7-10 d: ddcdddzdddddd","4-5 h: hhhhh","9-17 p: ppppppppqppppppppp","6-7 m: mqtmnms","4-5 s: pssss","2-6 t: tdttttpwttt","7-8 l: llsxsllzlwl","7-10 f: fflffffkqffffm","3-4 f: cdfp","3-4 z: zzzz","6-7 s: sbssdvs","3-4 g: ggdv","11-16 l: lllllnbsqlfzwrfljkh","3-4 k: tqkxxfk","3-17 s: xshmvlmzrjdpnvlssn","1-16 l: lzzvllgktckllmlltl","5-6 l: qlltvl","6-7 p: npvbpcp","4-6 g: gmgvgn","12-13 r: rrnlrrwrtvrrrrcrrrv","11-12 h: hhvxhhhhwjhd","13-14 p: pdppcsjtppppppvtwpj","10-14 l: hljjkjxlfwzlllclzq","18-19 z: zzzzzzzzzzzzzzztzhn","11-12 p: hpspwrkqbnpp","16-18 h: hhhhhhghhhhhhhhwhbh","1-2 p: vpxnqqbgrxprmh","13-19 m: mmmmmmmmmmmmqmmmmqm","1-2 n: ncndsnl","9-10 x: xxxxxxxxxgxxd","9-12 w: wwwwwwwwwwzwwdfgwwp","3-5 h: nqhvhzb","4-5 j: jjjns","10-12 f: ffffffffffff","7-10 v: mgvrwvvsjw","3-5 m: wpmmm","3-10 s: ffsbvjdslsnshqs","9-10 z: mgzzbjzqsz","3-13 d: ddjdddddddddnd","2-4 l: tqkfhpwvvmc","1-3 z: zzzzzn","3-5 l: ctljlckdpnlchrzbc","6-7 v: hqvcvvv","11-13 v: vvvvcvvvvvvvvvv","8-9 t: ztndmlwdb","5-6 v: fdxxrvwpw","1-4 n: xnkb","16-17 v: vvvvvvvvvvvvvvvvnvv","12-14 b: bbbbbxbbbdbgbcb","1-7 w: wwwwwwrwwjtwk","3-10 d: bxnhbhrmgd","4-5 k: kkknkk","2-4 n: bndln","3-10 p: vpkppcppppcplpksp","9-10 d: fhbzbdzqsdxlhnbt","11-13 z: zzmzzzzwzpzzz","12-17 b: hkbcbbhthbrbbdgbl","11-13 c: cpccnxccxbjtm","5-6 n: nnrmnfnsnn","3-8 l: sslkllwljcgl","1-9 p: fpppzzpppppphtrhppp","4-11 h: kskbvrqhdjph","3-9 r: rsrvxnrchtrrrr","4-5 n: nwbln","3-4 g: gjgv","13-14 r: rrrrrrsrtrrrrrrrr","10-15 m: mmmmmmmmmtmmgmm","5-6 k: wkpkkqk","10-11 l: wlbllglkbltblrqlllm","6-7 d: ddddsrddd","17-18 v: vvvvvvvvvvvfvgvvsvv","6-10 n: nngnnnnvnknn","7-8 t: qdztnrnt","5-11 d: dfbdxqbmsdd","1-6 n: znnvqdnx","7-9 k: kkkkkkkkl","5-6 m: mmmszmtmmks","1-5 l: wlllllll","13-14 m: mcmmmmmlmmmmjmmm","1-7 k: kklkjvckb","14-15 d: ddddmddddmddddddd","18-19 k: kfkkkkkkkkkkkkkkkpkk","3-4 z: czjzc","17-18 t: btttttjmltrttxctgt","1-4 c: cccscqcccc","9-14 k: tcwcstszkvhjfmrqpkp","3-8 c: ccccccjcscncp","10-11 d: dddddddddmdd","3-5 m: rgmfmkmd","1-5 k: mfhnk","4-5 x: cwnxftlt","1-3 n: flnqmnnhnn","2-5 f: vwlcnsfd","4-8 c: cccccccbc","10-12 v: dhfvlvbvspjldzch","7-16 f: ffsmffffjffqfpffff","10-13 n: njtrrnnqntjtn","13-17 f: frffcfffrjffffdfpff","5-10 m: mmmmvfmmmmmmmmdm","5-6 v: vvvvvzvvvvv","6-12 r: dqrrcrhrhjsrrr","8-14 z: zzzzzzzlzzzgzsz","5-9 q: qkwzsvwdg","12-13 d: vzjfvddgctfdrr","6-7 f: mgndffb","2-5 x: nxxmx","7-9 c: cmxsccccf","1-7 n: nnnnnnnnnn","6-8 g: gggglfgp","2-13 v: kvwxcrfmpfcfdrgv","5-7 p: tpplpffpccpp","8-12 m: mmmmmmmmmmmxm","9-10 v: vvvvvvvvvcv","4-5 m: mbnmmkknmmwshmkthj","8-9 t: cltntrtpqwtcsftttf","8-16 f: ffffrffpffffffffff","6-8 t: sttcctttdttdwjdndtt","5-9 k: ckkkkvdkvkk","1-3 f: ffczfpgmf","2-4 w: wwlwwd","1-9 d: lddbhdddmtfdmdzdrdhd","16-17 h: xfqlbhhpbnclvztzzzx","2-7 r: rrbntqrrsrkrm","1-4 r: qwrr","12-14 b: tvbbzjbbbbbbbn","5-7 h: hhjvghth","2-3 d: dndrcx","8-9 c: ccccscccpc","5-8 s: srcsszcsp","13-15 g: gggggggglggggglggggg","11-13 b: bbbbbfrbfbbgbb","1-8 b: jbbkqbbbpbbbbbbp","11-14 n: nnnnnnnnnnmnnnn","1-4 g: qsggg","14-15 l: sllslllggllljkdlm","1-5 s: pvssbspdsshsssssrs","7-10 c: ccccccmcpgcc","6-14 m: bcfkpmvmcmmjml","1-3 n: ncnnnnn","12-14 j: bjfjxjjpjrjjjxjjk","10-12 v: vfvvvvvvqjvvvwvwt","6-13 d: stddxdnjrddhwgdhrfjf","5-6 w: qcwhnwwk","2-3 x: mcxfxckptzvw","12-20 b: lvgvbxsxxlvbhfcxbtzr","1-2 d: ddbdqd","5-10 h: mhtnjvhhhs","2-6 z: ztzzdxzzzqbvg","2-7 t: ttjkqztr","3-4 g: bgvggrxrhtlklfj","4-5 q: qqqvq","1-3 c: ccpc","4-6 j: jjrdjj","8-11 c: ncvshccccccsb","1-2 z: rzzqxczxbkpvgkxfzgvz","10-11 f: kffsffffbqf","18-19 v: vmvvvvvvvvvvvvvvvql","14-15 m: mmmmmmmmmnmmmpmm","12-17 z: zzzzzzzzczzdlzzzzz","4-6 g: zggggg","12-16 h: hhhfhhrnnkhhmhhtqvh","3-4 n: hxssbnn","6-9 m: mmmmmmmmdmmm","5-6 n: nnwtgn","6-10 c: lppbvxcmjc","7-8 d: dpddzddvdzdddzfddd","1-5 z: xlzmzzz","6-11 h: hjhhhphhhhf","1-9 h: hhdghtsmmjhhnnwz","6-9 t: ctldsstttstrz","3-4 t: qvktfwnjcjtqtjqtn","6-7 w: wwwwwwsww","11-12 m: nphmmmpmmmcm","8-9 p: ppppdppdp","12-13 l: cllzzglllbqlll","2-7 s: sslssssgbssbsssnss","6-14 j: jvjrxjjrlgvjzmgj","7-8 p: hxpnjvzqxm","2-10 g: xgzfgvdsxr","4-5 t: lttttxdtp","3-12 c: kkpckmphqfcc","4-7 v: rbsjcpvwgtfjpv","2-4 k: swqfkb","5-9 n: knfdnnnnn","12-14 t: zgwthtdtrxvvftst","3-5 v: vlvqtv","15-19 t: fqwkwbtjdqncnsmnqxr","3-8 c: mxccchksq","3-5 v: jtpvr","5-7 k: kbkkkshkkkzkkkt","8-9 z: zzzzzzzzzzz","6-13 k: kkkkkkkkkkkktkkk","5-7 c: mccchbwc","7-12 x: gxxxxlgmztwsxxxgj","3-12 b: ndsbdfdgvxtbmrqcrjhs","1-3 d: qxdtdt","3-7 b: qbbdbgb","12-15 p: ppmplpptppwppppg","7-8 r: rjrrrrrz","8-10 p: cppppgspsxpvp","1-5 w: wwwpwf","4-8 p: nhqlknppmpplb","1-6 c: cvccccrc","7-8 c: cccccctccccccc","4-12 x: jxrxtnxrxxvsx","9-15 g: jfgxnznpwhccdggnm","2-6 h: jphhphlvhgqbwnl","8-9 f: dfftbfxsxxqfdvlfs","1-12 t: dtttttttttttttt","3-7 h: hshhmhh","3-4 w: wwwj","5-6 z: zzzzzp","8-12 m: jmnwmtjmnqvrj","4-5 f: ffffvff","8-10 l: llllflllxll","4-8 x: zcvxtxxkm","13-15 p: pppppkppppbpppsp","3-6 h: hhhhphlhhghkt","2-13 t: tcttttjtttttltttttt","9-10 b: bbbbbbbbvb","7-8 w: fwbwwwqw","6-9 s: jssssssssssssssssw","13-17 p: pppppppppppppppppp","5-7 q: lqxcqqqqcmgtbqjrqmjg","4-17 t: tttpfttttjttttttvt","13-14 c: cccccccccccccj","1-2 p: pxrpqpmpp","3-8 l: rnlxbwwzjdsh","2-7 w: kwkghnsfcp","9-11 m: mmdrktmzmrzhmgdmg","8-11 z: wzxwzzbfznc","5-7 t: rtbtntt","2-3 v: nqvv","2-3 r: krrwb","10-11 q: qqqqlqqvqqqqqq","3-5 r: drrhh","7-9 f: ffffffffhv","4-13 m: rkmmbjnsjzjcmwmwk","15-17 s: jrrvwtnklssqshzpss","12-13 z: fczzpzzzzzzkl","10-12 z: jshkxzzzrdzj","6-13 k: kkkkkkkkkkfkgkkkkkk","14-15 w: wcjjlzkpbspcwcw","2-5 n: npnnznk","5-15 b: cgqlmxzqmvqzbvb","13-15 r: rrrprrrrrrrrlrr","5-6 z: pgfzxw","4-17 x: xlgxwsxjxdxxhqhtcj","11-16 z: zzjhzzlzrzkzwzlzz","7-8 b: tltbbrbbbkb","2-14 k: pnkkqfxkkqkkmkkdkjkk","1-3 f: hjmvjfxvxtgh","6-8 w: xgrvwwswwxg","16-18 v: vwvvvvvvvvkvvmvvvtv","3-10 w: wwwwwwwwwwwww","2-4 w: zcwwqwtdwj","3-7 r: ttrrnwszwqsp","1-7 m: mjjqlgm","12-15 x: xxxxxxxxxxxlxxnxx","3-6 z: zzzzzjz","8-9 s: sssssssvs","5-7 w: wlwswwd","17-18 z: zzzdzzzzzzzzzzzzzx","5-7 j: dchcjfj","2-5 k: cqpkn","8-10 x: xxxnxxxxxtx","1-5 t: tttttttt","5-6 k: lkkphk","11-13 c: scdtdcghdmcttcc","2-5 h: hhhhhh","4-6 r: clrrrr","2-13 s: szsssssssssssssv","3-11 x: krxmwcznvwrlcx","7-8 m: cmmttmbm","3-4 c: pdwccbxwfvhcgrx","5-8 p: ppppvppq","12-19 l: llfllrllmwlmlllllll","11-15 p: psplppzglptmppp","6-14 m: mmvmmgmmmpmmmxm","5-6 j: jjctdzj","9-10 k: xnkzkkpplpkkkkk","10-14 t: crsttgdtzgfqtx","6-7 j: jbkpsjjjsrzf","1-4 v: vsvvvvm","4-5 f: lhbnfgqmbfltqrxzzx","12-13 q: qrjkxcwqqkdjmsxfnqmf","18-19 q: qqpqqxzqjnqqbhqkqqv","16-20 m: nzbmqjwbmmmnhmlmszbf","5-9 k: kkkkxskkkkk","1-2 x: txhxx","9-12 s: sssssssssssr","3-4 s: qsssssh","19-20 f: mfffmpfhhffwrlkffvff","3-15 b: bbpbbbbbbbbbbbbbb","8-9 h: fbcjphblh","6-9 p: ppppbnpppfppw","6-20 n: nsxzcgbcgqvjwfrgtnsr","5-7 s: cssdjdssr","3-4 g: gggwgg","1-6 s: hsspsss","2-5 z: zlgzb","5-8 l: jsljljtlpqhjl","3-10 n: mznwwnvhgbg","2-3 c: cckcc","1-10 r: rrpcbdrrrr","16-17 q: kqjxngwrpqlsqklnq","2-4 n: mnmnn","8-9 n: nnnnnnnsrnl","2-4 r: qrhlrvwpqsvktzcqms","6-9 v: vbqlvvvhqvqpv","2-8 b: kngrzdbb","10-13 d: dddddddddwdddd","2-6 z: czkzhzqdffh","8-19 n: kngnjnftdsrnhsnmznn","8-10 m: rngxfjlmmvtctp","16-17 k: dlkkxxkkkczkkkkkvs","3-17 n: wllsknnzckmmsjmqnxc","11-12 h: csrhwxwdnkhh","3-7 g: ggggggngg","1-14 s: sssssssssssssssdl","8-16 m: mmmmmmmkmmmmmmmpm","8-9 b: kdbqtknpncbbffd","14-15 z: zjzzszcgnzczszg","12-16 g: jdvgrmdczssgtwsq","2-6 n: lwlklnfxlhwdkn","1-5 c: bnfbdzc","14-15 b: bbbbbbbbjbbbbtb","2-5 v: vnvvvvv","14-17 s: ssssszssssssssshmsss","7-9 h: fhmhjkcrhbl","11-15 g: fwhjldbbprhngcjg","9-15 m: mdcbhmmjlmfmmtmcmm","10-13 j: jjjjsjjjjlwjsjjl","1-5 s: dsssssssssssssssss","5-15 r: rrxprrrrrrrzvhrrrrr","5-7 b: svnbkbb","2-4 w: kwwqws","13-20 q: slgmkqmkvlqqwjfdhqdq","8-12 l: llllllljlllkll","9-20 c: cccccccccccccccccccc","5-6 n: wlcnnh","1-4 w: lzwwv","8-9 h: hhphhhhhhhdhh","8-10 t: mnsnktzgrn","11-16 v: bjvcvfrkgkvzvvvxb","11-18 v: vvvvvvvvvvvvvvvvvxvv","11-14 l: llllkllllrlqll","5-11 q: zwlqcqqnnqq","5-11 p: pftpphptptphtskqp","4-12 p: pvpwpzppppppppdk","2-4 h: hhhqhh","6-12 l: jznsrcnxkllz","13-15 j: vdjkhxjptxzfjjm","4-5 t: vzhft","7-10 m: bmrmztmwxmms","5-7 h: hswmtbhcb","13-17 f: vmhffvvfjtffpllftff","11-16 w: wqntqwmzcwwvhwwsxwlh","2-4 r: wrbb","2-10 b: bbbbbbbbbb","1-11 m: mmmmmmmmmmmmmmmmmmhm","13-14 r: rrrrrrrrrrrrrwrrrr","3-6 n: vnsprwznfn","3-4 v: vvvz","2-11 p: ppxjqmffgtp","7-10 s: sslmsssssss","10-11 j: jjlsjjjjjfjjj","4-7 b: fbbhggbcmr","12-13 s: sssssssssssgxs","8-10 l: lpllllhlcnlllxl","3-4 l: ljxlml","2-14 f: ffffffwfffzfcnfffwrf","7-10 h: kwdcfptcchhhhhgz","2-9 j: jjjjjsmjzjqjjj","4-13 w: wwcwwwmrwwwgqwr","3-5 t: ttmtttt","5-13 d: whpdqwpvkzsxdmgtnz","13-14 x: xxtbcxxxwxxxxx","1-7 t: ttttttdthtttttttt","6-15 x: pxfnxbnmpxgmwzxkv","2-11 m: kmcmjlddbwm","9-14 d: dddddddddddddldd","6-9 x: nxvkxvxxx","18-19 x: xsxxxrdxbkjmbdvfrrx","12-13 j: jnjjjgjjqrjjs","14-16 r: rrrrrmrrrrqrrxrvrvr","5-9 h: hhvvhmzjn","5-6 w: wwgfzt","10-13 v: vvvvvsvvvtvvxvvrvvv","2-4 h: hwhh","4-8 s: ssssssshss","5-12 n: nnnnnnnnnnncn","2-3 x: bxxmxcdzlj","14-16 x: chpxcprsxhxvkxzc","7-9 b: bbbbbbbbbb","10-11 x: xxskpxtfhxd","5-7 w: zwwwrww","1-8 l: splxkhxw","8-9 q: llcbqltqh","2-3 k: kkcckxm","6-11 c: ccccsccccccccccccccc","6-14 k: xkbbnkknkttqpb","12-16 d: dcddddrddnddvprsd","1-3 p: bpplj","4-6 n: nntbnpn","14-15 k: nwcckxptkgrrbkd","12-14 d: dddddddddddddxd","1-11 v: vvvvjvvvvvvvvv","4-6 g: gtgbfg","5-8 h: hhhhdhhhhhhh","13-15 n: nwnnpnftnbnknqn","3-4 m: mpfqmj","3-6 t: ttmtct","2-4 s: sssss","10-16 v: vvszvvgvvvvvvvvcv","11-13 t: stvdjtwjzftrtprpb","5-6 p: pppptp","12-15 d: ddtdjdddxdhxzdcd","12-16 b: bbbbbbbbbbbxbbbbb","12-14 n: qnnnnnnnnzlnnnn","9-11 v: sqkrmzjqvvv","2-5 d: cdpfdtjdkn","7-8 p: pppptppppp","2-4 s: ssszsss","13-15 d: cpdwdbvqxcffdrd","4-5 j: hbjjpppm","5-8 g: gvgmgjgrzz","6-7 s: sssssqn","1-11 p: tpstkbpmtbpg","17-18 m: zmmmsrsrgfpggmmmlgk","2-3 f: ffkhf","2-5 f: ftfff","2-10 m: gqxlmphwcmfc","6-8 v: bvgwwbvlvvvlrvv","13-14 n: nnnnnnnnnnnnnxn","2-7 f: ffffffff","9-10 x: xxxxxxxxxd","1-7 s: mssssdsksssdsssz","11-15 t: jtttttltmttgttthz","5-12 j: jqjjjjfndzjdjjjjjjjn","9-13 r: rrrrrrrrrrrrj","5-9 x: xxjxpcqxxcxznn","2-9 c: psdddswdcpd","4-10 f: fsffxffffmr","7-12 j: jxvjjjrjjhjfc","4-5 q: bqqhj","1-4 f: fwbclqb","1-2 k: skqk","9-11 b: bbbzbkbbhbb","1-2 g: nggv","3-7 m: mmfmmmpm","2-3 m: vpmr","7-10 d: ddddddjddm","2-15 t: hgvsftrbzglvmpwhsmp","1-5 t: qtttt","11-13 p: pppppppppppphp","4-5 p: cvqpzvpppfh","2-3 f: bbftxfnmb","2-3 r: rlrr","1-4 m: mvms","3-14 m: gfmprfxpvzhmhm","2-8 j: jdsjjlfl","8-12 k: kkkkskkvkkkkk","1-7 p: hpfpmpwp","5-8 x: xxxxxxxhxxxxxx","3-10 p: mmctgfppppxplpplppj","3-4 p: zfmpjbhwppk","13-16 z: zzzzzzzzzzzzvzzzz","1-3 d: djddd","2-7 p: nmplwdp","7-9 l: lglllllll","7-8 p: ptvsnpcp","9-10 m: rjnmxthbmg","5-6 j: jjccjv","6-8 t: tvcztdttxzkp","8-12 p: kmrpqdnppskj","6-8 j: lsjkhjjhbgj","11-12 x: hxxxlxmxxxtrxxxxk","3-6 p: pppppcgtpxpppplp","8-10 s: nphsvswsrssxmdh","10-11 p: pppcpptppkp","14-15 z: zzzzzzzzzzzzzcz","14-18 f: mffngzbffffznctfff","6-7 t: tttthhtttq","12-19 l: shqlqnkzwpplqjrwjcv","1-4 k: khkx","9-11 d: ddddddddpdrdddd","3-4 s: mvsssc","6-7 h: hhhhhhphh","8-14 v: vvrvsvwrwmpvlv","2-6 z: zxjvsn","9-12 f: ffffffffpfftf","2-5 s: lssmjh","11-14 k: kkwkkfkbpnjkbkk","4-15 x: ppcxmjmxvbrkxlqcthx","1-2 g: bpggz","3-5 x: vxjxxxnztm","7-8 r: rrrrrrrhr","8-13 n: nnblnxnnrmnnq","1-4 w: wwtxwwwjwwwwdwl","1-10 d: cddddddwfhdrdddqnd","1-8 j: jxmjjjrv","4-7 x: xfxxxxn","16-18 v: vvvvvvvvvvvvvvvvvvv","3-5 h: hhhhhh","9-11 z: zzztvzzhgzr","3-5 w: fcjwwjwwv","6-7 z: hszgzsl","3-9 l: fldswlflrll","10-11 n: fqbxpfncbln","7-14 m: jftmkxqhrmmcqmk","8-9 h: hhqqhkhmh","3-5 l: lnlqlhdjtd","4-11 x: lqjxqzlfsfhzjqqnttp","4-6 c: fccctcc","8-11 c: cccccccccckcr","2-3 k: jkxtkjhnkksksrrzhfkk","7-9 m: nmmmmmmkmrmmdjjms","5-12 m: mmmmprmsmbmmmm","1-2 l: lllll","3-7 m: gmmtchm","11-16 t: vddbsztmpttvsktp","9-13 f: ffffffffffffffffff","3-8 j: hjhldbcznnsx","5-7 v: vrfpvswbmbvvzv","6-15 z: bhlvbzvnlntzzzz","4-6 x: xzjrxcx","3-4 q: qqsw","5-6 r: rrrlrrrrrr","1-7 b: qbbbbbxbbb","6-7 b: bfbbjdd","4-11 f: lfrffpfgzqs","3-5 c: qccncmjgrczzmcz","9-15 x: vxxxxxnxxxxxxxxrxxxj","1-2 s: ssnls","5-9 z: zzpzzzzzszzzzzz","5-16 z: pzgzxgpwqmzwwlzz","6-7 c: ccqxccn","5-6 b: ngmbbs","2-19 d: cdmnqfjfxgtdwlrnhcd","9-12 p: thcvkgpcxptpxpp","3-6 g: sbstjvnhfgdr","1-18 f: fsffffffffffffffffff","2-16 f: rfxzxrjpbvfzcftf","13-14 v: rvxvvnsfcvvvrvvvqg","4-10 d: tqlddkdpdv","12-13 r: rrrrrrrrhrwrjdrlnr","5-6 x: xxvxgnxxxx","3-4 d: sddd","5-11 p: jphgprgjjpp","1-7 f: fjgfdvb","3-8 x: rpxvndgxx","1-17 b: jbbrxbbbtxjbrpbbb","7-10 h: bhhbzmdrkhhvhjx","1-5 v: fzdgv","5-7 f: vfdffftffffhflw","2-20 c: mcbhcvvxwxfvxqlgxpdc","5-8 w: vwktjwdsccgj","3-4 d: nntd","1-7 n: nnncmhnkgqn","2-6 r: bdvvbrr","1-15 b: bbbzwbbbbkbgkbp","3-8 f: slfvsmvftsstff","3-4 z: pvzzggdnhwzjzgp","8-9 n: nnnnvnnfn","4-10 n: nnnlnngnncnn","8-10 l: vktfwjrmslbh","3-6 n: nflmqn","4-5 s: svggkxz","3-4 w: wwjt","5-6 t: nbbbdt","3-8 d: jrjkdghxqwq","7-8 q: qqqqqqgq","7-8 k: qxgnkvckpkchqnmxb","1-5 v: vvvvvv","6-16 s: stmjwhvrrkfgrsxs","3-4 s: sdrswqnsjrnhrlds","12-15 r: rgdrrrrrrrrrrrgtg","12-14 g: gggggggggggjgggggggg","1-7 h: phhhhhdnhj","3-4 v: tknvv","10-11 j: jjbvjjxjjjjj","2-5 c: bcbff","7-11 r: rrrrrrxrrrdrrrrr","13-16 p: ppppppppppppdppr","14-16 t: tttttttvtttttttwttt","3-6 c: hclhccxhmxtjcbmjc","1-2 x: gxxxxx","2-3 w: wrwcqt","2-6 g: gmblggxgg","1-4 l: lllxpkml","1-2 d: mdddddd","4-8 q: qqqxqqqqq","3-4 v: mwvfvlqvv","3-6 w: wswwgc","2-4 d: bdfd","17-19 l: llllsldlbllllnlllzr","10-18 j: tjhgvshtbqjtcfcvlr","4-9 t: ttttttttttfttttttt","8-9 g: ngsggnbgqgtgglnjgcg","9-10 d: dddhdddvgbdbd","8-9 g: gtggvpgmq","11-15 j: jjqkjsmjkgfvjns","6-9 t: tqthttvtnttttttg","1-7 j: sjjjjjjjjjjjjjj","15-16 g: gggggggzgghgggqd","10-16 n: nnnnnjnnngnnnnnnnn","1-6 p: pppppppp","1-2 k: kdkk","1-2 b: bjvzqrgbhmgm","2-4 x: xvxxx","1-5 j: zjjjjjjj","2-5 f: lfnpwfz","1-12 j: hjjjjjjjjjjj","7-10 l: lllllqhlllllmmlpllll","11-12 m: mmmnmnmmmmmmmm","6-8 z: dzzzzfzzpz","14-15 c: cshjrbzhmmpckcwf","3-5 q: qqqqz","11-12 z: zzzzdzczzkprvztzfrdd","4-5 t: ttstbt","14-15 k: kkkkkkqkkkkkksr","1-12 j: jjjjjjjjjjjwgcjzj","2-3 k: rhkhkkg","1-16 z: zrzzzzkkhzzflzzzlzzq","12-13 h: hhhhhhhhhthgjhh","1-5 j: qqjjczwttz","11-12 h: hhhhhhhhhhmk","1-3 p: qpspbpjfq","1-3 f: ffzf","11-16 f: qdfmgnfnfvffflfhff","12-14 b: btwsgnvvljknbbdf","7-15 b: wdrgltbgdqscbhh","3-13 j: vwjpjjwjtcpjk","2-4 l: clxdsfqfdvkfhcgdswl","9-13 m: mmmmmmgmmpnmmmzmmk","4-5 x: hxxxx","1-4 b: bbbb","4-5 r: rrrrwfrv","6-9 n: nnnnnnnnsn","4-7 m: mvmmmmdmm","4-12 t: ttttttjtttttjttttt","1-3 c: bccc","2-3 m: mmcxbw","1-4 r: rrrrrr","8-10 l: lllllllplllllllll","18-19 h: hbhjdhhnnhfshkhhhgh","6-8 h: hfhwhwph","1-4 z: cfmz","2-3 m: vtmmznmvmrs","7-8 l: llhlwzlmjll","1-2 m: mmskncxdc","1-4 d: ndddd","1-3 m: mmgmmm","14-15 r: nzrgmcrrgmrxlbr","2-13 h: htkhhhhhhqhhlhhhkh","2-4 w: wkwsw","3-4 w: wmwr","2-9 v: kdzkhvnkv","8-9 t: wltttttkbktftk","9-14 n: vnhdtndfnsncpnf","3-10 n: jfnwcngtdz","13-15 j: nqzdlvnvvgnmhjj","1-12 q: qqqqqqqqqqqqq","10-12 c: cccdcmscbhcqccc","1-3 w: bzwwgg","2-14 d: pdkrpmxxzgcvqkzvvzqd","6-11 t: tfqvhtbmdztsnwnt","5-9 l: xllmllvjdds","6-14 h: pkhthnhxhhhjnscb","5-7 m: mmmmrmmm","8-10 x: xxxxxxxwxkxxx","4-5 k: lmkkkkkskg","1-2 d: dtdd","5-7 f: frfwsfr","4-5 w: rclww","4-5 g: gkkmtnlhbkgb","4-6 q: qqqfqqq","3-4 d: ddjb","11-13 n: nnnnnnnnnnnnnnnn","4-6 f: jvkxcffdgd","3-4 g: ktsgxzn","14-15 g: gggggggggggggggg","2-3 n: nqnnn","2-12 k: kbkpppkrkkjkkkk","5-7 c: ccccbcccc","9-10 l: plmrklsclx","4-11 m: mmmtmmmmmmqlm","6-7 b: bbbbbbq","7-9 g: kcgggklzg","3-6 p: ptxpppppppppppp","2-4 s: swsss","7-10 c: cccccccccpcc","5-7 d: dbddlddddcsdd","6-7 k: kkkkkkk","2-4 h: hwnvcj","1-9 g: nggggggggg","9-19 b: dzzpzvgwbdbmthmzfbhb","1-6 v: vrclmqxpvkhbvrfdmc","4-7 k: sgwktwtttmktrfjzn","13-16 x: whxxxxxxxxxxxxxsxx","4-9 z: zzzpzzzzzz","7-9 t: mwvtbhtxt","2-3 j: jfjdj","3-9 t: nrkffvgmtdstkkhtfpn","3-4 g: ggggxxdjsgrbf","4-10 x: kgbxbqnqmc","7-10 t: ztndqctmtttthxkwtlm","8-12 h: fbvccdshdvhhh","9-12 f: ffffsfffffjd","1-3 q: qkqqrvmmkh","13-14 r: rrrqrrrrrrrrrrrrrrr","2-3 g: bmdgkz","6-7 k: kkkkkkjk","4-9 q: qgzrflqqqd","12-13 s: brsswsfsvsfssps","5-9 q: drjcqnmwqbncmqqvcjgh","7-9 x: xxpxxgzxxxnx","2-13 s: ssdsssssjshsjsjswn","1-11 m: fmmmmmmmmsmmmh","3-8 f: zffrqqhflhvl","4-11 l: lqfwlxlllnl","12-16 k: kkkkkkkkkkkdkkkgkkkk","1-5 s: sssslss","3-13 n: ntnnnnpnnlndsnn","13-16 f: nzpfvhfrxpxjfmcfff","2-3 f: ffbf","3-7 r: nxrrrqrqnrrlbj","1-10 p: mppptppppcpppppppd","9-11 l: ftmflbbljjf","6-8 r: rrrrrlrrrr","10-16 k: zqknmwppdtckmpgk","10-13 t: dpqxttttttttb","2-4 f: ftff","9-14 k: krkkkqkkkkdkkrn","12-17 b: mbxbczbbbbdbbbbbpbnb","8-9 j: bjjjjjjjqjvxjfjjjjjj","1-3 s: lspsh","2-7 p: zpqlvwpmdp","6-8 q: qqqqqqqtqq","15-16 z: cxzmdcdzckrhzxzz","13-17 v: vvvvvvvvvvvvvvvvzv","6-8 c: ctcccccc","6-7 v: xjzvvfvjmnrvtvncjmdv","3-8 m: sqmfbqlm","3-9 p: bpqpxpfpzqpjjgv","8-10 n: clxnnnxvnnxnnnnnn","8-9 m: mmmmmmmmm","2-6 s: scssss","9-10 t: xtttttttftttt","3-5 c: rksck","16-17 h: ldhchxlhphlnmhvhh","3-6 b: bnbvlb","4-5 j: mjjjx","2-4 j: sklkmtrjpgprqdn","3-8 l: nllnlnll","1-6 g: jgbgpt","14-17 d: cqddcfsjddddxlcdd","4-6 h: qcqhwc","6-14 j: fzrkcjrqjssjdjjjjj","3-4 j: jdfj","1-3 k: fkpkkkck","11-12 w: wwwwbwwwwwfg","6-7 g: wngnhsg","4-13 d: bddjdddddddddpdddddd","7-8 k: kmkfkkkp","5-9 b: btmlgzbbdb","4-7 j: dxlzwsjdbjcqjsnwq","9-13 p: pppppmfhpptppp","16-17 v: vvvvvvvvvvvvvvvxn","1-7 m: mmmmmmtmm","1-8 v: vvvvvvvbv","9-15 t: tttttttttttttttt","15-17 r: rwrqrrhdrtvrfszrj","4-9 m: mfddknmcmqhglr","7-10 k: kkkkkkkkpkklkk","18-19 c: hpqwwkgtqbrcjxptwnc","2-3 p: xwppdp","5-11 r: vnrhrmknrrr","10-15 f: ffmfffffcfftfdfff","10-13 m: mmtsmmmmmmmmhmm","4-16 j: pjlplfvtgrjhvcdjjdmb","8-14 v: kxrjvdbbmxvrzdp","6-7 w: wwwwwwgwww","9-16 f: hhkvlfrvfvpvlzvcfsg","1-3 k: kkbk","9-12 d: ddddddddtdddd","13-16 w: wwwgwwwwwwwxwwwwwww","4-5 t: swtttpkkpwdt","5-7 z: zzfzzzp","1-5 g: grghg","3-4 n: wjsnnnwsxrx","8-10 x: xxxxxxpqxc","4-13 t: tttbtttttttttttt","1-3 w: wswwn","1-6 d: dddtddddd","12-13 x: xxflxxpxxxxxwgrxxx","1-2 m: mxghmm","6-11 j: jjjjjjjjjjxj","1-3 n: nnfnnnnnnnn","7-11 w: wxwwwwpwwwww","1-2 q: nqmqfxql","9-12 m: mmmmvmnmfmmp","5-7 m: mmmmmmms","3-4 s: ssqsssssssj","6-9 c: ccvcmnccccl","1-17 b: gbbbbbbbbbbbbbbbqbb","7-10 q: vqqqqxqqql","9-12 v: vzvvnvtblzrq","7-8 q: qqqqqqqs","4-8 q: qtzqcgbqwq","7-9 c: ccncdmxsccchcxxj","3-6 q: qqqjlqqxcqdkzqqj","3-4 k: qckk","10-12 c: cccccccccccc","10-18 g: gggggggggggggbgkggn","2-3 w: wwww","1-4 k: kkglkqkgzbn","6-7 l: lklksztlzllllp","8-10 x: xxxxltxwxnxdvcg","1-5 w: tvmjw","3-9 z: hvqqhmpzz","6-8 x: qzxxdxnxmlgp","13-17 s: ssssqsssssssjssssxs","2-8 f: qfhnhfzc","3-4 v: vvbv","4-6 j: jjjmjj","3-4 q: lqqd","12-14 j: jjjjmjjjjjjcjjjj","6-9 c: whjbsclch","14-15 j: jgjjcjkljjmfpjqjjjk","2-3 z: jbzt","12-13 b: bbbbbbbbbbbqj","3-9 s: jhcsgnsscs","6-8 h: hhhlhlhf","3-4 j: jmjjcwjpj","10-11 c: cccccccccdcccccc","11-12 w: wswwwwwwvwww","17-18 k: rmzbkcsxrmdwkksstk","7-8 h: hhhhhthh","1-2 n: nnqcqlxdsc","4-11 l: llllllllldlql","14-20 h: hhhhhhhhhhhhhhhhhhhh","4-8 r: bhwrrrrrrgrwcmr","5-16 m: lmdbtwhnzszltgjmhfcb","4-12 m: mmmvmmmmmmmmm","1-5 t: qtwnztcftsqjh","4-12 s: ssdszsssssvslx","16-18 w: wwwwwwwwwwwwwwwrwq","7-8 t: ttttttttt","8-10 r: mxrrrrrrrc","10-12 g: gggggtpghggsgvcdpjlg","7-13 q: qlqqpqdqqqqqnqqqq","7-9 z: zzzzzgzzd","13-16 c: ccccccccccccxccb","4-9 l: jbsssqpjl","7-12 s: sslsssdksnsssqmrsc","9-14 w: cwqsssmkbgwmqzrw","1-5 v: vljdvzqvgjhcgbn","4-7 w: nxqxgww","7-9 w: wwwtwlwqxwww","14-18 q: qwncqqqjmmlzqqqqnq","2-8 g: ggggggggg","5-6 g: ggpgkgg","12-13 r: rrrrrrrrrrrph","14-15 c: cswccccccvccmcs","11-15 p: jppxbqzcdzppxjv","6-9 f: fffnfffdcc","7-10 x: xnrdxxtwxx","2-6 s: gdshsbcsssss","5-9 d: dwtcdddffsdzdzcvbdd","2-3 l: kqlfjqj","7-9 s: tmsklsfsp","2-4 c: lkbck","2-9 x: jtxslmdpxpkqfjjb","18-19 v: vvvvvvvvvvvvvvvvvmd","9-10 x: zgxdjvxqxgxkcm","11-12 d: dddqddddddvdddd","1-4 d: ddlvd","2-4 t: tztfwtjwt","5-6 j: gjjsfjgvjjcwzjm","8-11 g: kvsqgmqgdmgxdpg","6-11 b: bpjbfrrpbvb","1-10 j: tmjjjjjjbjcjjjjjj","14-18 t: tttttttttttttttttttt","11-12 r: rjjvggmpwvrhn","10-12 t: tttttttttctttt","1-8 s: lbssjsssgsss","4-12 h: pchchhtthdhhch","7-8 m: mhrpkbmdmj","5-6 f: sffdsf","4-7 z: zzzkzzkzzzz","1-5 c: nccjw","1-2 l: wsgllckll","1-9 k: mwvhwgvfkvmpwnntjbk","1-6 v: vvvvvvvvvvv","2-8 m: ttzhlrrmbt","3-4 x: xqklgxxx","12-13 v: rvvvvvvvfvvmvv","6-13 n: nnnnnnnnnnnnnn","5-6 s: bpnsssj","3-9 q: xtddtwfcstjrqbslmjsz","8-9 g: xxkxxgzgg","1-12 w: gwwwwwwwwwwtw","4-5 p: pppppp","1-2 x: jpxvxxxxxnmkx","3-4 n: ddnn","5-6 t: ztkmttmb","2-5 j: rrcjj","2-5 s: lccgw","5-6 f: fffflfff","3-4 h: ptbh","2-3 s: sssgm","6-8 g: gggggpggg","3-4 d: qrll","8-15 b: zbxpbbbbbbhbbbpbp","2-3 r: rrrr","13-15 c: cdccqkcvckcccvc","10-15 z: hxctzzvzzzzbfzz","3-4 q: qwtqqncqcdxq","1-6 l: jlllsl","5-6 g: ggggbxggggrggggg","4-6 m: mmmsmdmpmmmm","5-9 d: ddddddqdgddd","2-19 d: dxdddddddddddddddddd","8-9 z: zzzzztzpzqzzdh","7-12 j: jjfjsmsxjwjjvtcbjb","2-10 l: dxkrwjbvlsgpzcmk","13-14 h: hhhhrqlhhhhhhhh","2-8 v: jvvvvvvjv","13-14 q: qqjqqqfjqqqqqz","5-12 d: pllddwcgctfbkfx","17-18 f: ffffffffffffffffmjff","7-17 w: sqmbczwtwpwkhngtw","15-17 l: lllllllllllzllplllll","5-8 c: cccqfccccccc","8-14 k: xnjcftlkvhkmkr","4-5 q: qqqqqj","8-11 m: wzxcmwgmmvmgq","11-15 h: hnhtnhnhhkghhzhh","11-13 g: rgdgqgvmqjggg","8-13 v: mtjkbnvvvhvvv","4-5 v: vcvhv","5-12 w: fqvwnzcwlntwpcwf","1-15 j: jjjjjjjzjjjjspwj","2-4 x: jmrxxkpncwdcftw","1-2 b: gbbqbf","8-11 k: kxkkkkzpkkzkkm","1-4 v: mpqp","6-7 p: lxdptfp","3-4 s: sxss","16-18 d: gxzglqmddffqxqvppr","4-6 f: fffmfff","13-16 m: zfmcnzxfvmcmqmhcctv","1-8 n: nnnnnnnm","8-9 v: vvvvvvvvvg"]
// function checkPassword(arr){
//     var sum=0;
//     for (var i=0; i<arr.length; i++){
//
//         var counter =0;
//         var innerArray=arr[i].split(" ");
//         var range = innerArray[0].split("-");
//         var letter=innerArray[1].split("")
//         innerArray[2].split("").forEach(function(x){
//             if (x===letter[0]){
//                 ++counter;
//             }
//         })
//         if (counter>=range[0]&&counter<=range[1]){
//             sum++;
//         }
//     }
//     return sum;
//
// }
// console.log(checkPassword(array2))

// function checkPassword2(arr){
//     var sum=0;
//     for (var i=0; i<arr.length; i++){
//
//         var counter =0;
//         var innerArray=arr[i].split(" ");
//         console.log("inner array is" +innerArray)
//         var range = innerArray[0].split("-");
//         console.log("range is "+range);
//         var letter=innerArray[1].split("")
//         console.log("letter is "+ letter[0]);
//         var lettersList=innerArray[2].split("")
//         console.log("letters list is" + lettersList);
//         console.log("letter in range 0 is "+ lettersList[range[0]-1], "letter in range 1 is "+lettersList[range[1]-1])
//         if (lettersList[range[0]-1]===letter[0]){
//             ++counter;
//         }
//         if (lettersList[range[1]-1]===letter[0]){
//             ++counter;
//         }
//         if (counter===1){
//             sum++;
//         }
//     }
//     return sum;
//
// }
// console.log(checkPassword2(array2))

//first guess 814

// var array=[".....##.#.....#........#....##.","....#...#...#.#.......#........",".....##.#......#.......#.......","...##.........#...#............","........#...#.......#.........#","..........#......#..#....#....#","..................#..#..#....##",".....##...#..#..#..#..#.##.....","..##.###....#.#.........#......","#.......#......#......#....##..",".....#..#.#.......#......#.....","............#............#.....","...#.#........#........#.#.##.#",".#..#...#.....#....##..........","##..........#...#...#..........","...........#...###...#.......##",".#..#............#........#....","##.#..#.....#.......#.#.#......",".##.....#....#.#.......#.##....","..##...........#.......#..##.#.","##...#.#........#..#...#...#..#",".#..#........#.#.......#..#...#",".##.##.##...#.#............##..","..#.#..###......#..#......#....",".#..#..#.##.#.##.#.#...........","...#....#..#.#.#.........#..#..","......#.#....##.##......#......","#....#.##.##....#..#...........","...#.#.#.#..#.#..#.#..#.##.....","#.....#######.###.##.#.#.#.....","..#.##.....##......#...#.......","..#....#..#...##.#..#..#..#..#.",".............#.##....#.........",".#....#.##.....#...............",".#............#....#...#.##....",".#.....#.##.###.......#..#.....",".#...#.........#.......#..#....","..#.#..#.##.......##...........",".....##..#..#..#..#.##..#.....#","..##............##...#..#......","...#..#....#..##.....##..#.#...","#.....##....#.#.#...#...#..##.#","#.#..#.........#.##.#...#.#.#..",".....#.#....##....#............","#.......#..#.....##..#...#...#.",".....#.#...#...#..#......#.....","..##....#.#.#.#.#..#...........","##..#...#.........#......#...#.","..#...#.#.#.#..#.#.##..##......","#............###.....###.......","..........#...#........###.....",".......##...#...#...#........#.",".#..#.##.#.....................",".#..##........##.##...#.......#",".......##......#.....#......#..",".##.#.....#......#......#......","#...##.#.#...#.#...............","........#..#...#.##.......#....","...................#...#...##..","...#...#.........#.....#..#.#..",".###..#........#..##.##..#.##..","#...#.....#.....#.....#..#..#..","###..#.....#.#.#.#......#....#.","#........#....##.#...##........",".#.#..##........##....##.#.#...","#...#....#.###.#.#.........#...","...#...##..###.......#.........","......#....#..##..#.....#.#....","........#...##...###......##...","..........##.#.......##........","...#....#......#...##.....#....","###.#.....#.#..#..#....#...#..#",".#.....#.#....#...............#","..#....#....####....###....#.#.","....##........#..#.##.#....#...",".......##...#...#..#....####...","#...##.#......##...#..#........","..##..#.##....#.......##.#.#...","..#.#...............#...#.#....","....#.....#.#.....#.##.......#.","...#.#..##.#.#..............##.","..#.....#...#.............#.##.","##..#.#...#........#..#.....##.","...........##...#.#.###...#....","...#.#.#..#..................#.",".#...##.............#...#......","..#..#...#.#.......#...#.....#.","..##.......#.#.................",".##..#........###.....#....#.##","......#..###.......#....##....#","....#.....#.................#..","........#...#...#..............","...#..#.###.......#..#.#.#.##..","..#...#.....#....#.........#...","...#.............#........###..","......#..............#......#..","#..#...........#...#..........#","...##...#.###..#...#.....#.#...","....#..##......#.......##......","....#....##.#...#.#..#....#...#",".#...........#..#....##...#..##","..#.#.................###.#...#","..#.#.#...##...........#.......","..........#..##...#.#..##....##","........#........#.##..#.#...#.",".....#...##.......##......#...#","....#...#..#..#.....#..........",".#..#......#..#..#..###.......#",".##..........#...#...#.#.....##","..#..........#.#.#...###.......","....#................#...##....",".##..#....#..........#.#.#.....","..##...#.#........#.....#.##...","....####.....#..#.........##..#","......#.........#...#..........","....#...................#..##..",".##....#.#.........#....#...#..","....##...##.....#..####........","..##.#....#.#.......##...#.....","#...#.#.#...#..#..##.....#.....","#..................###.....#...","#.#.....#.......#.#...###.#....",".#..#....#............#........","#.#....#..#.#...............#..","..#..#..#.............#......#.","..#.......##...................",".#....#.........#....#.#.#..#..","....#....#..#...............#..","......#..#..##......#.........#","..#.##........##......#..#..#.#","#.....#.#....#.........##...#..","###..............#....###...##.","....#..##......#.......##......","......#...#.##......##....#..#.","..........#....#..##.......#..#",".#..#...##..#...........#..#..#",".....#....#...#..###...###....#",".#####..#...#.#.#..#.#.###...##","..##............##.#...#.##...#",".##..#...#...#....##.#..#..##..",".#....#...#............##..#...",".#.#......#....#....#..##..##..",".........#...#.......#.##..#...","#.........#.....##.....#..#..#.","...##.#...#...#..#..#....##..##",".#............#...#....##......","..#...#.##.........#.#......#.#","....#.##........#.........#..##","#.........#......#.#......#..#.","........#.#.......#.#........#.","..#..........##.#...#..#.#.....","..#...#....#...#...#..#.#..#.#.",".#.........#....#..#####..#....","#.#....#.#.###...#.............","..##...........##......##......","#.....#..#....#...............#","...#.#..#....##......#...##....","...#........#.....#...#..#.....",".#......##.........#......#....","..#..###.##...#.#.....#........",".............#......#..#.......","..#...............#.#...#..#..#",".......#..#...#.#####......#..#",".........#.....#...............","##........#............#.#.....",".#...#.....#..#..#...#....#...#","..#....#....##......##.....#.#.","#...##..##......#...#....#.....","....#.#.#.....###....##.##....#","..........##...##.......#......","..#.......#...##.#....##.##....","....#........................#.","...#...#.#.##...#.....#...#..#.",".#....##..#..#..........##..##.",".#.....#..#...#.##.....#.......",".#.##...#.#..#.....##....#...#.",".##...#........##....#..#......",".....#........#..........#.#..#","....#..##.......#..#.....#.....","...........#...#........#.##..#",".....#..#....#..#.#.....#....##",".....#....#.##.#..##...........","...##.......##.........#.......","...............##..#....#.#....",".......###..#........#..####.##",".......#.##...#.#....#.####....","....#...............#..........","##.#.......#.....#......#...#..","......##.....#....#.....#..#..#",".....#...##.............#......","#.#.##.#.....#..#........#.....","......##....#..#........#......","............#........#..#.#....","##.......#......#...####..#.##.","..##..#...#.............#.##...",".....#..##......#.##......###..","............#........#........#","#.#.#.#...#.#.....#.........#..",".........#...............#.....",".............###.#.......#....#","###.##..#..#..........#....#...","#......#...#..#..#.....#.##....","............#....#....#..#.....","..#.#....#...#......#.#..#..##.","...#........................#..","#.#...#..........#......#.#....",".........#................#...#","##.....#....#........##.......#","#...##........#...#...........#","...#...#..........##.......#.#.","..#.#.#....#......##...........","...#.#...#.##.#..#.#.##........","#....##.....###..#.......#.....","###.....#.#.#...#..#.........##","..#......#..###...#.#.#.....#.#",".#....#.....#............#..##.","....#....##..........#.....##..","#...........#....#...#..#...##.","..#.......#.....#..........#...",".#..#................#......#..","..#......#.#...#..#.#....#....#","...#..#...###..#..##....#.#....","..#..............#.....#.......","...#.#...#.........#.#.........","##......##...........##.#.##..#","..#..##..#....#.#......#.#...##","...#.###....###...#.....#......","#.#................#......#....","..#.....#.....#....##.......#..",".#.#...............##..#.......","...#....#.......#.#.....##..#..",".........#....#.......#.#...##.","#....#......##.#.........##...#","#.............#..##.#.#..##....","...#....#..#...#....#.#.#.#...#",".#....#....#..##.....#.#...###.","##............#.#...##.#..#.#..","##.#....##.....#..#..###....#..","##....#................##......","...##..#...#..###....#.....##..",".#...##......#..#.#.....#...#..","..##......##...#.##.......#....","......#.....#.....##........#.#","##....#...........#............","#.......#....#..#.##..##.#..#..",".#....##.#.....#..#..#.........",".#....#.#.#...#.....##.....#.#.",".......##.#.#........#......##.","##........#.##.......#...#..#..","...###..##....#.#....#.#.......","......#.......#...##.....#...#.","..#......##.#......#.....#.....",".....#.....###...#.............","#...#.#...#...#..#......#......","#.....#.......###.#....###.#...","...#.......#....####....##..#..","#.#.....#....#........#.......#",".........#.......#......#.#...#","..##....#.....##...............","..........#..#.#..#......#.....","..................##...##.#....","........#.......#...#..#.#.#...",".....#.#..##..#..#.#..#.......#",".....#........#..#..#....#....#","##............#..#..#...#....#.",".....#....................##..#","........##.#....###............","##.......#.##................#.",".....###.#..#..#...#....###.##.",".#......#.#....#.....##.#......","...##......##.........#...#....","....####..............#........","#...#.#..##..##.........##.....","......#......#....#..#.........","#.....#.....#.##...............","..#.##..#...##.#.####..#....###","#..#......#....#.##..##...#.#..","#....#.......#.....#.....#.#...","##.......#.....##...#.....#....","...#...##..........#..##..##..#",".###..#..##...#....#...#..#....","......##..###.......###...#....","....#...#.#.......#.##...##..##","#.#......#..##.#.#..#..#..#....","......#........#.......#.......","..........#.#.....##...........","......#..#........#..#.#..###..","##..#.............##..#........",".........#....#.....#.........#",".....#..##...#..#..##.##......#","###..#...........#.......#....#","...............#....#.#........",".##.#...#.#........##....#.....",".##.###...##..###....#...#...#.",".##..#....#.#.#...#.#.#.#...#..",".###.#...#.......#....#..#.....","..#..#.#.#.#........#.....##...",".#.......#.#...#.#...........##","...#.....##....#.....##...#....","................#.....####...#.",".#.#......#.......##...#.##....",".###.........#.#......#..#.#...","#......#...#....#..##.......#..",".##..#....#..#...........#...#.",".#...#.......##........#.##....","..#...........#...##...........",".....##....##......#....#..#...","#......#.#...#.##.#...##....#..","#....................#...##...#","..#............#........#......",".............#.........##.....#","...#...#......##.#...#...#.#...","..#...#.#.................#....","....##...#....#...###.##......#","...#....#...#..#...#....#.....#","...##.#........#..#.........#..","..##.....#..##...#.....##...#..","#.........#.#.#...#......#...#.","#.#...........#...#..#..#..##..","..#..#..##....#..........#.###.",".....#..#....#.#...#...#..#..#.","###.....#..#.................#.",".#..##.##.#......#....##..#...."];
//
// var arrayLength=array.length;
// var arrayIndexLength=array[0].length;
//
// for (var i=0; i<array.length; i++){
//     array[i]=array[i].split("");
// }
// // console.log(arrayLength);
// // console.log(arrayIndexLength);
// while (arrayIndexLength<arrayLength*3){
//     for (var i=0; i<array.length; i++) {
//         array[i]=array[i].concat(array[i]);
//     }
//     arrayIndexLength = array[0].length;
//     //console.log(arrayIndexLength);
// }
// var k=0;
// var sum=0;
// for (var j=0; j<array.length; j++){
//     if(array[j][k]==="#"){
//         sum++
//     }
//     k=k+3;
//
// }
// console.log(sum);

// var array=[".....##.#.....#........#....##.","....#...#...#.#.......#........",".....##.#......#.......#.......","...##.........#...#............","........#...#.......#.........#","..........#......#..#....#....#","..................#..#..#....##",".....##...#..#..#..#..#.##.....","..##.###....#.#.........#......","#.......#......#......#....##..",".....#..#.#.......#......#.....","............#............#.....","...#.#........#........#.#.##.#",".#..#...#.....#....##..........","##..........#...#...#..........","...........#...###...#.......##",".#..#............#........#....","##.#..#.....#.......#.#.#......",".##.....#....#.#.......#.##....","..##...........#.......#..##.#.","##...#.#........#..#...#...#..#",".#..#........#.#.......#..#...#",".##.##.##...#.#............##..","..#.#..###......#..#......#....",".#..#..#.##.#.##.#.#...........","...#....#..#.#.#.........#..#..","......#.#....##.##......#......","#....#.##.##....#..#...........","...#.#.#.#..#.#..#.#..#.##.....","#.....#######.###.##.#.#.#.....","..#.##.....##......#...#.......","..#....#..#...##.#..#..#..#..#.",".............#.##....#.........",".#....#.##.....#...............",".#............#....#...#.##....",".#.....#.##.###.......#..#.....",".#...#.........#.......#..#....","..#.#..#.##.......##...........",".....##..#..#..#..#.##..#.....#","..##............##...#..#......","...#..#....#..##.....##..#.#...","#.....##....#.#.#...#...#..##.#","#.#..#.........#.##.#...#.#.#..",".....#.#....##....#............","#.......#..#.....##..#...#...#.",".....#.#...#...#..#......#.....","..##....#.#.#.#.#..#...........","##..#...#.........#......#...#.","..#...#.#.#.#..#.#.##..##......","#............###.....###.......","..........#...#........###.....",".......##...#...#...#........#.",".#..#.##.#.....................",".#..##........##.##...#.......#",".......##......#.....#......#..",".##.#.....#......#......#......","#...##.#.#...#.#...............","........#..#...#.##.......#....","...................#...#...##..","...#...#.........#.....#..#.#..",".###..#........#..##.##..#.##..","#...#.....#.....#.....#..#..#..","###..#.....#.#.#.#......#....#.","#........#....##.#...##........",".#.#..##........##....##.#.#...","#...#....#.###.#.#.........#...","...#...##..###.......#.........","......#....#..##..#.....#.#....","........#...##...###......##...","..........##.#.......##........","...#....#......#...##.....#....","###.#.....#.#..#..#....#...#..#",".#.....#.#....#...............#","..#....#....####....###....#.#.","....##........#..#.##.#....#...",".......##...#...#..#....####...","#...##.#......##...#..#........","..##..#.##....#.......##.#.#...","..#.#...............#...#.#....","....#.....#.#.....#.##.......#.","...#.#..##.#.#..............##.","..#.....#...#.............#.##.","##..#.#...#........#..#.....##.","...........##...#.#.###...#....","...#.#.#..#..................#.",".#...##.............#...#......","..#..#...#.#.......#...#.....#.","..##.......#.#.................",".##..#........###.....#....#.##","......#..###.......#....##....#","....#.....#.................#..","........#...#...#..............","...#..#.###.......#..#.#.#.##..","..#...#.....#....#.........#...","...#.............#........###..","......#..............#......#..","#..#...........#...#..........#","...##...#.###..#...#.....#.#...","....#..##......#.......##......","....#....##.#...#.#..#....#...#",".#...........#..#....##...#..##","..#.#.................###.#...#","..#.#.#...##...........#.......","..........#..##...#.#..##....##","........#........#.##..#.#...#.",".....#...##.......##......#...#","....#...#..#..#.....#..........",".#..#......#..#..#..###.......#",".##..........#...#...#.#.....##","..#..........#.#.#...###.......","....#................#...##....",".##..#....#..........#.#.#.....","..##...#.#........#.....#.##...","....####.....#..#.........##..#","......#.........#...#..........","....#...................#..##..",".##....#.#.........#....#...#..","....##...##.....#..####........","..##.#....#.#.......##...#.....","#...#.#.#...#..#..##.....#.....","#..................###.....#...","#.#.....#.......#.#...###.#....",".#..#....#............#........","#.#....#..#.#...............#..","..#..#..#.............#......#.","..#.......##...................",".#....#.........#....#.#.#..#..","....#....#..#...............#..","......#..#..##......#.........#","..#.##........##......#..#..#.#","#.....#.#....#.........##...#..","###..............#....###...##.","....#..##......#.......##......","......#...#.##......##....#..#.","..........#....#..##.......#..#",".#..#...##..#...........#..#..#",".....#....#...#..###...###....#",".#####..#...#.#.#..#.#.###...##","..##............##.#...#.##...#",".##..#...#...#....##.#..#..##..",".#....#...#............##..#...",".#.#......#....#....#..##..##..",".........#...#.......#.##..#...","#.........#.....##.....#..#..#.","...##.#...#...#..#..#....##..##",".#............#...#....##......","..#...#.##.........#.#......#.#","....#.##........#.........#..##","#.........#......#.#......#..#.","........#.#.......#.#........#.","..#..........##.#...#..#.#.....","..#...#....#...#...#..#.#..#.#.",".#.........#....#..#####..#....","#.#....#.#.###...#.............","..##...........##......##......","#.....#..#....#...............#","...#.#..#....##......#...##....","...#........#.....#...#..#.....",".#......##.........#......#....","..#..###.##...#.#.....#........",".............#......#..#.......","..#...............#.#...#..#..#",".......#..#...#.#####......#..#",".........#.....#...............","##........#............#.#.....",".#...#.....#..#..#...#....#...#","..#....#....##......##.....#.#.","#...##..##......#...#....#.....","....#.#.#.....###....##.##....#","..........##...##.......#......","..#.......#...##.#....##.##....","....#........................#.","...#...#.#.##...#.....#...#..#.",".#....##..#..#..........##..##.",".#.....#..#...#.##.....#.......",".#.##...#.#..#.....##....#...#.",".##...#........##....#..#......",".....#........#..........#.#..#","....#..##.......#..#.....#.....","...........#...#........#.##..#",".....#..#....#..#.#.....#....##",".....#....#.##.#..##...........","...##.......##.........#.......","...............##..#....#.#....",".......###..#........#..####.##",".......#.##...#.#....#.####....","....#...............#..........","##.#.......#.....#......#...#..","......##.....#....#.....#..#..#",".....#...##.............#......","#.#.##.#.....#..#........#.....","......##....#..#........#......","............#........#..#.#....","##.......#......#...####..#.##.","..##..#...#.............#.##...",".....#..##......#.##......###..","............#........#........#","#.#.#.#...#.#.....#.........#..",".........#...............#.....",".............###.#.......#....#","###.##..#..#..........#....#...","#......#...#..#..#.....#.##....","............#....#....#..#.....","..#.#....#...#......#.#..#..##.","...#........................#..","#.#...#..........#......#.#....",".........#................#...#","##.....#....#........##.......#","#...##........#...#...........#","...#...#..........##.......#.#.","..#.#.#....#......##...........","...#.#...#.##.#..#.#.##........","#....##.....###..#.......#.....","###.....#.#.#...#..#.........##","..#......#..###...#.#.#.....#.#",".#....#.....#............#..##.","....#....##..........#.....##..","#...........#....#...#..#...##.","..#.......#.....#..........#...",".#..#................#......#..","..#......#.#...#..#.#....#....#","...#..#...###..#..##....#.#....","..#..............#.....#.......","...#.#...#.........#.#.........","##......##...........##.#.##..#","..#..##..#....#.#......#.#...##","...#.###....###...#.....#......","#.#................#......#....","..#.....#.....#....##.......#..",".#.#...............##..#.......","...#....#.......#.#.....##..#..",".........#....#.......#.#...##.","#....#......##.#.........##...#","#.............#..##.#.#..##....","...#....#..#...#....#.#.#.#...#",".#....#....#..##.....#.#...###.","##............#.#...##.#..#.#..","##.#....##.....#..#..###....#..","##....#................##......","...##..#...#..###....#.....##..",".#...##......#..#.#.....#...#..","..##......##...#.##.......#....","......#.....#.....##........#.#","##....#...........#............","#.......#....#..#.##..##.#..#..",".#....##.#.....#..#..#.........",".#....#.#.#...#.....##.....#.#.",".......##.#.#........#......##.","##........#.##.......#...#..#..","...###..##....#.#....#.#.......","......#.......#...##.....#...#.","..#......##.#......#.....#.....",".....#.....###...#.............","#...#.#...#...#..#......#......","#.....#.......###.#....###.#...","...#.......#....####....##..#..","#.#.....#....#........#.......#",".........#.......#......#.#...#","..##....#.....##...............","..........#..#.#..#......#.....","..................##...##.#....","........#.......#...#..#.#.#...",".....#.#..##..#..#.#..#.......#",".....#........#..#..#....#....#","##............#..#..#...#....#.",".....#....................##..#","........##.#....###............","##.......#.##................#.",".....###.#..#..#...#....###.##.",".#......#.#....#.....##.#......","...##......##.........#...#....","....####..............#........","#...#.#..##..##.........##.....","......#......#....#..#.........","#.....#.....#.##...............","..#.##..#...##.#.####..#....###","#..#......#....#.##..##...#.#..","#....#.......#.....#.....#.#...","##.......#.....##...#.....#....","...#...##..........#..##..##..#",".###..#..##...#....#...#..#....","......##..###.......###...#....","....#...#.#.......#.##...##..##","#.#......#..##.#.#..#..#..#....","......#........#.......#.......","..........#.#.....##...........","......#..#........#..#.#..###..","##..#.............##..#........",".........#....#.....#.........#",".....#..##...#..#..##.##......#","###..#...........#.......#....#","...............#....#.#........",".##.#...#.#........##....#.....",".##.###...##..###....#...#...#.",".##..#....#.#.#...#.#.#.#...#..",".###.#...#.......#....#..#.....","..#..#.#.#.#........#.....##...",".#.......#.#...#.#...........##","...#.....##....#.....##...#....","................#.....####...#.",".#.#......#.......##...#.##....",".###.........#.#......#..#.#...","#......#...#....#..##.......#..",".##..#....#..#...........#...#.",".#...#.......##........#.##....","..#...........#...##...........",".....##....##......#....#..#...","#......#.#...#.##.#...##....#..","#....................#...##...#","..#............#........#......",".............#.........##.....#","...#...#......##.#...#...#.#...","..#...#.#.................#....","....##...#....#...###.##......#","...#....#...#..#...#....#.....#","...##.#........#..#.........#..","..##.....#..##...#.....##...#..","#.........#.#.#...#......#...#.","#.#...........#...#..#..#..##..","..#..#..##....#..........#.###.",".....#..#....#.#...#...#..#..#.","###.....#..#.................#.",".#..##.##.#......#....##..#...."];
//
// var arrayLength=array.length;
// var arrayIndexLength=array[0].length;
//
// for (var i=0; i<array.length; i++){
//     array[i]=array[i].split("");
// }
// // console.log(arrayLength);
// // console.log(arrayIndexLength);
// while (arrayIndexLength<arrayLength*7){
//     for (var i=0; i<array.length; i++) {
//         array[i]=array[i].concat(array[i]);
//     }
//     arrayIndexLength = array[0].length;
//     //console.log(arrayIndexLength);
// }
// function findTrees(x,y) {
//     var k = 0;
//     var sum = 0;
//     for (var j = 0; j < array.length; j=j+y) {
//         if (array[j][k] === "#") {
//             sum++
//         }
//         k = k + x;
//
//     }
//     return sum;
// }
// var case1=findTrees(1,1)
// var case2=findTrees(3,1)
// var case3=findTrees(5,1)
// var case4=findTrees(7,1)
// var case5=findTrees(1,2)
//
// console.log(case1*case2*case3*case4*case5)
//
// const fs = require('fs');
//
// const report = fs.readFileSync('../../input.txt', 'utf8');
// const passports = report.split('\n\n');
// const passportsSplit = passports.map(passport => passport.split(/\s+/));
// const passportDict = passportsSplit.map(passport => {
//     const dict = passport.reduce((traits, cur) => {
//         const splitTrait = cur.split(':');
//         if (splitTrait[1]) {
//             traits[splitTrait[0]] = splitTrait[1];
//         }
//         return traits;
//     }, {});
//
//     return dict;
// });
// console.log(passportDict.length);
// console.log(passportDict[0]["hgt"].split(/ea/));
//
//     console.log(finalArray)
//console.log(passportDict)
//     var approvedPassports=passportDict.filter(function(x){
//         var length=Object.keys(x).length;
//         if (!(length===8 || (length===7 && !x["cid"] ))){
//             console.log(x)
//             console.log("first test failed")
//
//             // console.log(x);
//             // console.log(x.length);
//             // console.log(x.indexOf("cid"))
//             return false;
//         }
//         // var height=0;
//         // var birth=0;
//         // var expiration=0;
//         // var issue=0;
//         // var hair=0;
//         // var eye=0;
//         // var passport=0;
//
//         var heightIn = x["hgt"].split(/in/);
//         var heightCm = x["hgt"].split(/cm/);
//         var hclTestRegex=/#[0-9a-f]*/
//         var eyeColor=["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
//         var pidTestRegex=/[0-9]*/
//         if(x["byr"].length!==4 || Number["byr"]<1920 || Number["byr"]>2002 ){
//             console.log(x)
//            console.log("birth failed")
//             return false;
//         }else if(x["iyr"].length!==4 || Number["iyr"]<2010 || Number["iyr"]>2020 ){
//             console.log(x)
//             console.log("issue failed")
//             return false;
//         }else if(x["eyr"].length!==4 || Number["eyr"]<2020 || Number["eyr"]>2030 ) {
//             console.log(x)
//             console.log("expiration failed")
//             return false;
//         }else if(heightIn[0]===x["hgt"] && heightCm[0]===x["hgt"] ||  (heightIn[0]!==x["hgt"] && (Number(heightIn[0])>76 || Number(heightIn[0])<59)) || (heightCm[0]!==x["hgt"] && (Number(heightCm[0])>193 || Number(heightCm[0])<150))){
//             console.log(x)
//             console.log("height failed")
//             return false;
//         } else if(!hclTestRegex.test(x["hcl"]) || x["hcl"].length!==7){
//             console.log(x)
//             // // console.log(x["hcl"].length);
//             // // console.log(!hclTestRegex.test(x["hcl"]))
//             console.log("hair failed")
//             return false;
//         } else if (!eyeColor.includes(x["ecl"])||x["ecl"].length!==3){
//             console.log(x)
//             console.log("eyes failed")
//             return false;
//         }  else if (x["pid"].length!==9|| !pidTestRegex.test(x["pid"])){
//             console.log(x)
//             console.log("passport id failed")
//             return false
//         } else{
//             //console.log(x);
//             //console.log(x["pid"][0])
//             return true;
//         }
//     })
// console.log(approvedPassports.length);
//     console.log(passportDict.length)

    //first guess 18


// var arr= ["FBBFFBBLLL","FFBFFFBRLL","FFBBBBFRRL","FBFBBBBRLL","BFBBBBFLLR","FFFBBBBLRR","BFFFFFBLLL","BBFFFBFRRL","FFBFFFFLLR","BFFFBBBRRL","FBFBFFFLRL","FFFBBFBLRR","FBFBFBFLRR","FBBBBFBRRL","BFFBFFBRRR","FBBBFBBRLL","FBFFBFBRLR","BBFBFFFLRL","FFBFFFFRLR","FFBBFBFRRR","BFBBBFBLRR","FFBBFFFLRL","FBBBBFFRLR","FBBBBBBRLR","FFBFBFBLLL","BBFBFBBLLL","FFFFFBBRRL","FBFFBFBRRR","FFFBFFFRLL","BFBFBFFLLL","BFBFFBFLLL","FFFFBFFRRL","FBFFFFFRLR","FBBFFBBLLR","BFFFFFBLRL","BFBFFFBLLR","FBBBBBBLLL","BBFBFBFLLL","FFBFFBFLRR","BBFFFBBRLL","FFBFFFFLLL","FBBFFBFLLL","FFFBBBFRRR","BFBBFBFRLL","FBBFBFFRRL","FBFBBFBLRR","FFBBBBBRLR","FFBFBFFLLL","FBFFFBFRRL","BFFBBFFRLL","BFFBBFFLLR","BBFFBFFRRL","FBFBFBFLLR","BBFFBFBLRL","BFBFBFBLRR","FFBBFBBRRL","BFBBBFBRLR","FBFFFFBLLR","BFBFFBBLRR","BBFBFBFRRR","FFBFBBBRRL","BFBFBBFRLR","FBFBBBBRLR","BFFFFBBRRR","BBFFFBFLLR","FBFFFFBRRL","BBFFBFBLLL","BFFFBBBLLL","FFBFFFBLRR","BFBFBBBRRR","FBFFBFFRRR","BFFBFFBLLL","BFBBFFFLRL","BBFBFFBRLR","FBBFFFFLLL","FBFFFFBLLL","BBFFFFBRLR","BBFBFFBRRL","FBBFBFBRRR","FBFFBFFLRR","FFBBBFBLLR","FFFFFBFRRR","BFBBBBBLLR","BBFBFFFRLL","BFFBFBBLRR","BFFBBFBRLL","FBFFBFFRLR","FBFBBFFLLR","FFFFFBFRRL","FFBFFBFRLR","FBFBBBFLLL","FFBFBBFLLR","FBFFBBBRLR","FFFBFBFLLR","BFBBFBBLRL","BFFFFBFLLL","BFBFFBFLRL","BBFFBFBLLR","BFFFBFBRRL","BBFBFFBLLR","FFBBFFFRLL","FFFFFBBRLR","FFBFBFBRLL","FBBBBFBLRR","FFFBFFFRRL","FFFFBFFLRL","FFFFBFFRLR","BFFFFFFRRR","BBFFBFBRRL","BBFBFFFLRR","FFBBBFFLLR","FBFBFBBRLR","FBBFBBBLRR","BFFBBBFRLL","BFBBFBBLLL","FBFFFBBLLR","FBBBBFFRRL","BFBBFFFLLR","BFBBBFFLRL","FFBFFBBRLL","FBFBFFBRRR","FBBFBBBLRL","BFFFBFFLRL","BFFBFFBLRR","BFBFBBFLRL","FBFBBFFRLL","BFFFFBBRRL","FFBBBBBLRL","FBBFFBFRRL","BBFFBFBRLL","FBFFFFFLRL","FFFBFBFRLR","FFBBBBFLLR","FFFBBBFRLR","FFBBFFBRRR","FFFBFFBLRL","FBFBFBBLLL","BFFFFBBLRR","BBFFBBFLLR","FFFFFFBRLL","FBBBBBBLRR","FFFFBFBLLR","BBFFBBFRRL","BFBBBBBLRR","BFBBFBBLRR","BBFFFFBRRR","BFBBBFBLLR","BBFFBBBRRR","FBBFBFBRLL","FFFFFBBLRR","BBFBFBBLLR","FBFFFBFRLR","BBFFBFFLLR","BBFBFFFRLR","FFFFBFBLRL","FFBBBBBLRR","FBBBFFBLRR","FBBFBBFRLL","FBBFBFBRLR","FFBFBBBLRL","FBFFBBBLLL","FFFBBBBRRR","FFBFFBFLRL","BFFFBBFRLL","BFFFFBBLLR","BFFFFFBRRL","BFFBFBBRRL","FFBFFFBRRL","BFFBFFFLRL","BFFBBBFLLL","FFBBFFFLRR","FBBBFFBRLL","FFBBFFFRLR","BFBFBFFRLL","FFFFBBFRRR","BFBFBBFRRL","FBFBBBFLRL","FFFBFBBRLL","FFBBBFFLLL","BBFFFBBLRL","FBBBFFBRRR","BFBFBFBLLL","FFBFFBBRLR","FFBFBBBRLR","FFFFFFBRLR","BFFBBFFLRL","FFBFFBFRRR","FFBFBFFRLL","FBFBFFBLLR","FBFBFBBRRR","FFFBBFBRRR","FBBBBFBLLR","FFFFBFBRLR","FFFBBBFRLL","FBFFBFBLLL","FBFBFFFLRR","FFFBBFFLLL","BFBFFFFLLL","BBFFFBFLLL","FFFFBFBRRL","FFBBBFBRRL","BFBFFBBRLR","FFFBBFFLRL","FFFBFBBLLR","FFBBBFFRLR","FBBBBFBLRL","BFFFBBFLLL","BFFBFBFLLR","FBFFBBFLRR","BFFBBBBLLR","FBBBFFFRRR","FBFFBFBLRL","BFFFFFFRLR","FBBBBFBRRR","FFBBBBFLRL","BBFBFFBLRL","BFBFBBBLRR","FFFFFBFLLR","FBBFFBFLLR","BFFFFBBRLL","FFBFBBBLRR","FFFFBFFLLR","BBFFFFFRLR","FBBBBFFRLL","BFFFBFBLRR","FBFBBBBLLR","BFFBFFBRLL","BFBFBFFLRR","BFFFFBFLRR","FBBFFBFLRR","BFFBBFBLLR","FBBFFFBLRL","FBFBFBBRRL","FBFFBFFRRL","BFBBFBFLLR","FFFFBFFLRR","BFBFFFBLRL","BFFBBBBRRR","FFFFBBBLRR","FFFBBFBLLL","FFBBFBFLLR","BFBBFBFLLL","FBBFBFFLLR","FFFBBFFRRR","FFBBBBBRRR","FFFBFFFRLR","BFFBFBFLRR","FBFFBFBRLL","FFFFBFFLLL","FFBBBFFRLL","FBFBFFBLLL","FBFBBBFLLR","BFBBBFFRLL","BFBBBBBRRL","FFFFFFBRRL","FBBFBBFLRL","BFFBFBBRLL","FFFFFBFLRL","BFBFFFBLRR","BBFFFBFLRR","BFBFBBBLRL","FBFFFFBRLR","BFBFBBBLLL","BFFFFFFRRL","FBBFFFBRRR","FBBFBFFLRL","BBFFFFFLRL","BFFFFBBLRL","FBFBBFFRRR","FBBFFFFLRR","FFFBFFFLRR","FBFBBFFRRL","BFFBFFBRRL","BFFBFBFRRL","FFBBFBBLLR","FBFFBFFRLL","BFBFFBBLLL","FFBBFFBLLL","BBFFFBBRRL","BFFFFFFLLL","FFBBBBFRLL","BFBBBBFRRR","BFFBBBBRLR","FBFFBBFRLL","BBFBFFBLRR","FBFFBBBLRR","BBFBFFFRRL","BFBFFFFLRR","BFBFFBBRRR","FBBFFFBLLL","BFFBBBFRLR","BFFFFBFRLL","FBFBBBBRRL","BBFFBBFLRL","FBBBBFFLLR","BFBBFFBRRR","FBBFFBBLRR","FBBBBBBRRL","BBFFFBBLLR","BFBBBBFLRL","BFFBFFFRLR","FFFFBFBRRR","FFFFBFBRLL","BFFFFFFRLL","BFFFBBBRLL","FFFFFBBLLL","FBFFFBFLRR","FBFBFBFLLL","BFBBFFBRLL","BFFFBBFRLR","BFBBFFFRLL","FFFBBFBLRL","BBFFFFFLRR","BBFFFBFRLR","BFBBBBFLRR","FBFFFBBLLL","BBFFBFBRRR","FBFBFBBLRR","FBBFBFFRLR","FBFBBBBLLL","FFFBBFBLLR","FFFFBBBRRL","FFBBBBFRLR","FFFBFFBRRL","BFBBFBBLLR","FFBFFFFLRL","BFFBFBFRLR","FFBBFBBLLL","BFFBBBFLRL","FFFFFBFRLL","BFFBFFBRLR","BFFFBFFRRL","BFBFBBBRLL","BFFFFFBLRR","FBBFFBBRLL","FFFFBBBLRL","BBFFFFBLRR","BFBFBBBLLR","BFFFBFFRLR","BFBBFBFRRR","BFFBBBFLRR","FFBFBBFRRR","FBBBFBFRLR","BFBFFBBRLL","BBFFBFFRLL","BFFFBFBLLR","FBFBBFFLRL","BFFFFBBLLL","BFBBFBBRRL","BFFFBFFLLL","BFBBBFBLLL","FFBBFBFLRR","FFBBFBFRLR","BFBBBFFRRR","BBFBFFFLLL","BFFFFFBRLL","FBBFBBFRRR","BFFFBBFLRR","BFFBBBFRRL","FFBFFFFRRL","FBFFBFBLRR","FFBFBFBRLR","BBFFBFFLRR","BFFBBFFLLL","FFBBBFBRRR","BBFFBFFRRR","FBBFFFFRRR","FBBBBFFLRR","FBBFBBBRRR","FFBFBFBLRL","FBBFFFBLRR","FBFFBFFLRL","BFBBFFFRRR","FBFBBBFRLR","BFFFFFBRRR","FBFBFFFRRR","BBFFFBFLRL","FFBFBFBLLR","FBFFFBBRRL","FBBBFFBLLL","BFBFBFFRRR","FBFFBBBRLL","FFBFFBBLLR","FFBBFBBRLL","BFBFBBFRLL","BFBBFFBLLL","BFFBBBFRRR","BFBFBFBRRL","BFFFFFFLLR","BFFFBBBRRR","FBBBFBFRRR","FFFBFFBRLL","BFFFFBFLRL","FBFBBFFRLR","FBBBBBFLRL","FFFBBBFRRL","BFBFFFFLLR","FBFFFBBLRR","FBBFBBBRRL","FFFBBBFLRR","BFBFFBFRRL","BFFFBBFRRL","FBBBFFBLLR","FFBBFBBLRL","BBFBFBFRLR","FFBFFBFLLL","FFFFBFBLLL","BBFFFFBRLL","FBFFFBBRLR","FFBBBFFRRR","FFFBFFFRRR","FFBFBBBLLR","FFBFFFBRLR","FFBBBFBLRR","BFFBBBBLRL","BFFFFBFRRR","BBFBFBFRLL","FBFBBBFLRR","FFFFFBFLLL","BFBBBFFLLR","BFFBFBFRRR","BFBBFFBLRR","BBFFFBBRLR","FBBBBBBLRL","BFFBBBBRRL","FFBFBFFRLR","BFFFFFBLLR","BBFFFFBRRL","FFFBBFFLRR","BFFFFBFRRL","BBFFBFFLRL","BBFBFBFLRR","FBFBBBBLRR","BFFBBFBRRR","FFFBBBBRLL","FBFBBBFRRL","FFFFFFBRRR","BFFFFFFLRL","FFBBFFFLLR","FBBFBFBLLL","FBBFBBFRLR","BFFBFFBLLR","FBFBBFBRLL","FBFBFBFLRL","FFBFFFBLLR","FBBFFBBLRL","FFFBBBBLLR","BFFBBBBLRR","BFFBFBBLLR","FFBBFFBRLR","FBBBBFFLLL","BFFFFFBRLR","BFBBBBFRLL","FFFBBFFRLR","BFFFBFBLLL","BBFFFFFRRL","FBFFFFBRLL","BFBFBFBLRL","FBBFBBFLRR","FFBFBBFLRR","FFBFBFFLRR","FFBFFFFRLL","BFBFBFBRRR","FBBBBFFLRL","FFBFFFBLLL","BFBBBFFRLR","FBFBFFBRLL","FBBBBBFRRL","FBFFBFFLLL","BBFFBBBLLR","BFFFBFFRRR","BBFFBBBRLL","BBFFFBBLRR","FBBFBBBRLR","BFBFBBFRRR","FBFFBBFLRL","FFFFBBFLRR","BFFFBFBRLL","BBFFFFFRLL","FFFBFBFRRR","BFBBBBFLLL","FFBBBFBRLR","FFFFBBBRRR","BFBFFBFRLR","FBFFBBFLLL","FFBFFBBLRR","FBFBFFBLRR","FFBFFBBRRL","FFFBBBBRRL","BFFBFBBLRL","BBFFBBBLRR","FFFBBFBRLL","FFFBFBBLRL","BFBFFFBRRL","FBBFFFFLLR","BBFBFFBLLL","BFBFBBFLLR","BFFBFBBRRR","FBFFFFFLLR","FFBBBFFLRL","FBFFBBFRLR","BFFFBFBLRL","FBFBBBFRRR","FFBFFBFRRL","FBFBBFBRLR","BFBFBFFRLR","FBFFBBBRRR","BBFBFFFLLR","FBBFBBBLLL","FFBBBFBLLL","FFBFFFFRRR","BFFBFBFLLL","BFFBBBFLLR","FBBBBBBRLL","FBBFFBFRLL","FFFBFFBLLR","FFBBFFBLRL","BFBBFBFLRR","BFBFFFBLLL","FBFFFBBRRR","FFBFBFFLLR","FBFFBBBRRL","FBBBBFBLLL","FFFFFBBLLR","FBBFBFBLRL","BFBBFBBRLL","FFFFBFBLRR","BBFFBBFLLL","FBBBFBFRLL","FBFBBFBLLL","BBFBFBFLLR","BFBFBFBRLR","FFFFFBFRLR","FFFFFBBRLL","FBFBFBFRRR","FBBBFBFLRL","BBFFBBBLRL","FFBBBBBRLL","FBBBFBBRRR","BFFFBBBLLR","BFBBBBBRLL","FFFFFBBLRL","BBFFBFFRLR","BFBFBFBRLL","FFFFBBFLLL","BFBFBFFRRL","FFBBFFBLLR","BFBBFFFLLL","BFBBFFBRLR","FBFBFFBRLR","FBFFFBFRLL","FBBFBFFLRR","FBBFFBFRRR","BFBFFFFRLL","BFFFBBBLRL","FBFBBBBRRR","BBFFBBFLRR","FBBBBFBRLL","BBFFBBBRRL","BFBBBFFLLL","FBFFFFBLRL","FBFFFFFRRL","BFBBBFFLRR","FBBFBFBLRR","FBFBFBBLRL","FFBFBFFRRL","BFFBBFBRLR","FFBFFBBLLL","FBBBFBBLLL","FBBBFBBRRL","FBBBFBBLLR","FBFFFBFLLL","FBBBFFBRLR","FBBFBBBRLL","FBBFFFBLLR","FFFBFBBRRR","FBBFFFFLRL","BFFFFBFRLR","FBBBFFFLLL","FFBBFBFLLL","BBFFFFFRRR","BBFFFBFRRR","FFBFFBBLRL","FBBBFFBLRL","FFBBFBFRRL","FBFFFBFLRL","FBBBFFFLRL","FFFFBBBRLR","FFBBFBBRLR","FBFBFFBRRL","BFBFFBFRRR","BFBFBFFLRL","BFFBFFFLLL","FBBFBFBRRL","FFBBBFBLRL","BFFFFBFLLR","FBBBFBFLLL","FBFFFBBLRL","FBBFFFBRRL","FBBBBBFLLR","FBBBFBFRRL","FFFBBFBRRL","FBBBFFBRRL","FBFBFBBRLL","BFBBBBBLLL","FBFBFFFLLR","FFFBFFBRLR","BBFFBFBLRR","BFFFBFFLLR","FBBFBBFRRL","FFBBBBBLLL","FBBFBFFRLL","FFFBBBFLRL","FFBBBBFLRR","FBFFFFFRLL","BBFFFFBLLR","FFFFBBFRRL","FFBBBBFRRR","FBBBFBBLRL","BFFBBFBLRL","BFBBFFFRLR","FFFBFBBRRL","BBFBFBFRRL","FFFBBBFLLR","BFFFFBBRLR","BFFBFFFLLR","BBFBFFFRRR","FFFFBBFRLR","BFBBBFBRRR","FBFBBBBLRL","FFFFBBFLLR","FBFBBBFRLL","BFBBFBBRLR","FFBBFFFRRR","FFBBBFBRLL","FBBFFBFLRL","BFBFFFBRRR","BFFFBBBRLR","FFFFBFFRRR","FFBBFFBLRR","FBBFBFBLLR","FFFBBBFLLL","FBBBBBFLLL","FFFFBBBLLL","FFFBFFBLLL","BFBBBBBRLR","BFBFBBFLRR","FBFBBFBRRR","BFBBFFFLRR","FFBBFFFLLL","BFFFBBFLLR","FFBBFBFRLL","FBBBFFFRLL","FFFBBFBRLR","BFBFFBFLRR","FBFBBFBLLR","FBFFFFBRRR","FFFBFBBLLL","FBFBFFFRRL","FFFBFBFLRR","FFBBBBBRRL","FFFBFFFLLR","BFFFBFFRLL","BFBBBBBLRL","FBBBFBFLRR","FFFFBBBLLR","BFFFBFFLRR","FBBBBBFLRR","FBBBBBFRLR","BFFBFFFRRR","FFBFBBFLRL","FFBFBBFRRL","FFBFFBBRRR","FFFFBBFRLL","BBFBFBFLRL","FBFBBFFLLL","BBFFFFBLLL","FBBBBFFRRR","BFFBFBFRLL","BFBBFBFRRL","FFBFBBFLLL","FBFFFBFRRR","FFBFFBFLLR","BFBBFFBRRL","FBBFFBBRRR","FFBFBBBRLL","FBBBBBBLLR","FBFBBFBRRL","BFFBFFFRLL","BBFFBBFRRR","FBBBBBFRLL","FBBFFFFRLR","FBBFFBBRLR","BFBFBFBLLR","FBFFBFBRRL","FFFBBFFRRL","FFBFBBFRLR","BFFBFBBRLR","BFFFBFBRRR","BFBBBFFRRL","FBBBFBBLRR","FFFBFBFRLL","FFBBFFBRLL","FFFBBBBRLR","FBBBFBFLLR","BFBFBBBRRL","FBBBFFFRLR","FBFFFFFLRR","FFBFBFFRRR","FFFBFBBLRR","FBBFBFFLLL","FFBFFBFRLL","FFBBBFFLRR","FFBFBFBRRR","FFFBBBBLRL","FFBFBFFLRL","FBFBBFBLRL","FFFBFBFLRL","BFBFFBFLLR","BBFFFBFRLL","FFBBBBBLLR","BBFFFBBLLL","BBFBFFBRRR","BFBFFFBRLL","FFFBFBFRRL","FFBFFFFLRR","BBFFFFFLLL","FBBBFFFLRR","BFFFBBFRRR","FBBFBBBLLR","BFBFFFFRRL","FFBBFFBRRL","BFBFFBBLRL","BBFFFBBRRR","FFFBBFFRLL","BFFBBFBRRL","BFFFFFFLRR","BFBBBBFRLR","FBBFFBFRLR","BFFBBFFRRL","BFFBFFFRRL","FFFFBBBRLL","FBFBFFFRLR","BBFFBBFRLR","BBFFBBFRLL","BFFFBBFLRL","FBFFBFFLLR","BFBBFBFLRL","FBFBFBFRLL","BFBFBBBRLR","BFBFFBBLLR","FBBBBFBRLR","FBFFFFBLRR","FBFFBBFRRR","BBFFBFFLLL","FFFBFBFLLL","BFFBBFFRRR","FBBFBFFRRR","BBFFBBBRLR","FFFBFFBLRR","FBFBFBFRLR","BFBBBBBRRR","BFFBFBFLRL","BBFFBBBLLL","BBFFFFFLLR","BFBFFBFRLL","BFBBBBFRRL","BFBBFFBLRL","BFFBBFBLLL","BFFBBBBLLL","BFBFBBFLLL","FBFBFFFRLL","FBFBFBFRRL","BFFBFBBLLL","FFBBFBBRRR","FFFBFFBRRR","FBFFFBFLLR","FBFFFFFRRR","FBBFBBFLLL","FFFBFBBRLR","FBFFFFFLLL","FBBFFFFRRL","BFBBFFBLLR","BBFBFBBLRL","FBBFBBFLLR","BFBFFFFLRL","FFBBFBBLRR","BFBBBFBLRL","BFFBBFFRLR","FFFFBFFRLL","BFFBBFFLRR","FBBBFBBRLR","FBFBFFFLLL","FFBBBFFRRL","BFBBFBFRLR","FBFFFBBRLL","FFFBFFFLRL","BFBBBFBRRL","FBBFFFBRLR","FFBBBBFLLL","FBBBFFFLLR","FBFFBBFLLR","FFBFBBFRLL","BBFFBFBRLR","FBFFBBBLLR","FFBFBFBRRL","BFFBFFBLRL","FBFFBFBLLR","FFBFBFBLRR","FFBBFBFLRL","FFBBFFFRRL","BFBFBFFLLR","FBBBBBBRRR","BFBFFFFRLR","BFFBBBBRLL","FFFFFBBRRR","FFBFFFBRRR","FFFBFFFLLL","BFBFFFFRRR","FBBBBBFRRR","FBBBFFFRRL","FBBFFFFRLL","FFFFFBFLRR","FFBFBBBLLL","BFBFFBBRRL","FFFFBBFLRL","BFBBBFBRLL","FFBFFFBLRL","FBBFFFBRLL","BFFBBFBLRR","FFFBBFFLLR","FBBFFBBRRL","FFBFBBBRRR","FBFBFFBLRL","BFBBFBBRRR","BBFFFFBLRL","FBFBFBBLLR","BFFFBBBLRR","BFBFFFBRLR","FFFBBBBLLL","BFFBFFFLRR","BFBBFFFRRL","FBFFBBBLRL","FBFBBFFLRR","FBFFBBFRRL","BBFBFFBRLL"]
//
// var seatNumberArray=arr.map(function(x){
//     var subArray=x.split("");
//     var highNum = 127;
//     var lowNum=0;
//     var highSeatNum=7;
//     var lowSeatNum=0;
//     for (var i=0; i<subArray.length; i++){
//             if (subArray[i]==="F"){
//                 highNum-=((highNum+1)-lowNum)/2
//             } else if(subArray[i]==="B"){
//                 lowNum+=((highNum+1)-lowNum)/2
//             } else if(subArray[i]==="L"){
//                 highSeatNum-=((highSeatNum+1)-lowSeatNum)/2
//             } else if (subArray[i]==="R"){
//                 lowSeatNum+=((highSeatNum+1)-lowSeatNum)/2
//             }
//
//
//       //
//
//     }
//     console.log(highSeatNum);
//     console.log(lowSeatNum);
//     console.log(highNum);
//     console.log(lowNum);
//     return highNum*8+highSeatNum;
// })
//
// console.log(Math.max(...seatNumberArray))

// var arr= ["FBBFFBBLLL","FFBFFFBRLL","FFBBBBFRRL","FBFBBBBRLL","BFBBBBFLLR","FFFBBBBLRR","BFFFFFBLLL","BBFFFBFRRL","FFBFFFFLLR","BFFFBBBRRL","FBFBFFFLRL","FFFBBFBLRR","FBFBFBFLRR","FBBBBFBRRL","BFFBFFBRRR","FBBBFBBRLL","FBFFBFBRLR","BBFBFFFLRL","FFBFFFFRLR","FFBBFBFRRR","BFBBBFBLRR","FFBBFFFLRL","FBBBBFFRLR","FBBBBBBRLR","FFBFBFBLLL","BBFBFBBLLL","FFFFFBBRRL","FBFFBFBRRR","FFFBFFFRLL","BFBFBFFLLL","BFBFFBFLLL","FFFFBFFRRL","FBFFFFFRLR","FBBFFBBLLR","BFFFFFBLRL","BFBFFFBLLR","FBBBBBBLLL","BBFBFBFLLL","FFBFFBFLRR","BBFFFBBRLL","FFBFFFFLLL","FBBFFBFLLL","FFFBBBFRRR","BFBBFBFRLL","FBBFBFFRRL","FBFBBFBLRR","FFBBBBBRLR","FFBFBFFLLL","FBFFFBFRRL","BFFBBFFRLL","BFFBBFFLLR","BBFFBFFRRL","FBFBFBFLLR","BBFFBFBLRL","BFBFBFBLRR","FFBBFBBRRL","BFBBBFBRLR","FBFFFFBLLR","BFBFFBBLRR","BBFBFBFRRR","FFBFBBBRRL","BFBFBBFRLR","FBFBBBBRLR","BFFFFBBRRR","BBFFFBFLLR","FBFFFFBRRL","BBFFBFBLLL","BFFFBBBLLL","FFBFFFBLRR","BFBFBBBRRR","FBFFBFFRRR","BFFBFFBLLL","BFBBFFFLRL","BBFBFFBRLR","FBBFFFFLLL","FBFFFFBLLL","BBFFFFBRLR","BBFBFFBRRL","FBBFBFBRRR","FBFFBFFLRR","FFBBBFBLLR","FFFFFBFRRR","BFBBBBBLLR","BBFBFFFRLL","BFFBFBBLRR","BFFBBFBRLL","FBFFBFFRLR","FBFBBFFLLR","FFFFFBFRRL","FFBFFBFRLR","FBFBBBFLLL","FFBFBBFLLR","FBFFBBBRLR","FFFBFBFLLR","BFBBFBBLRL","BFFFFBFLLL","BFBFFBFLRL","BBFFBFBLLR","BFFFBFBRRL","BBFBFFBLLR","FFBBFFFRLL","FFFFFBBRLR","FFBFBFBRLL","FBBBBFBLRR","FFFBFFFRRL","FFFFBFFLRL","FFFFBFFRLR","BFFFFFFRRR","BBFFBFBRRL","BBFBFFFLRR","FFBBBFFLLR","FBFBFBBRLR","FBBFBBBLRR","BFFBBBFRLL","BFBBFBBLLL","FBFFFBBLLR","FBBBBFFRRL","BFBBFFFLLR","BFBBBFFLRL","FFBFFBBRLL","FBFBFFBRRR","FBBFBBBLRL","BFFFBFFLRL","BFFBFFBLRR","BFBFBBFLRL","FBFBBFFRLL","BFFFFBBRRL","FFBBBBBLRL","FBBFFBFRRL","BBFFBFBRLL","FBFFFFFLRL","FFFBFBFRLR","FFBBBBFLLR","FFFBBBFRLR","FFBBFFBRRR","FFFBFFBLRL","FBFBFBBLLL","BFFFFBBLRR","BBFFBBFLLR","FFFFFFBRLL","FBBBBBBLRR","FFFFBFBLLR","BBFFBBFRRL","BFBBBBBLRR","BFBBFBBLRR","BBFFFFBRRR","BFBBBFBLLR","BBFFBBBRRR","FBBFBFBRLL","FFFFFBBLRR","BBFBFBBLLR","FBFFFBFRLR","BBFFBFFLLR","BBFBFFFRLR","FFFFBFBLRL","FFBBBBBLRR","FBBBFFBLRR","FBBFBBFRLL","FBBFBFBRLR","FFBFBBBLRL","FBFFBBBLLL","FFFBBBBRRR","FFBFFBFLRL","BFFFBBFRLL","BFFFFBBLLR","BFFFFFBRRL","BFFBFBBRRL","FFBFFFBRRL","BFFBFFFLRL","BFFBBBFLLL","FFBBFFFLRR","FBBBFFBRLL","FFBBFFFRLR","BFBFBFFRLL","FFFFBBFRRR","BFBFBBFRRL","FBFBBBFLRL","FFFBFBBRLL","FFBBBFFLLL","BBFFFBBLRL","FBBBFFBRRR","BFBFBFBLLL","FFBFFBBRLR","FFBFBBBRLR","FFFFFFBRLR","BFFBBFFLRL","FFBFFBFRRR","FFBFBFFRLL","FBFBFFBLLR","FBFBFBBRRR","FFFBBFBRRR","FBBBBFBLLR","FFFFBFBRLR","FFFBBBFRLL","FBFFBFBLLL","FBFBFFFLRR","FFFBBFFLLL","BFBFFFFLLL","BBFFFBFLLL","FFFFBFBRRL","FFBBBFBRRL","BFBFFBBRLR","FFFBBFFLRL","FFFBFBBLLR","FFBBBFFRLR","FBBBBFBLRL","BFFFBBFLLL","BFFBFBFLLR","FBFFBBFLRR","BFFBBBBLLR","FBBBFFFRRR","FBFFBFBLRL","BFFFFFFRLR","FBBBBFBRRR","FFBBBBFLRL","BBFBFFBLRL","BFBFBBBLRR","FFFFFBFLLR","FBBFFBFLLR","BFFFFBBRLL","FFBFBBBLRR","FFFFBFFLLR","BBFFFFFRLR","FBBBBFFRLL","BFFFBFBLRR","FBFBBBBLLR","BFFBFFBRLL","BFBFBFFLRR","BFFFFBFLRR","FBBFFBFLRR","BFFBBFBLLR","FBBFFFBLRL","FBFBFBBRRL","FBFFBFFRRL","BFBBFBFLLR","FFFFBFFLRR","BFBFFFBLRL","BFFBBBBRRR","FFFFBBBLRR","FFFBBFBLLL","FFBBFBFLLR","BFBBFBFLLL","FBBFBFFLLR","FFFBBFFRRR","FFBBBBBRRR","FFFBFFFRLR","BFFBFBFLRR","FBFFBFBRLL","FFFFBFFLLL","FFBBBFFRLL","FBFBFFBLLL","FBFBBBFLLR","BFBBBFFRLL","BFBBBBBRRL","FFFFFFBRRL","FBBFBBFLRL","BFFBFBBRLL","FFFFFBFLRL","BFBFFFBLRR","BBFFFBFLRR","BFBFBBBLRL","FBFFFFBRLR","BFBFBBBLLL","BFFFFFFRRL","FBBFFFBRRR","FBBFBFFLRL","BBFFFFFLRL","BFFFFBBLRL","FBFBBFFRRR","FBBFFFFLRR","FFFBFFFLRR","FBFBBFFRRL","BFFBFFBRRL","BFFBFBFRRL","FFBBFBBLLR","FBFFBFFRLL","BFBFFBBLLL","FFBBFFBLLL","BBFFFBBRRL","BFFFFFFLLL","FFBBBBFRLL","BFBBBBFRRR","BFFBBBBRLR","FBFFBBFRLL","BBFBFFBLRR","FBFFBBBLRR","BBFBFFFRRL","BFBFFFFLRR","BFBFFBBRRR","FBBFFFBLLL","BFFBBBFRLR","BFFFFBFRLL","FBFBBBBRRL","BBFFBBFLRL","FBBBBFFLLR","BFBBFFBRRR","FBBFFBBLRR","FBBBBBBRRL","BBFFFBBLLR","BFBBBBFLRL","BFFBFFFRLR","FFFFBFBRRR","FFFFBFBRLL","BFFFFFFRLL","BFFFBBBRLL","FFFFFBBLLL","FBFFFBFLRR","FBFBFBFLLL","BFBBFFBRLL","BFFFBBFRLR","BFBBFFFRLL","FFFBBFBLRL","BBFFFFFLRR","BBFFFBFRLR","BFBBBBFLRR","FBFFFBBLLL","BBFFBFBRRR","FBFBFBBLRR","FBBFBFFRLR","FBFBBBBLLL","FFFBBFBLLR","FFFFBBBRRL","FFBBBBFRLR","FFFBFFBRRL","BFBBFBBLLR","FFBFFFFLRL","BFFBFBFRLR","FFBBFBBLLL","BFFBBBFLRL","FFFFFBFRLL","BFFBFFBRLR","BFFFBFFRRL","BFBFBBBRLL","BFFFFFBLRR","FBBFFBBRLL","FFFFBBBLRL","BBFFFFBLRR","BFBFBBBLLR","BFFFBFFRLR","BFBBFBFRRR","BFFBBBFLRR","FFBFBBFRRR","FBBBFBFRLR","BFBFFBBRLL","BBFFBFFRLL","BFFFBFBLLR","FBFBBFFLRL","BFFFFBBLLL","BFBBFBBRRL","BFFFBFFLLL","BFBBBFBLLL","FFBBFBFLRR","FFBBFBFRLR","BFBBBFFRRR","BBFBFFFLLL","BFFFFFBRLL","FBBFBBFRRR","BFFFBBFLRR","BFFBBBFRRL","FFBFFFFRRL","FBFFBFBLRR","FFBFBFBRLR","BBFFBFFLRR","BFFBBFFLLL","FFBBBFBRRR","BBFFBFFRRR","FBBFFFFRRR","FBBBBFFLRR","FBBFBBBRRR","FFBFBFBLRL","FBBFFFBLRR","FBFFBFFLRL","BFBBFFFRRR","FBFBBBFRLR","BFFFFFBRRR","FBFBFFFRRR","BBFFFBFLRL","FFBFBFBLLR","FBFFFBBRRL","FBBBFFBLLL","BFBFBFFRRR","FBFFBBBRLL","FFBFFBBLLR","FFBBFBBRLL","BFBFBBFRLL","BFBBFFBLLL","BFFBBBFRRR","BFBFBFBRRL","BFFFFFFLLR","BFFFBBBRRR","FBBBFBFRRR","FFFBFFBRLL","BFFFFBFLRL","FBFBBFFRLR","FBBBBBFLRL","FFFBBBFRRL","BFBFFFFLLR","FBFFFBBLRR","FBBFBBBRRL","FFFBBBFLRR","BFBFFBFRRL","BFFFBBFRRL","FBBBFFBLLR","FFBBFBBLRL","BBFBFBFRLR","FFBFFBFLLL","FFFFBFBLLL","BBFFFFBRLL","FBFFFBBRLR","FFBBBFFRRR","FFFBFFFRRR","FFBFBBBLLR","FFBFFFBRLR","FFBBBFBLRR","BFFBBBBLRL","BFFFFBFRRR","BBFBFBFRLL","FBFBBBFLRR","FFFFFBFLLL","BFBBBFFLLR","BFFBFBFRRR","BFBBFFBLRR","BBFFFBBRLR","FBBBBBBLRL","BFFBBBBRRL","FFBFBFFRLR","BFFFFFBLLR","BBFFFFBRRL","FFFBBFFLRR","BFFFFBFRRL","BBFFBFFLRL","BBFBFBFLRR","FBFBBBBLRR","BFFBBFBRRR","FFFBBBBRLL","FBFBBBFRRL","FFFFFFBRRR","BFFFFFFLRL","FFBBFFFLLR","FBBFBFBLLL","FBBFBBFRLR","BFFBFFBLLR","FBFBBFBRLL","FBFBFBFLRL","FFBFFFBLLR","FBBFFBBLRL","FFFBBBBLLR","BFFBBBBLRR","BFFBFBBLLR","FFBBFFBRLR","FBBBBFFLLL","BFFFFFBRLR","BFBBBBFRLL","FFFBBFFRLR","BFFFBFBLLL","BBFFFFFRRL","FBFFFFBRLL","BFBFBFBLRL","FBBFBBFLRR","FFBFBBFLRR","FFBFBFFLRR","FFBFFFFRLL","BFBFBFBRRR","FBBBBFFLRL","FFBFFFBLLL","BFBBBFFRLR","FBFBFFBRLL","FBBBBBFRRL","FBFFBFFLLL","BBFFBBBLLR","BFFFBFFRRR","BBFFBBBRLL","BBFFFBBLRR","FBBFBBBRLR","BFBFBBFRRR","FBFFBBFLRL","FFFFBBFLRR","BFFFBFBRLL","BBFFFFFRLL","FFFBFBFRRR","BFBBBBFLLL","FFBBBFBRLR","FFFFBBBRRR","BFBFFBFRLR","FBFFBBFLLL","FFBFFBBLRR","FBFBFFBLRR","FFBFFBBRRL","FFFBBBBRRL","BFFBFBBLRL","BBFFBBBLRR","FFFBBFBRLL","FFFBFBBLRL","BFBFFFBRRL","FBBFFFFLLR","BBFBFFBLLL","BFBFBBFLLR","BFFBFBBRRR","FBFFFFFLLR","FFBBBFFLRL","FBFFBBFRLR","BFFFBFBLRL","FBFBBBFRRR","FFBFFBFRRL","FBFBBFBRLR","BFBFBFFRLR","FBFFBBBRRR","BBFBFFFLLR","FBBFBBBLLL","FFBBBFBLLL","FFBFFFFRRR","BFFBFBFLLL","BFFBBBFLLR","FBBBBBBRLL","FBBFFBFRLL","FFFBFFBLLR","FFBBFFBLRL","BFBBFBFLRR","BFBFFFBLLL","FBFFFBBRRR","FFBFBFFLLR","FBFFBBBRRL","FBBBBFBLLL","FFFFFBBLLR","FBBFBFBLRL","BFBBFBBRLL","FFFFBFBLRR","BBFFBBFLLL","FBBBFBFRLL","FBFBBFBLLL","BBFBFBFLLR","BFBFBFBRLR","FFFFFBFRLR","FFFFFBBRLL","FBFBFBFRRR","FBBBFBFLRL","BBFFBBBLRL","FFBBBBBRLL","FBBBFBBRRR","BFFFBBBLLR","BFBBBBBRLL","FFFFFBBLRL","BBFFBFFRLR","BFBFBFBRLL","FFFFBBFLLL","BFBFBFFRRL","FFBBFFBLLR","BFBBFFFLLL","BFBBFFBRLR","FBFBFFBRLR","FBFFFBFRLL","FBBFBFFLRR","FBBFFBFRRR","BFBFFFFRLL","BFFFBBBLRL","FBFBBBBRRR","BBFFBBFLRR","FBBBBFBRLL","BBFFBBBRRL","BFBBBFFLLL","FBFFFFBLRL","FBFFFFFRRL","BFBBBFFLRR","FBBFBFBLRR","FBFBFBBLRL","FFBFBFFRRL","BFFBBFBRLR","FFBFFBBLLL","FBBBFBBLLL","FBBBFBBRRL","FBBBFBBLLR","FBFFFBFLLL","FBBBFFBRLR","FBBFBBBRLL","FBBFFFBLLR","FFFBFBBRRR","FBBFFFFLRL","BFFFFBFRLR","FBBBFFFLLL","FFBBFBFLLL","BBFFFFFRRR","BBFFFBFRRR","FFBFFBBLRL","FBBBFFBLRL","FFBBFBFRRL","FBFFFBFLRL","FBBBFFFLRL","FFFFBBBRLR","FFBBFBBRLR","FBFBFFBRRL","BFBFFBFRRR","BFBFBFFLRL","BFFBFFFLLL","FBBFBFBRRL","FFBBBFBLRL","BFFFFBFLLR","FBBBFBFLLL","FBFFFBBLRL","FBBFFFBRRL","FBBBBBFLLR","FBBBFBFRRL","FFFBBFBRRL","FBBBFFBRRL","FBFBFBBRLL","BFBBBBBLLL","FBFBFFFLLR","FFFBFFBRLR","BBFFBFBLRR","BFFFBFFLLR","FBBFBBFRRL","FFBBBBBLLL","FBBFBFFRLL","FFFBBBFLRL","FFBBBBFLRR","FBFFFFFRLL","BBFFFFBLLR","FFFFBBFRRL","FFBBBBFRRR","FBBBFBBLRL","BFFBBFBLRL","BFBBFFFRLR","FFFBFBBRRL","BBFBFBFRRL","FFFBBBFLLR","BFFFFBBRLR","BFFBFFFLLR","BBFBFFFRRR","FFFFBBFRLR","BFBBBFBRRR","FBFBBBBLRL","FFFFBBFLLR","FBFBBBFRLL","BFBBFBBRLR","FFBBFFFRRR","FFBBBFBRLL","FBBFFBFLRL","BFBFFFBRRR","BFFFBBBRLR","FFFFBFFRRR","FFBBFFBLRR","FBBFBFBLLR","FFFBBBFLLL","FBBBBBFLLL","FFFFBBBLLL","FFFBFFBLLL","BFBBBBBRLR","BFBFBBFLRR","FBFBBFBRRR","BFBBFFFLRR","FFBBFFFLLL","BFFFBBFLLR","FFBBFBFRLL","FBBBFFFRLL","FFFBBFBRLR","BFBFFBFLRR","FBFBBFBLLR","FBFFFFBRRR","FFFBFBBLLL","FBFBFFFRRL","FFFBFBFLRR","FFBBBBBRRL","FFFBFFFLLR","BFFFBFFRLL","BFBBBBBLRL","FBBBFBFLRR","FFFFBBBLLR","BFFFBFFLRR","FBBBBBFLRR","FBBBBBFRLR","BFFBFFFRRR","FFBFBBFLRL","FFBFBBFRRL","FFBFFBBRRR","FFFFBBFRLL","BBFBFBFLRL","FBFBBFFLLL","BBFFFFBLLL","FBBBBFFRRR","BFFBFBFRLL","BFBBFBFRRL","FFBFBBFLLL","FBFFFBFRRR","FFBFFBFLLR","BFBBFFBRRL","FBBFFBBRRR","FFBFBBBRLL","FBBBBBBLLR","FBFBBFBRRL","BFFBFFFRLL","BBFFBBFRRR","FBBBBBFRLL","FBBFFFFRLR","FBBFFBBRLR","BFBFBFBLLR","FBFFBFBRRL","FFFBBFFRRL","FFBFBBFRLR","BFFBFBBRLR","BFFFBFBRRR","BFBBBFFRRL","FBBBFBBLRR","FFFBFBFRLL","FFBBFFBRLL","FFFBBBBRLR","FBBBFBFLLR","BFBFBBBRRL","FBBBFFFRLR","FBFFFFFLRR","FFBFBFFRRR","FFFBFBBLRR","FBBFBFFLLL","FFBFFBFRLL","FFBBBFFLRR","FFBFBFBRRR","FFFBBBBLRL","FFBFBFFLRL","FBFBBFBLRL","FFFBFBFLRL","BFBFFBFLLR","BBFFFBFRLL","FFBBBBBLLR","BBFFFBBLLL","BBFBFFBRRR","BFBFFFBRLL","FFFBFBFRRL","FFBFFFFLRR","BBFFFFFLLL","FBBBFFFLRR","BFFFBBFRRR","FBBFBBBLLR","BFBFFFFRRL","FFBBFFBRRL","BFBFFBBLRL","BBFFFBBRRR","FFFBBFFRLL","BFFBBFBRRL","BFFFFFFLRR","BFBBBBFRLR","FBBFFBFRLR","BFFBBFFRRL","BFFBFFFRRL","FFFFBBBRLL","FBFBFFFRLR","BBFFBBFRLR","BBFFBBFRLL","BFFFBBFLRL","FBFFBFFLLR","BFBBFBFLRL","FBFBFBFRLL","BFBFBBBRLR","BFBFFBBLLR","FBBBBFBRLR","FBFFFFBLRR","FBFFBBFRRR","BBFFBFFLLL","FFFBFBFLLL","BFFBBFFRRR","FBBFBFFRRR","BBFFBBBRLR","FFFBFFBLRR","FBFBFBFRLR","BFBBBBBRRR","BFFBFBFLRL","BBFFBBBLLL","BBFFFFFLLR","BFBFFBFRLL","BFBBBBFRRL","BFBBFFBLRL","BFFBBFBLLL","BFFBBBBLLL","BFBFBBFLLL","FBFBFFFRLL","FBFBFBFRRL","BFFBFBBLLL","FFBBFBBRRR","FFFBFFBRRR","FBFFFBFLLR","FBFFFFFRRR","FBBFBBFLLL","FFFBFBBRLR","FBFFFFFLLL","FBBFFFFRRL","BFBBFFBLLR","BBFBFBBLRL","FBBFBBFLLR","BFBFFFFLRL","FFBBFBBLRR","BFBBBFBLRL","BFFBBFFRLR","FFFFBFFRLL","BFFBBFFLRR","FBBBFBBRLR","FBFBFFFLLL","FFBBBFFRRL","BFBBFBFRLR","FBFFFBBRLL","FFFBFFFLRL","BFBBBFBRRL","FBBFFFBRLR","FFBBBBFLLL","FBBBFFFLLR","FBFFBBFLLR","FFBFBBFRLL","BBFFBFBRLR","FBFFBBBLLR","FFBFBFBRRL","BFFBFFBLRL","FBFFBFBLLR","FFBFBFBLRR","FFBBFBFLRL","FFBBFFFRRL","BFBFBFFLLR","FBBBBBBRRR","BFBFFFFRLR","BFFBBBBRLL","FFFFFBBRRR","FFBFFFBRRR","FFFBFFFLLL","BFBFFFFRRR","FBBBBBFRRR","FBBBFFFRRL","FBBFFFFRLL","FFFFFBFLRR","FFBFBBBLLL","BFBFFBBRRL","FFFFBBFLRL","BFBBBFBRLL","FFBFFFBLRL","FBBFFFBRLL","BFFBBFBLRR","FFFBBFFLLR","FBBFFBBRRL","FFBFBBBRRR","FBFBFFBLRL","BFBBFBBRRR","BBFFFFBLRL","FBFBFBBLLR","BFFFBBBLRR","BFBFFFBRLR","FFFBBBBLLL","BFFBFFFLRR","BFBBFFFRRL","FBFFBBBLRL","FBFBBFFLRR","FBFFBBFRRL","BBFBFFBRLL"]
//
// var seatNumberArray=arr.map(function(x){
//     var subArray=x.split("");
//     var highNum = 127;
//     var lowNum=0;
//     var highSeatNum=7;
//     var lowSeatNum=0;
//     for (var i=0; i<subArray.length; i++){
//         if (subArray[i]==="F"){
//             highNum-=((highNum+1)-lowNum)/2
//         } else if(subArray[i]==="B"){
//             lowNum+=((highNum+1)-lowNum)/2
//         } else if(subArray[i]==="L"){
//             highSeatNum-=((highSeatNum+1)-lowSeatNum)/2
//         } else if (subArray[i]==="R"){
//             lowSeatNum+=((highSeatNum+1)-lowSeatNum)/2
//         }
//
//
//         //
//
//     }
//     // console.log(highSeatNum);
//     // console.log(lowSeatNum);
//     // console.log(highNum);
//     // console.log(lowNum);
//     return [highNum,highSeatNum]
// })
// var seatMapArray=[]
// for (var i =0; i<128; i++) {
//     var rowArray = [];
//     for (var j = 0; j < seatNumberArray.length; j++) {
//         if (i === seatNumberArray[j][0]) {
//             rowArray.push(seatNumberArray[j][1])
//         }
//
//     }
//     seatMapArray.push(rowArray);
// }
// for (var k=0; k<seatMapArray.length; k++){
//     //console.log(seatMapArray[k].length)
//     if (seatMapArray[k].length===7){
//         seatMapArray[k]=seatMapArray[k].sort();
//         for (var l=0; l<seatMapArray[k].length; l++){
//             //console.log(seatMapArray[k][l])
//             if (l!==seatMapArray[k][l]){
//                 console.log(l,seatMapArray[k][l])
//             }
//         }
//     }
// }
// console.log(69*8+5)
// const fs = require('fs');
// const report = fs.readFileSync('../../day6 adventOfCodeInput.txt', 'utf8');
// const answers = report.split('\n\n');
// const sortedAnswers=answers.map(function(x){
//     return x.split("\n");
// })
// const totalAnswers= sortedAnswers.reduce(function(sum,x,i){
//     var groupArray=[];
//     for (var i=0; i<x.length; i++) {
//         for (var j = 0; j < x[i].length; j++) {
//
//             if (groupArray.indexOf(x[i][j]) === -1) {
//                 console.log(x[i][j],groupArray.indexOf(x[i][j]))
//                 groupArray.push(x[i][j]);
//             }
//         }
//     }
//
//     console.log(groupArray)
//     return sum+groupArray.length;
//
// },0)
// console.log(totalAnswers)

//first guess 13935
//second guess 2827

const fs = require('fs');
const report = fs.readFileSync('../../day6 adventOfCodeInput.txt', 'utf8');
const answers = report.split('\n\n');
const sortedAnswers=answers.map(function(x){
    return x.split("\n");
})
const totalAnswers= sortedAnswers.reduce(function(sum,x,i){
    var alphabet='abcdefghijlklmnopqrstuvwxyz';
    var alphabetObj={};
    for (var i =0; i<alphabet.length; i++){
        alphabetObj[alphabet[i]]=0;
    }

    var groupArray=[];
    for (var i=0; i<x.length; i++) {
        for (var j = 0; j < x[i].length; j++) {
            ++alphabetObj[x[i][j]];
            }
        }
    var letterCount=Object.values(alphabetObj);
    var approvedLetters=[];
    for (var k=0; k<letterCount.length; k++){
        if (letterCount[k]===x.length){
            approvedLetters.push(letterCount[k])
        }
    }
    console.log(x)
    console.log("size of group is"+x.length);
    console.log(alphabetObj);
    console.log("number of letters everyone voted yes for"+approvedLetters.length)
    return sum+approvedLetters.length;

},0)
console.log(totalAnswers)
console.log(sortedAnswers)
//first guess 3177 too low
//second guess 3178 too low, checked to see
//next will try 3177 + 16 = 3193. Very last array item wasn't working due to extra parenthesis for end of page.