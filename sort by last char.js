// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.



function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
    }
  
  //parameters: a string of words, all strings will be valid
  //return: the string sorted by the last letter of each word
  //example: 'man i need a taxi up to ubud', ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
  //pseudo: separate into an array
    //determine what to sort by, then apply sorting method to the array
    //return the new sorted array