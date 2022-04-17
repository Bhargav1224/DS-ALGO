// Alternate Sum
// Description

// You are given an array of N integers. Your task is to write a program that calculates the sum of all alternate elements starting from the first(0th index element of array) integer.

// Input
// Input Format:

// First line contains N

// Second line contains N space separated integers

// Constraints:

// N<1000

// Output
// Output the sum under above conditions

// Sample Input 1

// 7
// 4 5 5 5 6 6 7
// Sample Output 1

// 22

function runProgram(input) {
  var data = input.split(/[\n]+/);
  const n = +data[0];
  const arr = data[1].trim("").split(" ").map(Number);
  //alternative sum
  let sum = 0;
  for (let i = 0; i < n; i += 2) {
    sum += arr[i];
  }
  console.log(sum);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`7
4 5 5 5 6 6 7`);
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
