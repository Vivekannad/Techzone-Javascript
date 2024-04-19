//Arrays
/*
const array = ['hello','there'];
console.log(array);
const anotherArray = new Array('23','fds');
console.log(anotherArray);
const concat = array.concat(anotherArray);
console.log(concat);
array.push('pushed value');
console.log(array);
array.pop();
console.log(array);
array.unshift('unshift value');
console.log(array);
array.shift();
console.log(array);
array.splice(1,0,'spliced value');
console.log(array);
console.log(array.indexOf('there'));
array.unshift('there');
console.log(array.lastIndexOf('there'));
console.log(array.slice(0,1));
console.log(array);
console.log(array.reverse());
*/
//concat() concatenates the given arguments with left side Array.
/*
let anotherArray = ['Banana',true,45];
console.log(anotherArray.concat('Peter'));
const concatArray = ['Peter','Ben','Ten'];
const finalArray = anotherArray.concat(concatArray);
console.log(finalArray);
*/

//looping through an Array
//  1)Manually:
/*
                const manualArray = ['vivek','anand','chimrani'];
                for(let i = 0; i< manualArray.length; i++){
                    console.log(manualArray[i]);
                }
                */
//  2) forEach() method it takes a callback function we can put two parameters for value and index.
    //It does not return anything.
    /*
                const manualArray = ['vivek','anand','chimrani'];
                const returnValue  = manualArray.forEach((vals,i) => {
                    console.log(vals,i)
                    // return value;
                });
*/
// 3) Map() method it also does similar as forEach() but it return an array.
/*
               const mapArray = [90,6,45];
                const returnValue = mapArray.map((values,indexes) => {
                    // console.log(array);
                    return values;
                });
                console.log('Map Value:- ',returnValue)
                const filter = mapArray.filter((value) => {
                    return value;
                })
                console.log('Filter Value:- ',filter)
                // console.log(anotherArray);
                const find = mapArray.find((value) => {
                    return value;
                })
                console.log('find Value:- ',find)
               */
               let array = [25,56,78,12];
               let anotherArray = ['hello',"everyone", 'I','am'];
               //reverse() :- It reverses the order of array values
               /*
               const ans = array.reverse();
               console.log('[after]',array) // you can also put ans
               console.log('[before]',array);
               console.log('[before]',anotherArray);
               anotherArray.reverse();
               console.log('[after]',anotherArray);
                */
               // join(); It turns the array values into string and put the argument in between each value.
               /*
               console.log('[before]',array);
                const ans = array.join('*');
                console.log('[after]',ans);
                console.log('[before]',array);
                const answer = anotherArray.join(' # ');
                console.log('[After]',answer)
                */
               array = [25,56,78,12];
               anotherArray = ['hello',"everyone", 'I','am']
               // Indexof():- It tells the index number of the given 
               /*
               const ans =  array.indexOf(78);
                console.log(ans);
                const answer = anotherArray.indexOf('am');
                console.log(answer)
                */

                //slice():- It takes two arguments. 1) the starting index 2) ending index +1; And it slices out that portion of values
                /*
                const ans = array.slice(1,4);
                console.log(ans);
                const answer = anotherArray.slice(0,3);
                console.log(answer);
                */
               //toString() :- it converts the array values into strings.
               /*
                console.log('[Before]',array);
               const ans = array.toString();
               console.log('[After]',ans);
               console.log('[Before]',anotherArray);
               const answer = anotherArray.toString();
               console.log('[After]',answer);
                */
               //find() :- It takes a callback() function and return on base of a condition and return one value.
               /*
               const ans = array.find((value) => {
                    return value >56;
               })
               console.log(ans);
               const answer = array.find((value) => {
                console.log(value > 30)
               });
               */
              //filter() :- It takes a callback() funcction and return on base of condition and return all values.
              /*
              const ans = array.filter((value) => {
                return value > 50;
                })
            console.log(ans);
            const answer = array.filter((value) => {
                console.log(value > 30);
            })
            */

            //sort()
            
            /*
            array = [12,25,50,26,60];
            console.log('[Before]',array);
           const ans = array.sort((a,b) => {
               console.log('A is : ' + a, 'B is : ' + b);
             console.log(a-b);
             return a-b;
           });
           console.log('[after]',ans);
      const arrays = ['vivek','anand','chimrani'];
    //   const local = arrays.toString().localeCompare();
       const sorting = arrays.sort((a,b) => {
        console.log('Value of A is',a);
        console.log('Value of B is',b)
        if(a === b) return 0;
        if(a > b) return -1;
        return 1;
       });
       console.log(sorting);
        //   console.log(local);
       console.log()

              const numbers = [21,45,5,50];
      const exper =  numbers.sort((a,b) => {
        console.log('The value of A is',a);
        console.log('The value of B is',b);
        console.log(a-b)
        return a-b;
       })
       console.log(exper);
       */