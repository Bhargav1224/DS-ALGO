// Apply Brakes
// Description

// You are given the distance travelled by car(in kilometres) in a certain time (in hours). If the speed of that car is greater than 40 km/hr, you have to print "Apply Brake" (without quotes), else in all other conditions, print "Keep Going" (without quotes)

// Input
// Input Format

// First line contains 2 space separated integers where the first integer represents the distance travelled by car and second represents time taken to cover that distance.

// Constraints

// Distance < 1000

// time taken < 5

// Output
// Output a string depending on the speed of the car

// Sample Input 1

// 100 2
// Sample Output 1

// Apply Brake

function runProgram(input) {
  var data = input.split(" ").map(Number);
  const speed = data[0] / data[1];
  if (speed > 40) {
    console.log("Apply Brake");
  } else {
    console.log("Keep Going");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`100 2`);
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
