const { MongoClient } = require('mongodb');
const express = require('express'); // Import Express for creating a simple API
const app = express(); // Create an Express app

const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
const client = new MongoClient(uri); // Create a MongoClient instance

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB database!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process on failure
  }
}


// const { client, connectToDatabase } = require('./'); // Import exported client and connection function

app.get('/api/quizzes', async (req, res) => {
  try {
    await connectToDatabase(); // Ensure connection to MongoDB

    const database = client.db('quiz_now'); // Access the quiz_now database
    const collection = database.collection('quiz_data'); // Access the quiz_data collection

    const quizzes = await collection.find().toArray(); // Fetch all quiz data

    res.json(quizzes); // Send the quiz data as JSON response
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    res.status(500).send("Error fetching quizzes"); // Handle errors gracefully
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000!");
});

module.exports = { client, connectToDatabase }; // Make the client and connection function available
