const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// simple fake database
let users = [];

// SIGNUP API
app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;

    users.push({ username, email, password });

    res.json({ message: "Account created 🚀" });
});

// LOGIN API
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    let user = users.find(u => u.username === username && u.password === password);

    if(user){
        res.json({ message: "Login successful 🚀" });
    } else {
        res.json({ message: "Invalid credentials ❌" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});