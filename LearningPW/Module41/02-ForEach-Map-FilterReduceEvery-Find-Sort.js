let arr = [2, 3, 4] // ForEach
arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})
/* output- 0 2 [ 2, 3, 4 ]
           1 3 [ 2, 3, 4 ]
           2 4 [ 2, 3, 4 ]  */


 //  for arrow function.  
arr.forEach((element, index, arr) => {   //ForEach
    console.log(index, element, arr);
})
/* output- 0 2 [ 2, 3, 4 ]
           1 3 [ 2, 3, 4 ]
           2 4 [ 2, 3, 4 ]  */


const Heros = ["setupati", "vijaya","dhruva", "rashmika"]

Heros.forEach((element, index) => {            //ForEach
    console.log(index,element.toUpperCase())
})
/*output:-
0 SETUPATI
1 VIJAYA
2 DHRUVA
3 RASHMIKA */


arr.map(function(element, index, arr){  //Map
    console.log(element,index, arr);
})
/*he consider 1st arry to be exicute output- 
2 0 [ 2, 3, 4 ]
3 1 [ 2, 3, 4 ]
4 2 [ 2, 3, 4 ]  */

Heros.map((element) => console.log(element.toUpperCase())); //Map
/* output-
SETUPATI
VIJAYA
DHRUVA
RASHMIKA */

//Filter
console.log(Heros);
const HerosWithA = Heros.filter((element) => {
   return element.endsWith('a');
})
console.log(HerosWithA);
/* who have the element having last "a" output-
[ 'vijaya', 'dhruva', 'rashmika' ] */


//Shopping Cart            //OR
const cartBill = [20, 30, 50]
const sumCartBill =  cartBill.reduce((previous, current) => previous+current,0)
console.log(sumCartBill);
// output - 100



const gameScore = [ 200, 300, 310, 250, 150]
// check if all values are numbers
console.log(typeof gameScore[1]); //output- number
const gameScoreCheck = gameScore.every((v) => typeof v === "number")
console.log("check:", gameScoreCheck); // output- true


// find score above 200
const above200 = gameScore.find((score) => score > 200 )
console.log(above200); //output- 300

//findIndex
//some
//sort