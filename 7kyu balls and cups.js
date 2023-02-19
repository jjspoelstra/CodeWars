// Ronny the robot is watching someone perform the Cups and Balls magic trick. The magician has one ball and three cups, he shows Ronny which cup he hides the ball under (b), he then mixes all the cups around by performing multiple two-cup switches (arr). Ronny can record the switches but can't work out where the ball is. Write a programme to help him do this.

// Rules:

// There will only ever be three cups.
// Only two cups will be swapped at a time.
// The cups and their switches will be refered to by their index in a row of three, beginning at one. So [[1,2]] means the cup at position one, is swapped with the cup at position two.
// Arr will be an array of integers 1 - 3 organised in pairs.
// There won't be any empty sub-arrays.
// If arr is just an empty array b should be returned.
// Examples:

// (b) = 2, (arr) = [[1,2]]

// The ball is under cup number : 1

// (b) = 1, (arr) = [[2,3],[1,2],[1,2]]

// The ball is under cup number : 1

// (b) = 2, (arr) = [[1,3],[1,2],[2,1],[2,3]]

// The ball is under cup number : 3


function cupAndBalls(b, arr){
    for (let i = 0; i < arr.length; i++){
      if (arr[i][0] === b){
        b = arr[i][1]
      }
      else if (arr[i][1] === b){
        b = arr[i][0]
      }
    }
    return b
  };
  
  //params: given one ball 'b' and three cups in 'arr'. 'arr' won't jut be three numbers, but numbers 1-3 representing the cups and 
    //how they are being switched. Only 2 cups swapped at a time. Cups will be switched in an array as a nested array. 
  //return: the number cup the ball is under.
  //examples: (b) = 1, (arr) = [[2,3],[1,2],[1,2]]
                //The ball is under cup number : 1
  
  //psuedo:
    // if sub-array contains b, change b value to other value in the sub array. 