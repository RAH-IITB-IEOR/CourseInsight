// db.js
const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

async function connectToMongo() {
  try {
    await client.connect();
    db = client.db("CourseInsight"); 
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
}

function getDB() {
  if (!db) throw new Error("❌ DB not initialized");
  return db;
}

module.exports = { connectToMongo, getDB };
