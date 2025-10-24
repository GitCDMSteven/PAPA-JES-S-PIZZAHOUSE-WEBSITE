// backend/config/mongodb.mjs
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error('MONGO_URI is not defined in your environment variables. Please check your backend/.env.backend file.');
}

const client = new MongoClient(uri);
let db;

export async function connectToDatabase() {
  if (db) {
    return db;
  }
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB.");
    db = client.db("pizzahouse"); // This should match the database name in your MONGO_URI
    return db;
  } catch (error) {
    console.error("Could not connect to MongoDB.", error);
    process.exit(1);
  }
}