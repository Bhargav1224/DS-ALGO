// Units Consumed Ended
// Description

// Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

//----- units-----||---rupees per unit--
//==========================================
// 0 to 50 units --- 3/- per unit
// 51 to 150 units --- 5/- per unit
// above 150 units ---10/- per unit

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// Given the bill, write a program to find the number of units consumed.

// Input
// Input Format:

// First and the only line of input contains the bill amount

// Constraints:

// Bill amount is an integer <= 1000

// Output
// Output the number of units consumed

// Sample Input 1

// 930
// Sample Output 1

// 170
function runProgram(input) {
  var amount = +input;
  const addAmount = 80;
  let total = amount - addAmount; //120
  let units = 0;
  if (total >= 150) {
    total = total - 150;
    units = units + 50;
  }
  if (total >= 500) {
    total = total - 500;
    units = units + 100;
  }
  let rem = total / 10;
  units += rem;
  console.log(units);
}


if (process.env.USERNAME == "bhargav") {
  runProgram(`930`);
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
