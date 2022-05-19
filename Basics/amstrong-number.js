function runProgram(input) {
  for (let i = 1; i <= input; i++) {
    let sum = 0;
    let temp = i;
    while (temp > 0) {
      let rem = temp % 10;
      sum += rem * rem * rem;
      temp = parseInt(temp / 10);
    }
    if (sum == i) {
      console.log(i);
    }
  }
}
if (process.env.USERNAME == "bhargav") {
  runProgram(200);
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
