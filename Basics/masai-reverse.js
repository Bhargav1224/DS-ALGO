// Masai Sentence Reversal
// Description

// You are provided with a sentence S, your task is to write a program that reverses the order/sequence in which words are present in the sentence keeping the case of each character preserved (upper case character should remain upper and lower case character is lower case). (Refer to the sample test case for better understanding)

// Try using the stack data structure

// DO NOT ANY BUILT-IN FUNCTION FOR REVERSING A STRING

// Input
// Input Format

// You are provided with a sentence having one or more than one word.

// Constraints

// At least one word is present in the string

// Output
// Output the sentence by reversing the sequence of words

// Sample Input 1

// A Transformation in education
// Sample Output 1

// education in Transformation A
// Hint

// Sample 1 Explanation

// The sentence has been reversed in the sense that the sequence in which the words were present in the initial sentence is reversed.

// Also, there is no change in the case of characters present in the sentence.

function runProgram(str) {
  var arr = str.split(" ");
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }
  console.log(output.join(" "));
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`A Transformation in education`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
