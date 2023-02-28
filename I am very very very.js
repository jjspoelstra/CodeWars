// You are very very happy and very very very excited to solve this Kata.
// Show it to us by creating a function iam such as:

// iam('happy') // returns the string "I am happy"
// iam('excited') // returns the string "I am excited"
// iam()('scared') // returns the string "I am very scared"
// iam()()('interested') // returns the string "I am very very interested"
// and so on...

// As you understood, the function iam accept 1 optional parameter.
// If provided, the function returns a string.
// If NOT provided, it must returns a function allowing to continue the sentence.

// I am very very very curious to see you approach the problem.

// Enjoy!


function iam(input, n = 0) {
    return input
      ? "I am " + "very ".repeat(n) + input
      : x => iam(x, n+1)
  }