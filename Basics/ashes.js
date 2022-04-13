// The Ashes! (But One day)
// Description

// You are given two numbers where first number is score of Australian team and second number is score of England.

// Comment who wins the match.

// If match ends in a tie, print "Tie" (without quotes), else print the name of Winner

// Input
// Input Format :

// First and the only line contains 2 space separated integers denoting scores of Australia and England respectively.

// Constraints :

// Both score <450

// Output
// Output one string(either Australia or England) which is the name of Winning team

// Sample Input 1

// 46 67
// Sample Output 1

// England

function runProgram(input) {
  var data = input.split(" ").map(Number);
  const aus = data[0];
  const eng = data[1];

  if (aus > eng) {
    console.log("Australia");
  } else if (eng > aus) {
    console.log("England");
  } else {
    console.log("Tie");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`46 67`);
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
