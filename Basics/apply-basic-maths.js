// Apply Basic Maths -9798:12:38
// Description

// Given, an array A (index starting from 0) with N elements. You CAN remove only that element which makes the sum of ALL the remaining elements exactly divisible by 7.

// Your task is to find the first array index of the smallest element that can be removed.

// Input
// Input Format

// The first line contains a single integer N.

// Next line contains N space separated integers A[k] , 0 < k < N - 0 based indexing

// Constraints

// 1 < N < 100000

// 0 < A[k] < 1000000000

// Output
// Output Format

// Print a single line containing one integer, the first array index of the smallest element that CAN be removed, and -1 if there is no such element that he can remove!

// Sample Input 1

// 5
// 14 7 8 2 4
// Sample Output 1

// 1
// Hint

// Sample 1 Explanation

// Both 14 and 7 are valid answers, but since 7 is the smallest, the required array index is 1.
function runProgram(input) {
  var data = input.split(/[\n]+/);
  console.log(data);
  const n = +data[0];
  const arr = data[1].trim().split(" ").map(Number);
  console.log(n, arr);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`5
14 7 8 2 4`);
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
