/*
const lastArray = [1,20,22,24,5];
function findArray(array){
return array[array.length -1]
}
// console.log(findArray(lastArray));
// console.log('before',lastArray)
function swapArray(array){
    const first = array[0];
    const last = array[array.length - 1];

    array[0] = last;
    array[array.length - 1] = first;
    return array;
};
// console.log('After',swapArray(lastArray))
// console.log('before',lastArray)
function addOne(array){
   const map =  array.map(val => val+1 );
    return map;
};
// console.log('After',addOne(lastArray))

// console.log('before',lastArray)
function addNum(array,num){
    const map = array.map(val => val +num )
    return map;
}
// console.log('after',addNum(lastArray,2))


let final = []
let anotherArray = [5,87,23,43,4]
function addArrays(array1,array2){
    const finalArray = [];
    array1.forEach((val,i) => {
      finalArray.push(array1[i] + array2[i]);
    })
    return finalArray;
};
// console.log(addArrays(lastArray,anotherArray))

anotherArray = [-4,2,-7,8,10];
console.log(anotherArray)
const limit = {
    min: null,
    max : null
}
function minMax(nums){
    nums.forEach((val,i) => {
        if(val > 0){
         limit.max++;
        }else{
        limit.min++;
        }
    })
    return limit;
};
console.log(minMax([3])) 
*/
const array = [1,2,3,4,5];
function addTotal(arr){
    let final = 0;
    for(let i = 0; i < arr.length; i++){
        final += arr[i]; 
    }
    return final;
};
// console.log(addTotal(array));
const arr = [2,4,6,2,5]
function compareTriplets(a, b) {
    let returnArray = [];
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            returnArray[0]++;
        } else if(a[i] < b[i]){
            returnArray[i]++;
        }
    }
    return returnArray;
};
console.log(compareTriplets(array,arr))