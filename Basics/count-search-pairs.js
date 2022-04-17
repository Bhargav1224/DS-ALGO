// Count such pairs -9798:47:23
// Description

// You are given an array A of N integers along with a target integer. Your task is to find out the number of pairs of integers present in the array whose sum is equal to the target value.

// Input
// Input Format :

// First line contains 2 integers: N and the target respectively.

// Second line contains N integers which are the elements of the array.

// Constraints :

// N<100

// Output
// Print one number which is number of such pairs.

// Sample Input 1

// 5 9
// 3 0 6 2 7
// Sample Output 1

// 2

function runProgram(input) {
  var data = input.split(/[\n]+/);
  // time complexity is O(n*n);
  // space complexity is O(n*n);
  const [n, k] = data[0].trim().split(" ").map(Number);
  const arr = data[1].trim().split(" ").map(Number);
  let count = 0;
  for (var i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (arr[i] + arr[i + j] === k) {
        count++;
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`5 9
3 0 6 2 7`);
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
