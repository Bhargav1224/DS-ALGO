// Count Consonant
// Description

// You are provided a string S. Your task is to write a program that counts the number of consonants (non-vowels characters) present in the string.

// Input
// Input Format:

// First-line contains a string S

// Constraints:

// Length of String is always lesser than 1000

// Output
// Output one number which is the count of number of consonants present in the string.

// Sample Input 1

// masaischool
// Sample Output 1

// 6
function runProgram(input) {
  var str = input;
  let count = 0;
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) !== "a" &&
      str.charAt(i) !== "e" &&
      str.charAt(i) !== "i" &&
      str.charAt(i) !== "o" &&
      str.charAt(i) !== "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`masaischool`);
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
