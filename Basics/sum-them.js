// Sum Them 
// Description

// You are given an array of N elements. Your task is to write a program that calculates sum of all the alternate elements starting from 2nd element of the array (index 1 of array).

// Input
// Input Format :

// First line contains N

// Second line contains N space separated integers

// Constraints :

// N<1000

// Output
// Output the sum under given condition

// Sample Input 1

// 5
// 3 5 0 9 8
// Sample Output 1

// 14


function runProgram(input) {
  var data = input.split(/[\n]+/);
  const n = +data[0];
  const arr = data[1].trim("").split(" ").map(Number);
  //alternative sum
  let sum = 0;
  for (let i = 1; i < n; i += 2) {
    sum += arr[i];
  }
  console.log(sum);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`5
3 5 0 9 8`);
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

