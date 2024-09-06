import app from './app.js'; // Import the app instance
import { connectDB } from './config/db.js'; // Import the database connection function

// Environment variables
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});