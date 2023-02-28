//parameters: Take in an array. This array could contain other arrays within it. Each array may itself be nested within an array
  //that has nothing else but that array. The arrays can contain both numbers and letters. 
//return: the array can only 'flatten' once, whice means that if an array is nested within two other arrays, the return will  still be a nested array. 
//example: flatten([[[1,2,3]]]) // => [[1,2,3]]
//pseudo: use the flat method

var flatten = function (array){
    return array.flat()
  }
  
  
  
              
              