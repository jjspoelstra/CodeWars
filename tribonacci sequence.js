// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)


function tribonacci(signature,n){
    let sequence = []
    if (n === 0){
      return sequence
    }
    else if (n <= 3){
      for (let i = 0; i < n; i++){
        sequence.push(signature[i])
      }
      return sequence
    }
    else{
      sequence.push(signature[0])
      sequence.push(signature[1])
      sequence.push(signature[2])
      for (let i = 3; i < n; i++){
        sequence.push(sequence[i-3]+sequence[i-2]+sequence[i-1])
      }
      return sequence
    }
    
  }
  
  
  
  
  //parameters: given 3 numbers in an array, want to do a tribonacci for as long as the number n. Number will be non-negative.
    //if n = 0, give array of 0
  //return: new sequence with length of n
  //example: [1,1,1], 2 === [1,1]




  //Cleaner:

  function tribonacci(signature,n){  
    for (var i = 0; i < n-3; i++) { // iterate n times
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
}