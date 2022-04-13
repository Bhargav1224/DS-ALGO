// Count Duration Ended
// Description

// Given 4 variables SH,SM,EH and EM  each separated by space(SH=starting hr, SM=starting min, EH=ending hr, EM=ending min), calculate and print the difference between the two times

// Input
// Input Format

// First line will be given by N test cases

// Next N line will be given SH,SM,EH and EM  each separated by space(SH=starting hr,SM=starting min, EH=ending hr, EM=ending min)

// Constraints

// N < 100

// Output
// Output Format

// N lines with duration HH MM(hours and minutes separated by space)

// Sample Input 1

// 2
// 1 44 2 14
// 2 42 8 23
// Sample Output 1

// 0 30
// 5 41

function runProgram(input) {
  var input = input.split(/[\n]+/);
//   console.log(input);
  const n = +input[0];
//   console.log(n);
  function convertMin(inp) {
    return inp * 60;
  }
  for (var i = 1; i < n + 1; i++) {
    var array = input[i].split(" ").map(Number);
    // console.log(array);
    var st = array[1] + convertMin(array[0]);
    var et = array[3] + convertMin(array[2]);
    var duration = Math.abs(st - et);
    var minDiff = duration % 60;
    var hrDiff = Math.floor(duration / 60);
    console.log(hrDiff + " " + minDiff);
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`2
1 44 2 14
2 42 8 23`);
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
