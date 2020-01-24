const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.createReadStream(path.join(__dirname, "files/index.html")).pipe(res);
    } else {
      // regular expression for filename requested
      const re = /\/(\w+)*/;
      const filename = req.url.replace(re, "$1");
      fs.createReadStream(path.join(__dirname, `/files/${filename}`)).pipe(res);
    }
  })
  .listen(3000);
