// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.


function consonantCount(str) {
    if (str.length === 0){
      return 0
    }
  else{
    let splitSpace = str.split('')
    let string = 'bcdfghjklmnpqrstvwxyz'
    let onlyConst = splitSpace.filter((x) => string.includes(x.toLowerCase()))
    return onlyConst.length
  }
}

//parameters: given a string of text. String can be empty. 
//return: number of consonants in the string. 
//example: aaad would return 1. aa d would return 1. '' would return 0
//pseudo:
  //split the string into an array
  //filter the array
  //return the array length