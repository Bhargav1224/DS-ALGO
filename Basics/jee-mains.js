// The JEE
// Description

// JEE is one of the most prestigious exams. You need to implement ranking rule in it. Given marks of Physics, Chemistry and Mathematics of two students, Find out the winner using below rules:

// => If total marks of one student is greater than other, he/she wins

// => If total marks of both the students are same, then the one having more marks in Maths wins. In case their marks in maths are also same, the one whose marks in Physics is more wins the game.

// Input
// Input Format :
// First line of input contains 3 space separated integers which is the marks in physics, chemistry and mathematics respectively of first student

// Second line of input contains 3 space separated integers which is the marks in physics, chemistry and mathematics respectively of second student

// Constraints :

// Marks < 36000

// Output
// Output "First" (without quotes) if first student wins.

// In all other case print "Second"

// Sample Input 1

// 120 90 70
// 90 80 110
// Sample Output 1

// Second
// Hint

// Output Explanation :

// Both students have equal total marks, that is 280 but second student has more marks in Maths, so he wins (gets better rank)

function runProgram(input) {
  var data = input.split(/[\n]+/);
  const person1 = data[0].trim("").split(" ").map(Number);
  const person2 = data[1].trim("").split(" ").map(Number);
  const [p1, c1, m1] = person1;
  const [p2, c2, m2] = person2;
  //   console.log(p1, c1, m1, p2, c2, m2);
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < person1.length; i++) {
    sum1 += person1[i];
  }
  for (let i = 0; i < person2.length; i++) {
    sum2 += person2[i];
  }
  if (sum1 > sum2) {
    console.log("First");
  } else if (sum1 === sum2) {
    if (m1 > m2) {
      console.log("First");
    } else if (m1 === m2) {
      if (p1 > p2) {
        console.log("First");
      } else {
        console.log("Second");
      }
    } else {
      console.log("Second");
    }
  }
  //   console.log(sum1, sum2);
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`120 90 70
90 80 110`);
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
