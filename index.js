const path = require("path")
const express = require("express");
const app = express();

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => res.sendStatus(404));

app.listen(8080, () => console.log("App up on 8080"));