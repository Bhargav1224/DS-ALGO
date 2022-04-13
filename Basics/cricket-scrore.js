// Cricket Score -9928:6:41
// Description

// You are given the numbers of 1 runs, 2 runs, 3 runs, fours and sixes scored by a batsman. Your task is  to compute total run scored by that batsman.

// Input
// Input Format:

// First line contains 5 positive space separated integers which represents number of 1s, 2s, 3s, fours and sixes scored by the batsman.

// Constraints:

// All the scores<100

// Output
// Output total run scored by the batsman

// Sample Input 1

// 12 8 5 6 3

// explanation 12*1's + 8*2's + 5*3's+6*4's+3*6=total score
// Sample Output 1

// 85

function runProgram(input) {
  var array = input.trim().split(" ").map(Number);
  // console.log(array);
  let total = (array[0]
    ? array[0] * 1
    : 0 )+ (array[1]
    ? array[1] * 2
    : 0) +( array[2]
    ? array[2] * 3
    : 0 )+( array[3]
    ? array[3] * 4
    : 0) + (array[4]
    ? array[4] * 6
    : 0);
  console.log(total);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`12 8 5 6 3`);
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
