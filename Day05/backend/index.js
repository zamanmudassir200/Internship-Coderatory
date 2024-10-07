import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/user.js";
import cors from "cors";
const app = express();
dotenv.config();

app.use(cors());
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDb connected"))
  .catch((e) => console.log(e.message));
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});
app.post("/create", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.listen(port, () => console.log(`Server started on port ${port}`));
