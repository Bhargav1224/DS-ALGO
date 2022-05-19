// Intersection of Array
// Description

// You are given 2 arrays of N integers. Your task is to write a program that finds the one integer which is common in both arrays.

// Note: There is always one integer common in both arrays.

// Input
// Input Format

// First line of input contains N

// Second line contains N space separated integers making the first array

// Third line contains N space separated integers making the second array

// Constraints

// N<1000

// Output
// Output Format

// Output that one integer which is common in both arrays
// Sample Input 1

// 3
// 4 5 7
// 9 2 5
// Sample Output 1

// 5

function runProgram(input) {
  var data = input.split(/[\n]+/);
  const arr1 = data[1].split(" ").map(Number);
  const arr2 = data[2].split(" ").map(Number);
  // console.log(arr1, arr2);
  arr1?.map((item) => {
    arr2?.map((ar) => {
      if (ar == item) {
        console.log(ar);
      }
    });
  });
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`3
4 5 7
9 2 5`);
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
