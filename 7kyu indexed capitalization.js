// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

// Be sure to also try:



function capitalize(s,arr){
    let newString = s.split('')
    
    for (let i = 0; i < arr.length; i++){
      if (arr[i] <= newString.length){
        newString.splice(arr[i], 1, newString[arr[i]].toUpperCase())
      }
    }
    return newString.join('')
   
  };
  
  
  //string, array. Array represents the indeces of the string that we want to capitalize. 
    //string: lowercase. no spaces.
    //array: always has a digit
  
  //give a string, with specified letters capitalized. 
  
  //loop through arry, for each member of the array, capitalize the letters of the string.