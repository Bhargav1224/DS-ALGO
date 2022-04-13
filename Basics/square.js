// Square It -9927:5:24
// Description

// You are given an integer N, print its  [square value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) (number raised to exponent 2)

// Input
// Input Format

// First and the only line contains one integer N

// Constraints

// N<100

// Output
// Output an integer which is square of N

// Sample Input 1

// 7
// Sample Output 1

// 49

function runProgram(input) {
  var input = +input.trim().split("\n");
  console.log(Math.pow(input, 2));
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`7`);
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
