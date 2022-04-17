// Sum Related Problem
// Description

// You are given a number N, find sum of all even numbers which occur before N (inclusive of N if N is even)

// Input
// Input Format

// First and the only line contains one number N.

// Constraints

// N<10000

// Output
// Output Format

// Output one number which is sum (under above condition)

// Sample Input 1

// 8
// Sample Output 1

// 20

function runProgram(input) {
  var n = +input;
  //   console.log(n);
  let sum = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`8`);
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
