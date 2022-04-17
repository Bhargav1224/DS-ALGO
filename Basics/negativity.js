// Negativity
// Description

// You are given an array of N integers. Find the total count of negative elements present in the array.

// Input
// Input Format:

// First line contains N integers

// Second line contains N space separated integers which constitute the array.

// Constraints:

// N < 100

// Output
// Output the number of negative integers present in the array

// Sample Input 1

// 5
// -3 0 -5 9 8
// Sample Output 1

// 2
function runProgram(input) {
  var data = input.split(/[\n]+/);
  const n = +data[0];
  const arr = data[1].trim("").split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`5
-3 0 -5 9 8`);
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
