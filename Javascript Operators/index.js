// ====================Javascript Operators======================
//the numbers in the expression are called 'Operands';
//The opearation which is to be performed between operands is done by 'Operators'.
    let number1 = null;
    let number2 = null;
    let number3 = null;
    let number4 = null;
    let string = null;
    let finalNumber = null;
    //1) Aithmethic Operators
     // +,-,*,/,%,++,--,**
     /*  
        number1 = 2;
        number2 = 5;
        finalNumber = number1 + number2;
        console.log(finalNumber);

        finalNumber = number2 - number1;
        console.log(finalNumber);

        finalNumber = number1 * number2;
        console.log(finalNumber);

        finalNumber = number2/number1;
        console.log(finalNumber);

        //(%)Modulus return the remainder without a decimal in the quotient.
        finalNumber = number2%number1;
        console.log(finalNumber);

        //++ increament increases the number by  1.
        //if it is added before the number it is 'pre-increament' and if in the end 'post-increament'
        finalNumber = ++number2 - number1;
        console.log(finalNumber);
        number1++;
        console.log(number1);

        //-- decreament decreases the number by 1.
        //if added before the number 'pre-decreament' if after 'post-decreament'.
        number2 = 5;
        finalNumber = --number2;
        console.log(finalNumber);
        number2--;
        console.log(number2);

        //(**) exponentiation it finds the roots of the numbers.
            number1 = 6;
            number2 = 9;
            finalNumber = number2 ** 3;
            console.log(finalNumber) ;
            finalNumber = number1 ** 2;
            console.log(finalNumber);
            */

        /*
    // 2) Comparison/Relational operators.
        //These operatos always give result in boolean.
        // >,<,<=,>=,==,===,!=,!==
            number2 = 10;
            number1 = 15;
            number3 = 20;
            number4 = 20;
            // '>' means greater than
            finalNumber = number2 > number1;
            console.log(finalNumber);
            finalNumber = number1 > number2;
            console.log(finalNumber);

            //'<' means lesser than
            finalNumber = number2 < number1;
            console.log(finalNumber);
            finalNumber = number1 < number2;
            console.log(finalNumber);

            //'<=' means lesser than or equal to.
            finalNumber = number2 <= number1;
            console.log(finalNumber);
            finalNumber = number3 <= number4;
            console.log(finalNumber);

            //'>=' means greater than or equal to.
            finalNumber = number1 >= number2;
            console.log(finalNumber);
            finalNumber = number3 >= number4;
            console.log(finalNumber);

            //'=='(weak operator) equal to value but not to data type.
            finalNumber = number3 == number4;
            console.log(finalNumber);
            number3 = '20';
            finalNumber = number3 == number4;
            console.log(finalNumber);

            // '===' (strict operator) equal to value and data type.
            number3 = '20';
            finalNumber = number3 === number4;
            console.log(finalNumber);
            number3 = 20;
            finalNumber = number3 === number4;
            console.log(finalNumber);

            // '!=' (weak operator) not equals to value but not type.
            number1 = 15;
            number2 = 17;
            number3 = 15;
            number4 = '17';
            finalNumber = number2 != number1;
            console.log(finalNumber);
            finalNumber = number3 != number1;
            console.log(finalNumber);
            finalNumber = number4 != number2;
            console.log(finalNumber);

            // '!==' (strong operator) not equals to value and type.
            number1 = 15;
            number2 = 17;
            number3 = 15;
            number4 = '17';
            finalNumber = number4 !== number2;
            console.log(finalNumber);
            finalNumber = number1 !== number3;
            console.log(finalNumber);
            
            */

    //3) Logical Operators.
     //Logical operators are used in between comparison operators.
        // &&, || , !.
        /*
            number1 = 10;
            number2 = 20;
            number3 = 30;
            number4 = 30;

            //&& (AND operator) it is used when you have to meet all conditions.
            finalNumber = (number1 < number2) && (number3 === number4);
            console.log(finalNumber)//output : true.
            //if either of the conditions is false, the output will be false.
            finalNumber = (number1 < number2) && (number3 !== number4);
            console.log(finalNumber)//output : false.

            // || (OR operator) it is used when you have to meet only one condition.
            finalNumber = number1 > number2 || number4 === number3;
            console.log(finalNumber) //output: true
            finalNumber = number4 !== number2 || number1 === number2;
            console.log(finalNumber);

            // ! (NOT operator) it reverses the output.
            finalNumber = ((number1 > number2) || (number4 === number3));
            console.log(finalNumber)//output: true
            console.log(!finalNumber)//output: false
            finalNumber = !((number1 > number2) || (number4 === number3));
            console.log(finalNumber)//output: false.

            */

    //4) Assignment Operators.
     /*
        // =,+=,-=,*=,/=,%=,**=
            number1 = 10;
            number2 = 50;
            number3 = 14;
            number4 = 17;
           //Simple Assignment Operator '=';
            //to assign something value to something.
            string = 'Assigned with simple assignment operator'

            //Addition Assignment Operator '+='
            //This is like shorthand for this.
            // number2 = number2 + 2;
            number2+=2;
            console.log(number2);
            //Both are same This is like shorthand

            //SUbtraction Assignment operator
            //This is like shorthand for this.
            // number1 = number1-2;
            number1-=2;
            console.log(number1);

            //Multiplication Assignment Operator '*='
            //This is like a shorthand for this
            // number3 = number3 * 2;
            number3 *= 2;
            console.log(number3);

            //Division Assignment Operator '/='
            //This is like a shorthand for this
            // number4 = number4 /2;
            number4 /=2;
            console.log(number4);

            //Modulus Assigment Operator '%='
            //This is like a shorthand for this.
            // number2 = number2 % 5;
            number2 %= 5;
            console.log(number2);

            //Exponential Assigment Operator '**='.
            //This is like a shorthand for this.
            // number3 = number3 ** 2;
            number3 **= 2;
            console.log(number3);

            //Logical AND assignment operator '&&='.
            //This does if first value is truthy then re-assignment the variable with given another value. if value is falsy then it does not do anything.
            number1 = 28;
            number1 &&= 34;
            console.log(number1);

            //Logical OR assignment operator '||='.
            //This re-assigns the new value if first value is falsy if it is truthy it does not do anything.
            number1 ||= 2;
            console.log(number1);
            number1 = 0;
            number1 ||= 5
            console.log(number1);

            */
       
    //5) Concatenation Operator // + is the concatenator
     /*  let anotherString = null;
        let finalString = null;
        //This is used to concatenate strings
        string = 'Hello'
        anotherString = 'Morning';
        finalString = string + anotherString;
        console.log(finalString);
        //if string concatenates with number, the number also becomes string;
        number1 = 20;
        finalString = string + number1;
        console.log(finalString);
        */

    // 6) Negation Operator // '-' is the negation operator.
      //It converts the number negative.
        /*  number1 = +20;
        console.log(-number1);
        //If number is in string , the string will become the number with negative sign
        string = '2';
        console.log(typeof -string)     
        */