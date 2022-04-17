// Till 42!
// Description

// You are given N numbers. Your task is to write a program that calculates sum of all elements in the provided numbers (only as long as 42 is encountered & including 42).

// See sample test case for better explanation.

// Input
// Input Format:

// First line contains N

// Second line contains N space separated integers.

// Constraints:

// N<10000

// Output
// Output the sum of all elements present till 42 (including 42)

// Sample Input 1

// 7
// 23 32 1 0 -32 42 8
// Sample Output 1

// 66

function runProgram(input) {
  var data = input.split(/[\n]+/);
  const n = +data[0];
  const arr = data[1].trim("").split(" ").map(Number);
  //alternative sum
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    sum += arr[i];
    if (arr[i] === 42) {
      break;
    }
  }
  console.log(sum);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`7
23 32 1 0 -32 42 8`);
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
