//=========Functions
/*
Functions are used to re-use the piece of code. to optimize the code.
function reduce the redundancy of the code.
there are three types of functions.
1)regular functions.
2)Function expression.
3)Arrow functions.
*/

//1)regular functions
// let number1 = +prompt('Enter 1st number');
// let number2 = +prompt('Enter 2nd number');
/*    
function functionName(param1,param2){    //Declaration
        let ans = param1 + param2;  //parameters are used when you have to recieve the input the user.
        console.log(ans);
    }
    functionName(number1,number2); //Function calling
                //this sends the argument to parameter.
*/
//2) Function Expression
/*
let functionExpression = function functionName(param1,param2){   
    let ans = param1 + param2; 
    console.log(ans);
}
functionExpression(number1,number2);
*/
//3) Arrow functions
/*
let functionName = (param1,param2) => {
    let ans = param1 + param2;
    console.log(ans)
}
functionName(number1,number2)
*/

let input = 10;
function unitConvert(kilometer){
   const result =  kilometer * 0.6;
    return result;
}
const finalResult = unitConvert(input)
console.log(finalResult)