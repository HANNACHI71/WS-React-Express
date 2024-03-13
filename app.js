const { Console } = require("console");
const fs = require("fs");
let content = "Hello Node";
fs.writeFile("welcome.txt", content, (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" has been created with content: ', content);
});

let data = fs.readFileSync("./welcome.txt");
console.log(data.toString());

