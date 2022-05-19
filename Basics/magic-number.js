// Magic Numbers!
// Description

// You are given a number. A number is said to be magical if it contains magic digits 4 and 7 only.For example 77,47,74,474 are magical and 5,467,17 are not.

// The number isalmostmagicalifit is divisible by one of the magic numbers.

// print "YES" (without the quotes), if number n is almost lucky. Otherwise, print "NO" (without the quotes).

// Input
// Input Format

// The single line contains an integer n .

// Constraints

// 1 ≤ n ≤ 1000

// Output
// Output Format

// In the only line print "YES" (without the quotes), if number n is magical or almost Magical. Otherwise, print "NO" (without the quotes).

// Sample Input 1

// 47
// Sample Output 1

// YES
// Sample Input 2

// 16
// Sample Output 2

// YES
// Hint

// Sample Input Explanation:

// In the first sample 47 is a Magic number.

function runProgram(input) {
  var data = input.split("").map(Number);
  console.log(data);
  let res = 1;
  data?.map((item) => {
    if (item === 4 || item === 7) {
      res = 2;
    } else {
      res = 1;
    }
    return res;
  });
  console.log(res);
  if (res === 1) {
    console.log("NO");
    if (+input % 4 === 0 || +input % 7 === 0) {
      console.log("YES");
    }
  } else {
    console.log("YES");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`547`);
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
