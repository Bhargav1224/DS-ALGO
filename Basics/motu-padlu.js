// Motu to Potlu house Ended
// Description

// Motu decided to visit his friend Potlu. It turned out that the Motu's house is located at point 0 and his friend's house is located at point x (x > 0) of the coordinate line. In one step the Motu can move 1, 2, 3, 4 or 5 positions forward.

// Determine, what is the minimum number of steps he need to make in order to get to his friend's house.

// Input
// Input Format :

// First and the only line contain the integer n which denotes the position of his friend's house.

// Constraints :

// 1 <= n <= 10^6

// Output
// Output contains a single line denoting the minimum number of steps.

// Sample Input 1

// 26
// Sample Output 1

// 6
// Hint

// Output Explanation :

// For n = 26, Motu can move as

// 5 --> 5 --> 5 --> 5 --> 5 --> 1

// Hence he needed 6 steps to reach at position 26.

function runProgram(input) {
  var n = +input;
  let count = 0;
  let num = 0;
  for (let i = 5; n > 0; i--) {
    num = Math.floor(n / i);
    count = count + num;
    n = n - num * i;
    if (i == 0) {
      break;
    }
  }
  console.log(count);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`26`);
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
