// World Cup Final
// Description

// You are given 3 parameters of two different cricket teams in World Cup Final.

// First parameter  :  Score

// Second parameter :  Score in super over

// Third parameter  :  Total number of fours scored in the inning.

// If first parameter of any one team is greater than other then that team wins.

// If first parameter of both the teams are same, then the team whose second parameter is greater wins the match.

// In case the second parameter is also same, then the team that has higher value of third parameter wins the game.

// Input
// Input Format

// First line contains the three discussed parameter for New Zealand

// Second line contains three discussed parameters for England

// Constraints

// All parameters < 10000

// Output
// Output Format

// Output "England" (without quotes) if England wins the game, else print "New Zealand" if New Zealand wins the game.

// Sample Input 1

// 241 15 21
// 241 15 26
// Sample Output 1

// England

function runProgram(input) {
  var data = input.split(/[\n]+/);
  const newZeeland = data[0].trim("").split(" ").map(Number);
  const england = data[1].trim("").split(" ").map(Number);
  const [s1, so1, tf1] = newZeeland;
  const [s2, so2, tf2] = england;
  if (s1 > s2) {
    console.log("New Zealand");
  } else if (s1 === s2) {
    if (so1 > so2) {
      console.log("New Zealand");
    } else if (so1 === so2) {
      if (tf1 > tf2) {
        console.log("New Zealand");
      } else {
        console.log("England");
      }
    } else {
      console.log("England");
    }
  } else {
    console.log("England");
  }
}

if (process.env.USERNAME == "bhargav") {
  runProgram(`241 15 21
241 15 26`);
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
