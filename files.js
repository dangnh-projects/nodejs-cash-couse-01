const fs = require("fs");

// reading files
fs.readFile("./docs/blog-01.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    //console.log(data);
    console.log(data.toString());
  }
});

console.log("last line");

// writing files
/*
fs.writeFile("./docs/blog-01.txt", "hello world!!!", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File was written!!!");
  }
});

fs.writeFile("./docs/blog-02.txt", "hello world!!!", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File was written!!!");
  }
});
*/

// directories
/*
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder created!!!");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder deleted!!!");
  });
}
*/

// deleting files
if (fs.existsSync("./docs/deletefile.txt")) {
  fs.unlink("./docs/deletefile.txt", (err) => {
    if (err) console.log(err);
    console.log("File deleted!!!");
  });
}
