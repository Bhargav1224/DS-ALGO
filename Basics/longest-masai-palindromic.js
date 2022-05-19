// Masai Palindromic Substring
// Description

// You are provided a string S. Write a program that returns length of the longest palindromic substring of that string.

// Input
// Input Format

// You are provided with a string

// Constraints

// Length of string < 100

// Output
// Output Format

// Output one number which is length of the longest substring which is a palindrome

// Sample Input 1

// thisracecarisgood
// Sample Output 1

// 7
// Hint

// Sample 1 Explanation

// The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings. Hence the output is 7

function runProgram(input) {
  let str = input.split("");
  // console.log(str);
  Palindrome(str);
}

function Palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  let palindrome = false;
  let count = 0;
  while (left < right) {
    console.log(str[left], str[right]);
    if (str[left] === str[right]) {
      palindrome = true;
      count++;
      left++;
      right--;
    } else {
      left++;
      right--;
    }
  }
  if (palindrome) {
    console.log("Yes");
    console.log(count);
  } else {
    console.log("No");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`thisracecarisgood`);
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
