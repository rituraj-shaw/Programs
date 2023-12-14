var http = require("http");
const mysql = require("mysql");

const host = "127.0.0.1";
const port = 5501;

const requestListener = function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.url === "/signup") {
    var body = "";
    req.on("data", (chunk) => {
      body = JSON.parse(chunk.toString()); // convert Buffer to string
    });

    req.on("end", () => {
      console.log(body);
      var con = mysql.createConnection({
        host: "localhost",
        username: "root",
        password: "password",
      });

      con.connect(function (err) {
        console.log("Error");
        if (err) {
          console.log(err);
          return;
        }

        con.query("Use IT");
        con.query(`Insert into User Values(${email}, ${password})`);
      });

      res.end("ok");
    });
  }
  if (req.url === "/signin") {
    var body = "";
    req.on("data", (chunk) => {
      body = JSON.parse(chunk.toString()); // convert Buffer to string
    });

    req.on("end", () => {
      console.log(body);
      var con = mysql.createConnection({
        host: "localhost",
        username: "root",
        password: "password",
      });

      con.connect(function (err) {
        console.log("Error");
        if (err) {
          console.log(err);
          return;
        }

        var userExists = false;

        con.query("Use IT");
        con.query(
          `select * from User where Email=${email} and Password=${password}};`,
          function (err, result) {
            if (err) throw err;

            if (result) {
              userExists = true;
            }
          }
        );
      });

      res.end(userExists);
    });
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Listening on port ${port}`);
});
