// Detect Palindrome -9796:27:55
// Description

// Given an integer, print "Yes" (without quotes) if that integer is aPalindrome, else print "No" (without quotes)

// You must not use the reverse() function. Using that would lead to disqualification

// Input
// Input Format

// You are provided with one integer.

// Constraints

// The provided integer is always lesser than 1000000

// Output
// Print Yes or No depending upon the integer.

// Sample Input 1

// 1221
// Sample Output 1

// Yes
// Hint

// Sample 1 Explanation

function runProgram(input) {
  var data = input.trim().split("").map(Number);
  //palindrome is nothing but if we reverse the input same value as input like 101,1221 etc...
  let left = 0;
  let right = data.length - 1;
  let palindrome = false;
  while (left < right || left == right) {
    console.log(data[left], data[right]);
    if (data[left] === data[right]) {
      palindrome = true;
    }
    left++;
    right--;
  }
  if (palindrome) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`1221`);
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
