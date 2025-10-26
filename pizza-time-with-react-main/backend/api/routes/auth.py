from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from pymongo.errors import DuplicateKeyError
from bson import json_util
from api.database import users_collection

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/register', methods=['POST'])
def register_user():
    try:
        user_data = request.get_json()
        if not all(k in user_data for k in ['email', 'password', 'fullname', 'id']):
            return jsonify({"error": "Missing required fields"}), 400
        
        user_data['password'] = generate_password_hash(user_data['password'])
        
        result = users_collection.insert_one(user_data)
        
        user_data.pop('password', None)
        user_data['_id'] = result.inserted_id
        
        return json_util.loads(json_util.dumps(user_data)), 201

    except DuplicateKeyError:
        return jsonify({"error": "An account with this email already exists."}), 409
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@auth_bp.route('/login', methods=['POST'])
def login_user():
    try:
        login_data = request.get_json()
        if not all(k in login_data for k in ['email', 'password']):
            return jsonify({"error": "Email and password are required"}), 400

        user = users_collection.find_one({'email': login_data['email'].lower()})

        if user and check_password_hash(user['password'], login_data['password']):
            user.pop('password', None)
            return json_util.loads(json_util.dumps(user)), 200
        else:
            return jsonify({"error": "Invalid email or password"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500