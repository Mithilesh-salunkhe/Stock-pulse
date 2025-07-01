require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const bcrypt = require("bcrypt");
const { UserModel } = require("./models/UserModel");



const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);
app.use(cookieParser());

// MongoDB Connection
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

// Routes
app.post("/auth/signup", async (req, res) => {
  const { username, email, password } = req.body;

  // Input validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  
  if (password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters" });
  }

  try {
    // Check for existing user
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Consistent hashing with cost factor 12
    const hashedPassword = await bcrypt.hash(password.trim(), 12);
    
    // Create new user
    const newUser = new UserModel({ 
      username: username.trim(), 
      email: email.trim(), 
      password: hashedPassword 
    });
    
    await newUser.save();

    // Return safe user data (without password)
    const { password: _, ...safeUser } = newUser.toObject();
    
    res.status(201).json({ 
      message: "User registered successfully",
      user: safeUser
    });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: "Registration failed" });
  }
});

//login route
app.post("/auth/login", async (req, res) => {
  const { email: rawEmail, password: rawPassword } = req.body;
  const email = rawEmail?.trim();
  const password = rawPassword?.trim();

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }
  
  try {
    // Find user with password field
    const user = await UserModel.findOne({ email }).select('+password');
    
    if (!user) {
      // Generic message to prevent user enumeration
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Secure password comparison
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Return safe user data (without password)
    const { password: _, ...safeUser } = user.toObject();
    
    res.status(200).json({ 
      message: "Login successful",
      user: safeUser
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Authentication failed" });
  }
});


app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.send("Order saved!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in saving order.");
  }
});

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in fetching holdings.");
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in fetching positions.");
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in fetching orders.");
  }
});


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}...`);
});
