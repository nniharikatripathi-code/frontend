const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
res.send("Node.js Backend Server is Running!");
});

// API route
app.get("/api/message", (req, res) => {
res.json({
message: "Hello from Node.js Backend!"
});
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log("Backend server running at http://localhost:5000");
});