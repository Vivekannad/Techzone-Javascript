//Date object
//Time Stamp: It starts from 1 jan 1970 00:00:00
let dated = new Date()
// console.log(dated);

/*
//we write in this format (year,month,date,hour,minute,second,millisecond);
//The month count starts from 0 and dec comes at 11. If more than that it'll go to next year.
//Any count exceeds it's limit, it'll go to next one and not bring an error.
//If passed one argument, it will be milliseconds in time Stamp.
//If in minus, it will reverse the order.
// dated = new Date(2024,5,4,12,5,6,78);
// console.log(dated);
// dated = new Date(2015,12,12,23,45);
// console.log(dated)
// dated = new Date(2015,11,34,2);
// console.log(dated)
// dated = new Date(2015,11,-2);
// console.log(dated)
// dated = new Date(2015,-1);
// console.log(dated)
dated = new Date(1366);
console.log(dated)
*/

// Date methods
//Week days start from sunday and from 0.
dated = new Date();
//Javascript, by default, gives the date in string.
// console.log(dated.toString())
//the below methods brings the time in more readeble and only contains day,month,date,year format
// console.log(dated.toDateString())
//The below methods return the time in UTC standard.
// console.log(dated.toUTCString())
//The below methods return the time in ISO standard.
// console.log(dated.toISOString())
//The below returns the date in everyday use of time.
// console.log(dated.toLocaleString());
//The below method returns the time only.
// console.log(dated.toTimeString());
//this below method will return only date.
// console.log(dated.getDate());
//the below method will return day in number and it starts from 0 and from sunday.
// dated = new Date(2024,3,13)
// console.log(dated.getDay());
//this below method will return the year.
// console.log(dated.getFullYear());
//this below method will return the number of hours have passed in a day.
// console.log(dated.getHours());
//this below method will return number of minutes have passed in an hour.
// console.log(dated.getMinutes());
//this below method will return number of seconds passed in a minute.
// console.log(dated.getSeconds());
//this below method will return number of millisec passed in a second.
// console.log(dated.getMilliseconds());
//this below method will return the month number. it starts from 0.
// console.log(dated.getMonth());

//This will set date which was passed as an argument.
// dated.setDate(14);
// console.log(dated)
//This can return year,month,datein this order, or less if you.
// dated.setFullYear(2021,0,23);
// console.log(dated)
//With this you can set clock-time hours,min,sec,millisec in this order. 
// dated.setHours(0,2,10,2000);
// console.log(dated)
//How much much time has passed from time stamp with a difference of millisec as an argument.
// dated.setTime(2000);
// console.log(dated)
// console.log(dated.toLocaleTimeString())