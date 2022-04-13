// Pay for Phones! -9927:2:44
// Description

// You are given prices of 4 different mobile phones and also provided with the number of each of the phones that you need to buy.

// You have with you 150000 units of money. Comment if it is possible to buy those phones or not.

// Input
// Input Format :

// First line contains 4 space separated positive values which are prices of the 4 mobile phones respectively.

// Second line contains the quantity/count of each mobile phones that you need to buy

// Constraints :

// price of each phone < 100000

// Output
// Output "Possible" (without quotes) if it is possible to buy desired numbers of mobile phones.

// Else in all other case, print "Not Possible" (without quotes)

// Sample Input 1

// 10000 20000 15000 5000
// 2 3 4 3
// Sample Output 1

// Not Possible

function runProgram(input) {
  var input = input.trim().split("\n");
  const phones = input[0].trim("").split(" ").map(Number);
  const quantity = input[1].trim("").split(" ").map(Number);
  const total = 150000;

  let i = 0;
  let j = 0;
  let sum = 0;
  let p = phones.length;
  let n = quantity.length;
  while (i < p) {
    while (j < n) {
      sum += phones[i] * quantity[j];
      i++;
      j++;
    }
  }
  if (sum < total) {
    console.log("Possible");
  } else {
    console.log("Not Possible");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`10000 20000 15000 5000
2 3 4 3`);
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
