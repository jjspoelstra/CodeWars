function sumCubes(n){
    let sum = 0
    for (let i=1; i <= n; i++){
      sum += i*i*i
    }
    return sum
  }
  
  
  
  
  
  //parameters: number that is a pos integer n. 
  //return: Sum 1^3 all the way through n^3
  //example: 2 --> (1^3 + 2^3 = 9)
  //pseudo: 
    //create a loop from 1 - n
    //create sum starting at 0
    //for each integer, add to the sum
    //return sum