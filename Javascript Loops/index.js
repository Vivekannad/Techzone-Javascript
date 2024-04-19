// =====================Loops========
/* Loops are used to repeat the block of code number of times
There are 3 basic types of loops
1) For Loop
2) Whille loop
3) Do while loop
But, they all work works the same with the difference fo syntax
*/

//For Loop
/*syntax   for(initialization; condition ; increament/decreament){
    loop body
}
initialization only occurs once and then stop itself , after initialization it goes to condition if condition is true,  then it moves to loop body after loop body it goes to increamnet/decreament then to condition and then loop body and the cycle continues like until the condition is not false
*/
//Print numbers from 0 to 5.
/*
for(let i = 0; i < 6; i++){
    // console.log(i);
}

//Print even numbers from 0 to 10;
for(let i = 0; i <=10; i+=2){
    // console.log(i);
};

//Print odd numbers from 1 to 9;
for(let i = 1; i <= 10; i+=2){
    // console.log(i);
}



//While loop
//syntax        while(condition){loop body};
//You have to initialize outside and increament/ decreament inside.

//Print numbers from 0 to 5.
let i = 0;
while(i<=5){
    console.log(i);
    i++;
}

//Print even numbers from 0 to 10;
let im = 0;
while(im<12){
    console.log(im);
    im+=2;
} ;

//Print odd numbers from 1 to 9;
let odd = 1;
while(odd<11){
    console.log(odd);
    odd+=2
};


//Do while Loop
//In the do while loop we have loop body before the conditionand that's why even if the condition is false,it will be displayed once.
i=6;
do{
console.log(i);
i++;
}while(i<6);
*/
let num = '';
/*
for(let i = 1; i<=3; i++){
    for(let j = 1; j<=i; j++){
        num+=i;
    }
    num+='\n'
}
console.log(num)
*/
/*
for(let i = 1; i<=3; i++){
    for(let j = 1; j<=i; j++){
        num+='*';
    }
    console.log(num);
    num = '';
}
*/
/*
let i = 1;
while(i<=3){
    let j = 1;
    while(j<=i){
        num+=i;
        j++;
    }
    num+='\n';
    i++;
}
console.log(num)
*/

/*
for(let i = 0; i<=10; i+=2){
    console.log(i);
}
let i = 0;
while(i <=10){
    console.log(i);
    i+=2;
}
*/
let number = 5;
let nextNumber;
for(let i = 0; i<=10; i++){
    nextNumber = number * i;
    console.log(number + 'x' + i + '=' + nextNumber)
}