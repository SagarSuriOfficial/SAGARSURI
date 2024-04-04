const powerTwo = (n) =>{
    return n**2;
}
console.log("The rootSquare of 25 is - ", powerTwo(25));
// square of the root "arrow function" output - The rootSquare of 25 is -  625



let powerCube = (powerTwo, n) => {
    return powerTwo(n) * n;
}
console.log("The PowerCube of 3 is -", powerCube(powerTwo, 3));
// cube square arrow function output- The PowerCube of 3 is - 27


function sayHello(){
    return() => {
        console.log("This is sayHello function");
    }
}
let hiHello = sayHello();
hiHello();
// output - This is sayHello function



const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p =>{
            return p + m + n;
        }
        return twoFun
    }
    return oneFun
}
console.log(higherOrder(2)(3)(4)) //output - 9




const myNums = [2, 3, 4, 5, 6, 7]

const sumArray = arr => {
    let total = 0
    arr.forEach(function(element){
        total += element
    });
    return total
}
console.log(sumArray(myNums)); //output - 27



function continuesly(){
    console.log("Welcome ! for oneSecond", Math.random());
}
setInterval(continuesly, 1000); //continuesly running after 1 sec not stopping printing

function foronlyonetime(){
    console.log("Welcome❁❁❁❁❁❁❁❁❁❁❁❁❁❁❁❁", Math.random());
}
setTimeout(foronlyonetime, 5000); //run one time only when 5sec is done. stop printing