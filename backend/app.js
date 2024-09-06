import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


// Initialize express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Use routes
app.get('/', (_, res) =>{
    res.send("working")
});

// Error handling middleware
app.use((err, _, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export default app; // Export the app instance