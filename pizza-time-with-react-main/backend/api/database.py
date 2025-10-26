import os
from pymongo import MongoClient

MONGO_URI = os.getenv('MONGO_URI')

if not MONGO_URI:
    raise Exception("MONGO_URI not found in environment variables. Please check your backend/.env.backend file.")

client = MongoClient(MONGO_URI)
db = client.pizzahouse
users_collection = db.users
subscribers_collection = db.subscribers

# Create unique indexes to prevent duplicates
users_collection.create_index('email', unique=True)
subscribers_collection.create_index('email', unique=True)

print("✅ Successfully connected to MongoDB.")