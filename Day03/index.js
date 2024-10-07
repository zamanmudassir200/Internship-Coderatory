const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);

app.use(express.static("./public"));
const io = socketIo(server);

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});
io.on("connection", (socket) => {
  socket.on("User Message", (message) => {
    io.emit("message", message);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
