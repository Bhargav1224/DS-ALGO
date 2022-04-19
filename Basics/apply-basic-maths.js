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
  //   console.log(data);
  const n = +data[0];
  const arr = data[1].trim().split(" ").map(Number);
  let index;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0 && arr[i] % 7 === 0) {
      if (min > arr[i]) {
        min = arr[i];
        console.log("min", min);
        index = arr.indexOf(min);
      }
    }
  }
  if (index === undefined) {
    console.log(-1);
  } else {
    console.log(index);
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`57
290267 543718 152065 36958 513757 177467 242991 350675 953587 2959 791293 804018 858084 13158 47417 736925 231101 110680 644174 327034 139929 578888 920458 773574 433483 2544 121149 455734 32135 211876 403294 178448 171656 844908 467918 757493 383815 33552 832540 652097 38529 306142 659172 313415 353482 225856 75059 416520 62819 821080 206583 686447 217176 172935 91743 49898 944080`);
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
