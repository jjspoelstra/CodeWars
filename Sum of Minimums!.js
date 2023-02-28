function sumOfMinimums(arr) {
    let sum = 0
    let sortedArrays = arr.map((x) => x.sort((a, b) => a - b))
      for (let i = 0; i<sortedArrays.length; i++){
        sum +=(sortedArrays[i][0])
      }
    return sum
  }
  
  
  
  //parameters: array of sub-arrays, numbers in array 
  //return: the sum of minimum values of each sub-array 
  //example:
    //[[1, 2, 3], [2, 3, 4], [3, 4, 5]] => 6
  //pseudo: 
  
    //sort each nested array by number low to high
    //isolate the lowest number of each array
    //sum these numbers and return the sum