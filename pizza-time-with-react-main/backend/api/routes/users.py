from flask import Blueprint, jsonify, request
from bson import json_util
from api.database import users_collection
from werkzeug.security import generate_password_hash

users_bp = Blueprint('users_bp', __name__)

@users_bp.route('/', methods=['GET'])
def get_users():
    try:
        users = list(users_collection.find({}, {'password': 0}))
        return json_util.loads(json_util.dumps(users)), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@users_bp.route('/<string:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user = users_collection.find_one({'id': user_id}, {'password': 0})
        if user:
            return json_util.loads(json_util.dumps(user)), 200
        else:
            return jsonify({"message": "User not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@users_bp.route('/<string:user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        user_data = request.get_json()
        if 'password' in user_data and user_data['password']:
            user_data['password'] = generate_password_hash(user_data['password'])
        
        # --- FIX: Removed the typo '.venv' from this line ---
        result = users_collection.update_one({'id': user_id}, {'$set': user_data})
        
        if result.matched_count == 0:
            return jsonify({"message": "User not found to update"}), 404
        return jsonify({"message": f"User {user_id} updated"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@users_bp.route('/<string:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        result = users_collection.delete_one({'id': user_id})
        if result.deleted_count == 0:
            return jsonify({"message": "User not found to delete"}), 404
        return jsonify({"message": f"User {user_id} deleted"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500