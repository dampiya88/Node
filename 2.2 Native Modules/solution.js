const fs = require("fs");

fs.writeFile("message.txt", "Hello Node test 2", (err) => {
  if (err) throw err;
  console.log(err);
});

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
