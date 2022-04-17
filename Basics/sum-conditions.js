// Sum and Conditions
// Description

// You are given an array of  N integers. Write a program that prints "Greater" (without quote) if the sum of all elements present in the array is greater than 100, else print "Lesser" (without quotes).

// Input
// Input format

// First line contains N

// Second line contains N space separated integers which are elements of the array.

// Constraints

// n<1000

// Output
// Output Format

// Output Greater/Lesser depending upon the sum

// Sample Input 1

// 5
// 21 24 2 54 8
// Sample Output 1

// Greater
// Hint

// Sample 1 Explanation

// Since, sum of all elements in array is 109, therefore Greater

function runProgram(input) {
  var data = input.split(/[\n]+/);
  const n = +data[0];
  const arr = data[1].trim("").split(" ").map(Number);

  const output = arr.reduce((sum, num) => {
    const updatedSum = sum + num;
    return updatedSum;
  });
  if (output > 100) {
    console.log("Greater");
  } else {
    console.log("Lesser");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`5
21 24 2 54 8`);
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
