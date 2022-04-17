// Identify Prime -9798:19:30
// Description

// You are provided an integer N, print "Yes" (without quotes) if the given integer is prime, else print "No" (without quotes).

// Input
// Input Format

// First and the only integer contains N.

// Constraints

// N<100000

// Output
// Output Format

// Output Yes or No depending on the conditions mentioned above.

// Please note that the case of each character matters.

// Sample Input 1

// 13
// Sample Output 1

// Yes
// Hint

// Sample 1 Explanation

// Since 13 is a prime number, the output is Yes.
function runProgram(input) {
  var number = +input.split(/[\n]+/);
  // program to check if a number is prime or not

  // take input from the user
  let isPrime = true;

  // check if number is equal to 1
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`Yes`);
    } else {
      console.log(`No`);
    }
  }

  // check if number is less than 1
  else {
    console.log("The number is not a prime number.");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`13`);
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
