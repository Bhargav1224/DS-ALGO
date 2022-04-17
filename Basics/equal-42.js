// Equal to 42 or not!
// Description

// You are given an array of N integers. Output "Yes" if 42 is present in array, else print "No".

// Input
// Input Format :

// First line contains number of integers N present in the array.

// Second line contains  N  space separated integers.

// Constraints :

// N<100

// Output
// Output Yes/No based on condition mentioned above.

// Sample Input 1

// 5
// 3 7 0 9 8
// Sample Output 1

// No
function runProgram(input) {
  var data = input.split(/[\n]+/);
  const arr = data[1].trim("").split(" ").map(Number);
  if (arr.includes(42)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`5
3 7 0 9 8`);
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
