const express = require("express");
const app = express();
const port = 3000;

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.get("/awesome", (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.get("/hello/:firstname/:lastname", (req, res) => {
  console.log(req.params);
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}!`);
});

app.get("/howdy/:firstName", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(
    `Howdy ${req.params.firstName} ${req.query.title} ${req.query.year} !`
  );
});

app.get("/:id", (req, res) => {
  if (plants[req.params.id]) {
    res.send(plants[req.params.id]);
  } else {
    res.send("cannot find id of " + req.params.id);
  }
});

app.listen(port, () => {
  console.log("listening on port", port);
});