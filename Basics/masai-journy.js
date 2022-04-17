// Masai School! Hurray! 
// Description

// You are provided an integer N. Depending upon the value, you have to print a string as per the following rules:

// - Print "Masai" (without quotes) if the integer is a multiple of 7

// - Print "School" (without quotes) if the integer is a multiple of 5

// - Print "Masai School" (without quotes) if the integer is a multiple of 35

// - Else in all other cases print "Hurray!" (without quotes)

// Input
// Input Format :

// First line contains N

// Constraints :

// N<100

// Output
// Output one of the 4 possible strings

// Sample Input 1

// 7
// Sample Output 1

// Masai

function runProgram(input) {
  var data = +input;
  //   console.log(data);
  if (data % 35 === 0) {
    console.log("Masai School");
  } else if (data % 7 === 0) {
    console.log("Masai");
  } else if (data % 5 === 0) {
    console.log("School");
  } else {
    console.log("Hurray!");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`7`);
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
