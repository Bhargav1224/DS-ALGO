// Sum of Special Pairs -9795:41:2
// Description

// You are given an array A of N integers. Write a program to find the sum of the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.

// Input
// Input Format :

// First line contains N

// Second line contains N space separated integers which are elements of A

// Constraints :

// N<1000

// Output
// Output one number as per condition mentioned above

// Sample Input 1

// 6
// 1 2 3 5 7 12
// Sample Output 1

// 45
// Hint

// All valid index pairs are:
// (5, 0) -> abs(12 – 1) = 11
// (3, 0) -> abs(5 – 1) = 4
// (2, 0) -> abs(3 – 1) = 2
// (4, 1) -> abs(7 – 2) = 5
// (3, 1) -> abs(5 – 2) = 3
// (5, 2) -> abs(12 – 3) = 9
// (4, 2) -> abs(7 – 3) = 4
// (5, 3) -> abs(12 – 5) = 7
// 11 + 4 + 2 + 5 + 3 + 9 + 4 + 7 = 45

function runProgram(input) {
  var num = input.trim().split(/[\r\n]+/);
  var n = num[0].trim().split(" ").map(Number);
  var array = num[1].trim().split(" ").map(Number);
  var sum = 0;

  for (i = 0; i < n; i++) {
    for (j = 1; j < n; j++) {
      var number = j - i;
      if (number > 1) {
        var c = 0;
        for (k = 1; k <= number; k++) {
          if (number % k == 0) {
            c++;
          }
        }
        if (c == 2) {
          sum = sum + Math.abs(array[i] - array[j]);
        }
      }
    }
  }
  console.log(sum);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`6
1 2 3 5 7 12`);
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
