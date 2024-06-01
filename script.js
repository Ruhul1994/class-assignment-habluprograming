
 //Answer to the qs no: 1

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) +32;
    return fahrenheit;
  }
  
  console.log(celsiusToFahrenheit(0)); // 32
  console.log(celsiusToFahrenheit(25)); // 77
  
//Answer to the qs no: 2

  function isEven(num) {
    let even = num % 2 === 0;  
    return even;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
  
//Answer to the qs no: 3
// Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30
  
  //Answer to the qs no: 4

  function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5
  
 //Answer to the qs no: 5

//  Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

 function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0
    for (let char of str) {
       if(vowels.includes(char)){
        count ++;
       } 
    }
    return count;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
  
  //Answer to the qs no:6

//   Write a function to get the first element of an array. The function should take a single argument, which is the array.

function getFirstElement(arr) {
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  
  //Answer to the qs no:7
//   Write a function to check if an array is empty. The function should take a single argument, which is the array.

function isArrayEmpty(arr) {
    return arr.length ===0;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false
  
  //Answer to the qs no: 8

  function factorialize(num) {
 if (num === 0 || num === 1){
    return 1;
 } else {
    let result = 1
    for(let i=2; i <= num; i++){
        result *= i;
    }
    return result; 
 } 
 
  }
  
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040
  
  //Answer to the qs no: 9

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  
  //Answer to the qs no: 10

  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"
  
//Answer to the qs no: 11

  function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5
  
  //Answer to the qs no: 12
  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
  
//Answer to the qs no: 13

  function getLastElement(arr) {
    return arr[arr.length-1];
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"
  
  //Answer to the qs no: 14

  function getFirstCharacter(str) {
    return str.charAt(0);
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"
  
  //Answer to the qs no: 15
//   Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.

  function sumArray(arr) {
    let total = arr.reduce((acc,current)=> acc + current,0);
    return total;
  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  