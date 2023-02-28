function solve(s){
    let values = [0,0,0,0]
    for (let i = 0; i < s.length; i+=1){
      if (s[i].toLowerCase() > s[i]){
        values[0] += 1
      }
      else if (s[i].toUpperCase() < s[i]){
        values[1] += 1
      }
      else if (s[i] >= 0 && s[i] < 10){
        values[2] += 1
      }
      else {
        values[3] += 1
      }
    }
    return values
  }
  
  
  //parameters: String of numbers,characters, and digits
  //return: the number of each of [uppercase letters, lowercase letters, numbers, special characters]
  //example: '12sD$' = [1, 1, 2, 1]
  
  //create the array to put each value into
  //isolate each type
  //add each type to their array's location