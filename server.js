// const express = require("express");
// const app = express();

// //start the server
// const port = 5000;
// app.listen(port, () => console.log(`the server is running on ${port}`));
// app.get("/", (req, res) => {
//   res.send("<h1 style='color:red';> Home Page </h1>");
// });
// app.get("/products", (req, res) => {
//   res.send("<h1 style='color:blue';> Product page </h1>");
// });

//send an html page sendFile
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/Public/index.html");
// });
// app.get("/products", (req, res) => {
//   res.sendFile(__dirname + "/Public/product.html");
// });
// app.get("/style.css", (req, res) => {
//   res.sendFile(__dirname + "/Public/style.css");
// });
// function logger(req, res, next) {
//   console.log(req.method, "at", req.url);
//   next();
// }
//global middelware
// app.use(logger);
// app.use(express.static("Public"));
// app.use("/static", express.static(__dirname + "/Public"));
