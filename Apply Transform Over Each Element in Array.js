/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = []
    let index = 0;
    for (number of arr){
        returnedArray.push(fn(number, index++))
    }
    return returnedArray;
};