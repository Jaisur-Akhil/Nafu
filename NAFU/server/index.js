/** @format */
const cors = require("cors");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
// app.use(bodyParser.json());
app.use(bodyParser.text({ extend: true }));
app.use(bodyParser.json({ extend: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mysql",
});

// app.post("/register", (req, res) => {
//   db.query(
//     'INSERT INTO users values("2userN", "2email@gmail.com" , "2passWord" , 24444444);',
//     (err, result) => {
//       console.log(err);
//     }
//   );
// });

app.get("/", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/register", (req, res) => {
  console.log(req.body.username);
  const q =
    "INSERT INTO users(`username`, `emailid`, `password`, `mobile`) VALUES (?)";
  const values = [
    req.body.username,
    req.body.emailid,
    req.body.password,
    req.body.mobile,
  ];
  console.log(values, "i am from server");
  db.query(q, [values], (err, result) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }

    return result;
  });
});

app.listen(3001, () => {
  console.log("running server at 3001");
});
