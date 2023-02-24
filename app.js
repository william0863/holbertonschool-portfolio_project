const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const auth = require("./auth");
const User = require("./user");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/users", { useNewUrlParser: true });

// Define user sign up route
app.post("/signup", auth.signup);

// Define user login route
app.post("/login", auth.login);

// Define protected route
app.get("/protected", auth.authenticateUser, (req, res) => {
  res.json({ message: "Protected route" });
});

// Define user logout route
app.post("/logout", auth.logout);

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
