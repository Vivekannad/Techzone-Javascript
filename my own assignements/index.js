// Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign
let num1 = 3;
let num2 = 5;
let num3 = -6;

// if(num1 > 0){
//     console.log( num1 + '+ is the symbol')
// } else if(num1 < 0){
//     console.log(num1 + '- is the symbol')
// }
// if(num2 > 0){
//     console.log( num2 + '+ is the symbol')
// } else if(num2 < 0){
//     console.log(num2 + '- is the symbol')
// }
// if(num3 > 0){
//     console.log( num3 + '+ is the symbol')
// } else if(num3 < 0){
//     console.log(num3 + '- is the symbol')
// }
// if(num1 < 0 || num2 < 0 || num3 < 0){
//     alert('- is the symbol')
// } else{
//     alert('+ is the symbol');
// };
/*
num1 = +prompt('Enter the number');
num2 = +prompt('Enter the number');
num3 = +prompt('Enter the number');
if(num1 > num2 && num1 > num3 && num2 > num3){
    console.log('First Case first number ' + num1,num2,num3);
}else if(num1 > num2 && num1 > num3 && num2 < num3){
    console.log('Second case first number ' + num1,num3,num2);
} 
else if(num1 < num2 && num1 > num3 && num2 > num3){
    console.log('Third case seccond number ' + num2,num1,num3);
}else if(num1 < num3 && num1 > num2 && num2 < num3){
    console.log('Fourth case third number ' + num3,num1,num2);
} else if(num1 < num3 && num1 < num2 && num2 < num3){
    console.log('Fifth case third number ' + num3,num2,num1);
} else if(num1 < num3 && num1 < num2 && num2 > num3){
    console.log('Sixth case second number' + num2,num3,num1)
} else if(num1 === num2 && num1 === num3 && num2 === num3){
    console.log('ALl equal');
}
*/
/*
for(let i = 0; i<=15;i++){
    if( i % 2 === 0 ){
        console.log(i + 'is even');
    } else{
        console.log(i + 'is odd');
    }
}
*/
/*

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('Fizzbuzz');
    } else if(i % 3 === 0){
        console.log('Fizz');
    } else if(i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
*/
/*
let str = '';
for(let j = 1; j <=4; j++){
for(let i = 1; i<=j; i++){
    str+='*';
}
// console.log(str);
// str='';
str+='\n';
};
console.log(str);
*/
/*
num1 = 0;
for(let j = 1; j<=5; j++){
for(let i = 1; i<=j; i++){
    num1 +=j;
}
num1+='\n';
}
console.log(num1);
*/

/*
let task = [2,3,4,5];
let final = 0;
for(let i =1; i < task.length; i++){
 final =    task[i-1] += task[i] ;
};
console.log(final);
*/
// final = task[0] + task[1] + task[2] + task[3];
// console.log(final)