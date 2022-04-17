// Print Grade
// Description

// Bhargav attended his annual exams and the results are announced .Can you help him to know his grade based on his marks?

// Input
// Input Format

// First and only line of input contains a number which is total marks.

// Constraints

// N <= 100

// Output
// Output Format

// Output the string

// 1.If marks equal to 100 print "A"

// 2.If marks greater than or equal to 90 print "B"

// 3.If marks greater than or equal to 80 print "C"

// 4.else print "F"

// Sample Input 1

// 80
// Sample Output 1

// C

function runProgram(input) {
  var data = +input;
  switch (data) {
    case 100: {
      if (data === 100) {
        console.log("A");
        break;
      }
    }
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95: {
      if (data >= 90) {
        console.log("B");
        break;
      }
    }
    case 80: {
      if (data >= 80) {
        console.log("C");
        break;
      }
    }
    default: {
      console.log("F");
    }
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`95`);
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
