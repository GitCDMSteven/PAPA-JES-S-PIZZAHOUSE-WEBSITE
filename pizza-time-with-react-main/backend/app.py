# backend/app.py

import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError
from dotenv import load_dotenv
from bson import json_util

# --- Robust .env loading ---
# Find the absolute path to the directory this script is in
script_dir = os.path.dirname(os.path.abspath(__file__))
# Construct the full path to the .env.backend file
dotenv_path = os.path.join(script_dir, '.env.backend')
# Load the .env file from that specific path
load_dotenv(dotenv_path=dotenv_path)
# ---------------------------

# --- App Setup ---
app = Flask(__name__)
CORS(app) # Allow requests from your React frontend

# --- Database Connection ---
MONGO_URI = os.getenv('MONGO_URI')
if not MONGO_URI:
    raise Exception("MONGO_URI not found in environment variables. Please check your backend/.env.backend file.")

client = MongoClient(MONGO_URI)
db = client.pizzahouse # Use the 'pizzahouse' database
users_collection = db.users # Use the 'users' collection

print("✅ Successfully connected to MongoDB.")

# --- API Routes ---

# Get all users (or find a specific one by email)
@app.route('/users', methods=['GET'])
def get_users():
    try:
        users = list(users_collection.find({}))
        # Convert MongoDB's _id to a string so it can be sent as JSON
        return json_util.loads(json_util.dumps(users)), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Get a single user by their ID
@app.route('/users/<string:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user = users_collection.find_one({'id': user_id})
        if user:
            return json_util.loads(json_util.dumps(user)), 200
        else:
            return jsonify({"message": "User not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Create a new user (Registration)
@app.route('/users', methods=['POST'])
def create_user():
    try:
        user_data = request.get_json()
        # Ensure required fields are present
        if not user_data or not 'email' in user_data or not 'password' in user_data:
            return jsonify({"error": "Email and password are required"}), 400
        
        # Insert the new user
        users_collection.insert_one(user_data)
        return jsonify({"message": "User created"}), 201
    except DuplicateKeyError:
        return jsonify({"error": "Email already exists"}), 409
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Update a user
@app.route('/users/<string:user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        user_data = request.get_json()
        result = users_collection.update_one({'id': user_id}, {'$set': user_data})
        if result.matched_count == 0:
            return jsonify({"message": "User not found to update"}), 404
        return jsonify({"message": f"User {user_id} updated"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Delete a user
@app.route('/users/<string:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        result = users_collection.delete_one({'id': user_id})
        if result.deleted_count == 0:
            return jsonify({"message": "User not found to delete"}), 404
        return jsonify({"message": f"User {user_id} deleted"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --- Main Entry Point ---
if __name__ == '__main__':
    # The port must be different from the frontend port (5173)
    app.run(debug=True, port=5000)