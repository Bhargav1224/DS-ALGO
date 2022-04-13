// Division Task -9926:46:39
// Description

// You are given a number N. Let us say the floor ( Ref:https://en.wikipedia.org/wiki/Floor_and_ceiling_functions) of 32 divided by N is x

// Print as per following rules

// * In case x is 0, print "Too Low"

// * In case it is not possible to generate a valid number, print -1

// * In all other cases, print x

// Input
// Input Format :

// First line contains N

// Constraints :

// N <= 100

// Output
// Output string or number based on the conditions mentioned above

// Sample Input 1

// 4
// Sample Output 1

// 8

function runProgram(input) {
  var input = input.trim().split("\n");
  console.log(input);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`4`);
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

