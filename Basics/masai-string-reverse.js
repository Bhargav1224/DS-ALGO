// Masai String Reversal
// Description

// You are given a string S. Print the reversed version of the string.

// Input
// Input Format

// The first and only line contains string S.

// Constraints

// Length of string < 100

// Output
// Reverse the provided string and output it.

// Sample Input 1

// masaischool
// Sample Output 1

// loohcsiasam

function runProgram(input) {
  var str = input;
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str.charAt(i);
  }
  console.log(output);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`masaischool`);
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
