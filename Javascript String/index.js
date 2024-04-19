/*
//All Strings are immutable and thus using the functions on string it do not modify the original String but rather form a new one.

let Name = null;
let firstName = '  My name is Vivek.  ';
const secondName = 'My second name is Anand.';
let lastName = null;
console.log(firstName);


//trim function
firstName = firstName.trim();
console.log(firstName);


//concatenation
const firstAndMiddleName = firstName + secondName;
console.log(firstAndMiddleName);

//concat() function
lastName = 'Chimrani';
const fullName = firstName.concat(secondName,lastName);
console.log(fullName);

//charAt() function and manually.
//Index number is the position if a character in a string and it always starts from 0.
const specificChar = lastName[1];
console.log(specificChar);

const charAtFunction = lastName.charAt(0);
console.log(charAtFunction);

 // at() string function.
  //It is latest addition in JS and it works same as charAt() but it also works with - sign. 
    Name = 'Vivek Anand Chimrani';
    Name = Name.at(-3);
    console.log(Name);

//indexof and lastIndexof functions.
    //indexof return the first index number of the specific character given.
    const indexofFunction = firstName.indexOf('V');
    console.log(indexofFunction);
    //lastIndexof return the last index number of the specific character which is present in the string.
    const lastIndexofFunction = firstName.lastIndexOf('v');
    console.log(lastIndexofFunction);


//split function.
//It takes a value from the given value.
//It only takes one value.
Name = 'Vivek Anand Chimrani';
const splitVar = Name.split(' ');//space value.
console.log(splitVar[2]) //You can pass index num to get desired value.

//toLowerCase and toUpperCase functions.
const lowerCase = Name.toLowerCase();
console.log(lowerCase);

const upperCase = Name.toUpperCase();
console.log(upperCase);

//subString and subStr functions.
//if we want a range of characters from a value to return we can use these functions.
Name = 'Vivek Anand Chimrani';
    //subString takes two values 1) Starting index number 2) end indec number -1.
  const subString =   Name.substring(0,11)
  console.log(subString);

    //substr function is now depreciated but to we can use it.
    //Note:- length always start from 1 and is always greater than index number.
    //it takes two values 1)Starting index number 2) ending length number.
    const subStr = Name.substr(0,11);
    console.log(subStr);

  console.clear();
 

 //replace function.
//It takes two values, One which you wanna repalce and second which you wanna replace with.
lastName = 'Chimrani';
let replaceVar = lastName.replace('rani','nani');
console.log(replaceVar);
  //replace is case-sensitive to avoid that case-sensitivity we use reg-exp '/search text/i' in the middle we provide it with replacing text .
Name = 'Marvel marvel mArvel';
console.log(Name.replace(/marvel/i,'Gobind'));
  //to enable to replace all the words with that search value.
  Name = ' marvel marvel marvel';
  console.log(Name.replace(/marvel/g, 'DCEU'));

 // replaceAll() function.
 //It replaces all letters which have that search char.
 Name = 'Vivek Anand Chimrani';
Name = Name.replaceAll('a','z');
console.log(Name);

//repeat() function.
//It repeats the string;
Name = 'Vivek Anand Chimrani ';
Name = Name.repeat(2);
console.log(Name);

//charCodeAt() function
  //It returns the unicode of that particular letter.
  //Almost every language is in unicode.
// Name = 'विवेक';
Name = 'ذہین ،پرسکون'
console.log(Name.charCodeAt(0));

*/