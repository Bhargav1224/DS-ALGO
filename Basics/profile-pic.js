// Profile Pic Ended
// Description

// Haren wants to change his profile picture on Facebook. Now Facebook has some restriction over the dimension of picture that we can upload.

// Length of every picture uploaded should be greater than L and width should be greater than W

// If his picture passes both the criteria, print "Upload"

// In case it could not pass becuase of length, print "Increase Length"

// In all other cases, print "Increase Width"

// Input
// Input Format:

// First line contains 2 space separated integers which are L and W

// Second line contains length and width of uploaded pic

// Constraints:

// L,H<100

// Output
// Output one of the strings based on condition met

// Sample Input 1

// 12 14
// 8 19
// Sample Output 1

// Increase Length

function runProgram(input) {
  var data = input.split("\n");
  const [len, wid] = data[0].trim().split(" ").map(Number);
  const [upLen, upWid] = data[1].trim().split(" ").map(Number);

  // Length of every picture uploaded should be greater than L and width should be greater than W
  // If his picture passes both the criteria, print "Upload"
  // In case it could not pass because of length, print "Increase Length"
  // In all other cases, print "Increase Width"
  if (upLen > len && upWid > wid) {
    console.log("Upload");
  } else if (upLen < len) {
    console.log("Increase Length");
  } else {
    console.log("Increase Width");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`12 14
8 19`);
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
