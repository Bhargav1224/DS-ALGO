// Fizzz buzzz
// Description

// Write a program that outputs the string representation of numbers from 1 ton.

// But for multiples of 3 it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Input
// 1<=T<=10

// the next t lines contain integer N

// 1<=N<=100

// Output
// output N strings for each test case corresponding to the answer of the question.

// Sample Input 1

// 2
// 1
// 3
// Sample Output 1

// 1
// 1
// 2
// Fizz

function runProgram(input) {
  var data = input.split(/[\n]+/);
  let test = +data[0];
  for (let i = 1; i <= test; i++) {
    let n = +data[i];
    for (let j = 1; j <= n; j++) {
      if (j % 3 == 0 && j % 5 == 0) {
        console.log("FizzBuzz");
      } else if (j % 3 == 0) {
        console.log("Fizz");
      } else if (j % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(j);
      }
    }
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`2
1
3`);
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
