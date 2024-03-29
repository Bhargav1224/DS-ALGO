// Masai Divisors
// Description

// You are provided 3 integers: *left*, *right* and *k*. Your task is to write a program that finds out the count of all such numbers between *left* and *right* (both inclusive) which are divided by *k*.

// Input
// Input Format

// First line contains 3 space separated integers which are left, right and k respectively.

// Constraints

// l,r,k<10000

// Output
// Output the count of such numbers

// Sample Input 1

// 1 10 1
// Sample Output 1

// 10

function runProgram(input) {
  var [l, r, k] = input.split(" ").map(Number);
  let output = 0;
  for (let i = l; i <= r; i++) {
    if (i % k == 0) {
      output++;
    }
  }
  console.log(output);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`5 172 21`);
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
