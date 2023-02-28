//Parameters: we are given a number. We want to isolate the numbers of a triangle in n's 'row'. This could also be conceived of by 
  // thinking about n as the last n numbers in the "triangle". 

//return the SUM of the numbers of each row. The sum of the last n even numbers. 

//example: 1 ---> 1. 2 ---> 3+5 = 8. 3 ---> 7 + 9 + 11 = 27
    //these are the same as n^3

//pseudo: multiply n^3 and return

function rowSumOddNumbers(n) {
	return n*n*n
}







//next time just use Math.pow(n,3)