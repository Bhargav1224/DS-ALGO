// Tickets Booking
// Description

// You are provided price of three different types of ticket: 1st Class, 2nd class and 3rd class.

// Also, you know the number of tickets of each type you need to book. Find total cost you need to pay.

// Input
// Input Format:

// First line contains 3 space separated positive integers which represents prices of 1st class, 2nd class and 3rd class respectively.

// Second line contains 3 space separated integers which is the number of tickets you need to buy of 1st class, 2nd class and 3rd class respectively.

// Constraints:

// All provided numbers <10000

// Output
// Output one number which is the price of all tickets to be booked.

// Sample Input 1

// 1200 1400 2000
// 5 6 2
// Sample Output 1

// 18400

function runProgram(input) {
  var input = input.trim().split("\n");
  const price = input[0].trim("").split(" ").map(Number);
  const number = input[1].trim("").split(" ").map(Number);

  let i = 0;
  let j = 0;
  let sum = 0;
  let p = price.length;
  let n = number.length;
  while (i < p) {
    while (j < n) {
      sum += price[i] * number[j];
      i++;
      j++;
    }
  }
  console.log(sum);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`1200 1400 2000
5 6 2`);
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
