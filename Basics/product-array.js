// Product of array problem -9804:56:16
// Description

// You are given an array of N positive integers. Write a program to output the product of all the elements present in the array.

// Input
// Input Format:

// First line contains N.

// Second line contains N space separated integers

// Constraints:

// N<100

// Output
// Output one number which is the product of all elements.

// Sample Input 1

// 5
// 3 5 2 9 4
// Sample Output 1

// 1080

function runProgram(input) {
  var data = input.split(/[\n]+/);
  const n = +data[0];
  const arr = data[1].trim("").split(" ").map(Number);
  const product = arr.reduce((product, number) => {
    const updatedProduct = product * number;
    return updatedProduct;
  }, 1);
  console.log(product);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`5
3 5 2 9 4`);
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
