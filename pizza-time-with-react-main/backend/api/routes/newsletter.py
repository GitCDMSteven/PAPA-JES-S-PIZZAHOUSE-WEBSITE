from flask import Blueprint, request, jsonify
from pymongo.errors import DuplicateKeyError
from api.database import db

newsletter_bp = Blueprint('newsletter_bp', __name__)

# Use a separate collection for subscribers for better organization
subscribers_collection = db.subscribers
# Ensure emails are unique to prevent duplicates
subscribers_collection.create_index('email', unique=True)

@newsletter_bp.route('/subscribe', methods=['POST'])
def subscribe():
    """Receives an email and saves it to the database."""
    try:
        data = request.get_json()
        email = data.get('email')

        if not email:
            return jsonify({"error": "Email address is required."}), 400

        # Insert the new subscriber's email
        subscribers_collection.insert_one({'email': email.lower()})
        
        return jsonify({"message": "You have successfully subscribed!"}), 201

    except DuplicateKeyError:
        # This error is triggered by the unique index if the email already exists
        return jsonify({"error": "This email address is already subscribed."}), 409
    except Exception as e:
        # Catch any other potential errors
        return jsonify({"error": str(e)}), 500