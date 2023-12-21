/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArray = [];
    let index = 0;
    for (number of arr){
        if(fn(number, index++))
            filteredArray.push(number)
    }
    return filteredArray;
};