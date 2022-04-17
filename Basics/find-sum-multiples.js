// Find Sum of Multiples Ended
// Description

// You are given three integers: n, k , y

// You have to print sum of first k multiples of n which are multiple of y as well.

// Input
// Input Format :

// The input line contains 3 spaced integers which are n, k and y.

// Constraints :

// 1 <= n <= 1000

// 1 <= y <= 1000

// 1<= k <= 10^4

// Output
// Output the number which is sum of multiples of given integers.

// Sample Input 1

// 3 10 5
// Sample Output 1

// 45
// Hint

// Output Explanation :

// For the sample input first k(10) multiples of n(3) are

// 3

// 6

// 9

// 12

// 15

// 18

// 21

// 24

// 27

// 30

// Sum of those which are multiple of y (5) is = 15 +30 = 45

function runProgram(input) {
  var [n, k, y] = input.split(" ").map(Number);
  let output = 1;
  let sum = 0;
  for (let i = 1; i <= k; i++) {
    output = n * i;
    if (output % y === 0) {
      sum += output;
    }
  }
  console.log(sum);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`3 10 5`);
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
