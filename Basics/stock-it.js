// Stock it up Ended
// Description

// Due to recent pandemic announcement we need to make a stock requirement generator, where all the items required for a week with price are given.

// For one week:

// 1. Flour = 5kg| Price = 110 per kg

// 2. Rice = 2kg| Price = 120 per kg

// 3. Sugar = 2kg| Price = 42 per kg

// 4. Pulse = 3kg| Price = 53 per kg

// 5. Bread = 2 packet | Price = 40 per packet

// 6. Milk = 5 litre| Price = 32 per litre

// 7. Oil = 2 litre| Price = 126 per litre

// The user will give N number of weeks for stock calculation with a list of 7 elements with 0 and 1 representing each item in the list, if the element is 0 then that item is not required by the person.

// The output should be the overall cost of the items for that number of weeks.

// Input
// Input Format :

// N number of weeks

// List of 0 and 1 representing the require of the item

// Constraints :

// 0 <= N <= 1000

// Output
// The cost of overall items for the number of weeks

// Sample Input 1

// 4
// 0 1 1 1 0 0 1
// Sample Output 1

// 2940
// Hint

// Output Explanation :

// Items required (0 1 1 1 0 0 1)

// Flour No 0

// Rice Yes 1

// Sugar Yes 1

// Pulse Yes 1

// Bread No 0

// Milk No 0

// Oil Yes 1

// Cost of items for one week 735

// Cost of items for 4 weeks 2940
function runProgram(input) {
  const data = input.trim().split("\n");
  const n = +data[0];
  const arr = data[1].trim().split(" ").map(Number);
  const flour = 5 * 110;
  const rice = 2 * 120;
  const sugar = 2 * 42;
  const pulse = 3 * 53;
  const bread = 2 * 40;
  const milk = 5 * 32;
  const oil = 2 * 126;

  let total = 0;
  if (arr[0] === 0) {
    total += 0;
  } else if (arr[0] === 1) {
    total += flour;
  }
  if (arr[1] === 0) {
    total += 0;
  } else if (arr[1] === 1) {
    total += rice;
  }
  if (arr[2] === 0) {
    total += 0;
  } else if (arr[2] === 1) {
    total += sugar;
  }
  if (arr[3] === 0) {
    total += 0;
  } else if (arr[3] === 1) {
    total += pulse;
  }
  if (arr[4] === 0) {
    total += 0;
  } else if (arr[4] === 1) {
    total += bread;
  }
  if (arr[5] === 0) {
    total += 0;
  } else if (arr[5] === 1) {
    total += milk;
  }
  if (arr[6] === 0) {
    total += 0;
  } else if (arr[6] === 1) {
    total += oil;
  }
  console.log(total * n);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`4
0 1 1 1 0 0 1`);
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
