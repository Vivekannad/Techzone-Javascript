/*
let numberArray = [10,20,30,50,67,748];

for(let i = 0; i<=numberArray.length -1; i++){
 console.log(numberArray[i])
 numberArray[i] +=1;
}
console.log(numberArray);
let whiler = 0;
while(whiler < numberArray.length){
    numberArray[whiler] +=1;
    whiler++;
};
console.log(numberArray)



function addOne(array){
    console.log('[Before]',numberArray)
    for(let i = 0; i< array.length; i++){
        array[i] +=1;
    }
    return array;
}
console.log(addOne(numberArray))


function addNum(array,num){
    for(let i = 0; i< array.length; i++){
        array[i] += num;
    }
    return array;
}
console.log(addNum(numberArray,10))
numberArray = [2,4,6,8,10]


function addArrays(array1,array2){
 let result = [];   
 for(let i = 0; i < array1.length && i <array2.length; i++){
     result.push(array1[i] + array2[i]);
 }
 return result;
}
console.log(addArrays([2,4,2],[3,8,5]))
 
numberArray[numberArray.length-1] = 94;
console.log(numberArray)

function getLastValue(array){
 return array[array.length-1]
};
console.log(getLastValue(numberArray));

function arraySwap(array){
const first = array[0];
const last = array[array.length-1];
array[0] = last;
array[array.length-1] = first;
console.log(array);
return array;
}
console.log(arraySwap(numberArray))

for(let i = 5; i >= 0; i--){
 console.log(i)
}
let i = 5;
while(i >= 0){
 console.log(i);
 i--;
}


function countPositive(nums){
 let number = 0;
 for(let i = 0; i< nums.length; i++){
     if(nums[i] > 0){
         number++;
     }
 }
 return number;
}
console.log(countPositive([2,3,-8]))
*/

/*
const numberArray = [2,5,7,9]
let max = 0;
let min = 0;
function minMax(nums){
    for(let i = 0; i< nums.length; i++){
        if(nums[i] > 0){
            max++;
        } else{
            min++;
        }
    }
   max = String(max);
   min = String(min);
 nums.push(max,min);
   return nums
};
console.log(minMax(numberArray))
*/
/*
const stringArray = ['hello','world','search','good','search'];
let index = -1;
for(let i = 0; i< stringArray.length; i++){
    if((stringArray[i] === 'search')){
        index = i;
        break;
    } 
};
console.log(index);

*/
// console.log(stringArray.includes('search'));
// console.log(stringArray.indexOf('search'))

/*
if(stringArray.includes('search')){
    console.log(stringArray.indexof('search'))
}else{
    console.log(-1)
}
*/

/*
if(stringArray.indexOf('search') === -1){
    console.log(-1);
} else{
    console.log(stringArray.indexof('search'))
}
*/
/*
//One way of doing this
const colors = ['green','red','blue','purple']
function findIndex(array,word){
    // let index = -1;
    for(let i = 0; i < array.length; i++){
        if(array[i] === word){
            // index =1;
            return i;
        } 
    }
    return -1;
    // return index;
}
// console.log(findIndex(colors,'red'));
// console.log(findIndex(colors,"yellow"));

//another way
function findIndex2(array,word){
    if(array.includes(word)){
    return array.indexOf(word);
    } else {
        return -1;
    }
};
console.log(findIndex2(colors,'red'));
console.log(findIndex2(colors,"yellow"));
*/

const eggs = ['eggs','apple','eggs','eggs','ham']
function removeEggs(foods){
    //to remove only first two eggs
    let timer = 1;
    for(let i = 0; i < foods.length; i++){
        if(foods[i] === 'eggs' && timer <=2){
            foods.splice(i,1);
            timer++;
        }
    };
    return foods;
}
// console.log(removeEggs(eggs));

/*
//first way
function removeEggsInReverse(foods){
    //to remove only first two eggs
    let timer = 1;
    for(let i = foods.length; i > 0; i--){
        if(foods[i] === 'eggs' && timer <=2){
            foods.splice(i,1);
            timer++;
        }
    };
    return foods;
};

console.log(removeEggsInReverse(eggs));

//another way
function removeEggsInReverse2(foods){
    let timer = 1;
    const reversed = foods.reverse();
    for(let i = 0; i < reversed.length; i++){
        if(reversed[i] === 'eggs' && timer <= 2){
            foods.splice(i,1);
            timer++;
        }
    };
    return reversed.reverse();
}

console.log(removeEggsInReverse2(eggs));

*/

