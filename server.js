const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const petsRoutes = require("./routes/pets");

// Initialize dotenv
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/pets", petsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
