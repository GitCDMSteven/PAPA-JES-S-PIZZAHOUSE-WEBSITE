from flask import Flask
from flask_cors import CORS
import os
from dotenv import load_dotenv

# --- CRITICAL: Load environment variables FIRST ---
# This ensures database credentials are ready before any blueprints are imported.
script_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
dotenv_path = os.path.join(script_dir, '.env.backend')
load_dotenv(dotenv_path=dotenv_path)

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    # --- CRITICAL: Import and register all your blueprints ---
    # This section makes your routes (like /auth/register) exist.
    from .routes.auth import auth_bp
    from .routes.users import users_bp
    from .routes.newsletter import newsletter_bp

    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(users_bp, url_prefix='/users')
    app.register_blueprint(newsletter_bp, url_prefix='/newsletter')

    return app