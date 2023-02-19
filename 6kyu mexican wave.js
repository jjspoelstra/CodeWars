// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!


function wave(str){
    let result = []
    for (let i = 0; i < str.length; i++){
      let split = str.split('')
      if (split[i] != ' '){
        split[i] = split[i].toUpperCase()
        let newString = split.join('')
        result.push(newString)
      }
    }
    return result
  }
  
  
  
  //paramaters: given a string. String will always be lowercase, but could be empty. If the string has whitesspace, needs to be passed
  //return: array of strings with each character in the string to upper case
  //wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
  //pseduo:
    //establish array
    //loop through string