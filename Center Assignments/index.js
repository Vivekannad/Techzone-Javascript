let number1 = null;
let number2 = null;
let number3 = null;
let finalNum = null;

/*
number1 = 10;
number2 = 15;
number3 = 20;
//Qno:1
finalNum = number1 + number2;
console.log(finalNum);

finalNum = number1  - number2;
console.log(finalNum);

finalNum = number3  * number2 * number1;
console.log(finalNum);

finalNum = number3 / number1;
console.log(finalNum);

//Qno:2
let a = 22;
let b = 12;
let c = a%b;
console.log(c);

//Qno:3
a = 18;
c = ++a;
console.log(c);

//Qno:4;
a = 18;
a-=2;
console.log(a);
*/

let grade = null;
let totalMarks = null;
let num1= null;

//  Assignment no:2
    //Qno:1
    /*
    prompt('Enter Your Name!');
    prompt('Your Subject');
    number1 = prompt('Your Total marks out of 500'); totalMarks = 500;
    if(number1 >=0 && number1 <= 500){
        finalNum = (number1 *100) / totalMarks;
        if(finalNum >= 80){
            grade = 'A'
        } else if(finalNum >= 60){
            grade = 'B'
        } else if (finalNum >=40){
            grade = 'C'
        } else {
            grade = 'F'
        }
        console.log(grade)
        alert('You have got ' + finalNum + '% with grade ' + grade);
    } else if(number1 < 0 || number1 > 500){
        alert('Enter Valid number of marks!')
    } else{
        alert('Invalid Input!')
    };
    */

    //Qno:2
    /*
    num1 = +prompt('Enter a number');
    number2 = +prompt('Enter 2nd number');
    number3 = +prompt('Enter third number');
    // finalNum = Math.max(num1,number2,number3);
        if(num1 > number2 && num1 > number3){
            console.log('The greatest number is ' + num1)
        } else if (number2 > number3 && number2 > number1 ){
            console.log('The greatest number is ' + number2)
        } else {
            console.log('The greatest number is ' + number3)
        }
        */

    //Qno:3
    /*
    num1 = +prompt('Enter hypoteneuse of a triangle');
    number2 = +prompt('Enter the first leg of a triangle');
    number3 = +prompt('Enter 2nd leg of triangle');

    if(typeof num1,number2,number3 === Number){
    if(num1 === number2 && num1 === number3 && number3 === number2){
        alert('Equilateral Triangle!')
    } else if(num1 === number2 && num1 !== number3 || num1 === number3 && num1 !== number2 || number2 === number3 && number2 !== num1){
        alert('Isosceles Triangle')
    } else {
        alert('Scalene triangle');
    }
    } else{
        alert('Invalid Input')
    }
    // switch(num1){
    //     case number2 && number3:
    //         alert('Equilateral  triangle');
    //         break;
    //     case number2:
    //         alert('Isocecdcles triangle');
    //         break;
    //     case number3:
    //         alert('Isocessl  triangle');
    //         break;
    // }
    */

    //Qno:4
    /*
    num1 = +prompt('Enter Starting number');
    number2 = +prompt('Enter ending number');
    number3 = +prompt('Enter your number');*/
    /*
    for(let i = num1; i <= number2; i++){
        finalNum = i;
        if(number3 === finalNum){
            console.log('number is present');
            break;
        }
    }
    if(number3 !== finalNum){
        console.log('not present')
    }
    */
    //another appproach
    /*
    if(number3 >= num1 && number3 <=number2){
        console.log('number is present')
    } else {
        console.log('number not present')
    }
    */
    

//Assignment no:3
//Qno:1
/*
num1 =0;
 for(let i = 1; i <= 100; i++){
    num1+=i;
};
    console.log(num1);
    */
// number2 = 2;
// console.log(num1)
// num1+=number2;
// console.log(num1)
// number2++;
// num1+=number2;
// console.log(num1);
// number2++;
// num1+=number2;
// console.log(num1)

//Qno:2
/*
// num1 = 5000;
for(let i = 100; i >= 10; i--){
    // console.log(num1-=i);
    console.log(i);
}
*/

//Qno:3
/*
num1 = prompt('Enter the factorial number');
for(let i = num1-1; i >= 1; i--){
      num1 *= i;
    }
    console.log(num1);
*/
//Qno:4
/*
num1 = +prompt('Enter the table number');
for(let i = 1; i<=10; i++){
   finalNum =  num1*i;
    console.log(num1 + 'x' + i + '=' + finalNum);
};
*/
/*
number2 = 1;
for(let i = num1; i<=num1*10; i+=num1){
    console.log(num1 + 'x' + number2 + '=' + i);
    number2++;
}
*/
// num2 = 1;
// finalNum = num1 * num2;
// console.log(finalNum)
// num2++;
// finalNum = num1*num2;
// console.log(finalNum)
// num2++;
// finalNum = num1*num2;
// console.log(finalNum)
// num2++;
// finalNum = num1*num2;
// console.log(finalNum)