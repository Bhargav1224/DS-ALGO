// Masai Even or Odd -9950:32:0
// Description

// You are provided an integer. Your task is to write a program that prints "Even" (without quotes) if the number is even and "Odd" (without quotes) if the number is odd.


// Input
// Input Format

// There is just one positive integer in input

// Constraints

// integer > 1


// Output
// Output Format

// Print "Even" or "Odd" depending on the value.


// Sample Input 1

// 5
// Sample Output 1

// Odd

function runProgram(input) {
   var num = input.trim().split().map(Number);
   if (num % 2 == 0) {
     console.log("Even");
   } else {
     console.log("Odd");
   }
}

if (process.env.USERNAME == "bhargav@sakhatech") {
  runProgram(`5`);
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
