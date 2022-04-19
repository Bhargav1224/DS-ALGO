// Smallest and Largest of all -9798:54:1
// Description

// Given an array, A, of N integers, print the smallest and largest element present in the array

// YOU MUST NOT USE ANY BUILT-IN FUNCTION

// Input
// Input Format

// The first line contains an integer, N (the number of integers in A). The second line contains N space separated integers describing A.

// Constraints

// N<100

// Output
// Output Format

// Print 2 integers in different lines where first integer represents the minimum of all elements and second integer represents the maximum of all

// Sample Input 1

// 4
// -2 0 8 4
// Sample Output 1

// -2
// 8
function runProgram(input) {
  var data = input.split(/[\n]+/);
  const n = +data[0];
  const arr = data[1].trim().split(" ").map(Number);
  findMax(n, arr);
  findMin(n, arr);
}

function findMin(n, arr) {
  let min = -Infinity;
  for (let i = 0; i < n; i++) {
    if (min < arr[i]) {
      min = arr[i];
    }
  }
  console.log(min);
}
function findMax(n, arr) {
  let max = Infinity;
  for (let i = 0; i < n; i++) {
    if (max > arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`2
0 3`);
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
