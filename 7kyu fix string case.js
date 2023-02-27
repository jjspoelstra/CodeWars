// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

// Please also try:

function solve(s){
    let stringLength = s.length
    let lowerCaseCount = 0
    for (let i = 0; i < stringLength; i++){
      if (s[i] != s[i].toUpperCase()){
        lowerCaseCount += 1
      }
    }
  if (lowerCaseCount >= s.length/2){
    s = s.toLowerCase()
  }
  else {
    s = s.toUpperCase()
  }
  return s
}



//given a string. May have varying amounts of upper or lowercase numbers. 
//if string has more lowercase, make them all lower. If more upper, make all upper. If they are even, make it lowercase. 
//determine how many letters of a string are lowercase.
      //determine the length of the string
      //make a decision based on these results