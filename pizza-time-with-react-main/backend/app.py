import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError
from dotenv import load_dotenv
from bson import json_util, ObjectId
from werkzeug.security import generate_password_hash, check_password_hash

# --- Robust .env loading ---
script_dir = os.path.dirname(os.path.abspath(__file__))
dotenv_path = os.path.join(script_dir, '.env.backend')
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
db = client.pizzahouse
users_collection = db.users

# Create a unique index for the email field to prevent duplicates
users_collection.create_index('email', unique=True)

print("✅ Successfully connected to MongoDB.")

# --- API Routes ---

# [MODIFIED] Get all users (excluding passwords for security)
@app.route('/users', methods=['GET'])
def get_users():
    try:
        # Projection to exclude the password field
        users = list(users_collection.find({}, {'password': 0}))
        return json_util.loads(json_util.dumps(users)), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Get a single user by their ID
@app.route('/users/<string:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user = users_collection.find_one({'id': user_id}, {'password': 0})
        if user:
            return json_util.loads(json_util.dumps(user)), 200
        else:
            return jsonify({"message": "User not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# [MODIFIED] Create a new user with a hashed password
@app.route('/users', methods=['POST'])
def create_user():
    try:
        user_data = request.get_json()
        if not user_data or 'email' not in user_data or 'password' not in user_data:
            return jsonify({"error": "Email and password are required"}), 400
        
        # Hash the password before storing it
        hashed_password = generate_password_hash(user_data['password'])
        user_data['password'] = hashed_password
        
        result = users_collection.insert_one(user_data)
        
        # Return the created user's data (without password)
        created_user = users_collection.find_one({'_id': result.inserted_id}, {'password': 0})
        
        return json_util.loads(json_util.dumps(created_user)), 201
    except DuplicateKeyError:
        return jsonify({"error": "An account with this email already exists."}), 409
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# [NEW] Login route for secure authentication
@app.route('/login', methods=['POST'])
def login_user():
    try:
        login_data = request.get_json()
        if not login_data or 'email' not in login_data or 'password' not in login_data:
            return jsonify({"error": "Email and password are required"}), 400

        user = users_collection.find_one({'email': login_data['email'].lower()})

        if user and check_password_hash(user['password'], login_data['password']):
            # Login successful, return user data without the password
            user.pop('password', None)
            return json_util.loads(json_util.dumps(user)), 200
        else:
            # Unauthorized access
            return jsonify({"error": "Invalid email or password"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Update a user
@app.route('/users/<string:user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        user_data = request.get_json()
        # If password is being updated, hash it
        if 'password' in user_data and user_data['password']:
            user_data['password'] = generate_password_hash(user_data['password'])
        
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
    app.run(debug=True, port=5000)