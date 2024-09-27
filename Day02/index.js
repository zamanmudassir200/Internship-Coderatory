const express = require("express");

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/create", (req, res) => {
  res.send("Create page");
});
app.patch("/update", (req, res) => {
  res.send("Update page");
});
app.delete("/delete", (req, res) => {
  res.send("Delete page");
});

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
