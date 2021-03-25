"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate , camelize}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }

  function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }


  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 * processing: O(n**2) 
 *  - outer loop from 0 to n-1
 *  - inner loop from outer to n-1
 *    -- inner now goes over all contiguous subarrays
 *    -- check for max for each one
 */
function getMaxSubSum(arr) {
    let max = 0;
    for (let outer = 0; outer < arr.length; outer++) {
        let subArraySum = 0;
        for (let inner = outer; inner < arr.length; inner++) {
            subArraySum += arr[inner];
            max = Math.max(max, subArraySum);
        }
    }
    return max;

}


function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }



/**
 *
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 */
// function getMaxSubSum(arr){
//     /* add each number of array until find a negative number,
//        if that sum is greater than current max make it the new max,
//        return max */

//        let max = 0;
//        let currentTot = 0;
//     for (const number of arr) {
//         if (number < 0) {
//             if (currentTot > max) {
//                 max = currentTot;
//                 currentTot = 0;  //reset for next subarray
//             }
//         } else {
//             currentTot += number; 
//         }         
//     }
//     if (currentTot > max) {  //need this in case last number is positive
//         max = currentTot;
//     }
//     console.log('max for arr is: ', max, arr);
//     return max;

//}