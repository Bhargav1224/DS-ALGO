// Odd Sum Below N 
// Description

// You are given a number N, find the sum of all odd numbers presents below it. (including N if N is an odd number)

// Input
// Input format

// First and the only line contains number N

// Constraints

// N<100000

// Output
// Output the sum of all such numbers

// Sample Input 1

// 7
// Sample Output 1

// 16

function runProgram(input) {
  var n = +input;
  //   console.log(n);
  let sum = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log(sum);
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
