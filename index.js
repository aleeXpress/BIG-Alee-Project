import express from "express";
import  {getAllGuns, getGuns } from "./api/api.js";
var app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.get("/", async function (req, res) {
  const guns = await getAllGuns();
  res.render("home.ejs", {
    title: "ALL MY GUNS",
    guns: guns,
  });
});

app.get("/guns/", async function (req, res) {
  let id = req.query.id;
  const gun = await getGuns(id);
  res.render("details.ejs", {
    item:gun,
  });
});

app.listen(3000);
console.log("3000 is the magic port");
