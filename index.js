const express = require("express");
const app = express();

// Daftar pengguna
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

// Endpoint untuk mendapatkan daftar pengguna
app.get("/api/users", (req, res) => {
  res.json(users);
});

module.exports = app;
