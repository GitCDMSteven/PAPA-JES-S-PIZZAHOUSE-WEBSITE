from api import create_app

app = create_app()

if __name__ == '__main__':
    # Set host='0.0.0.0' to make the server accessible from your network
    app.run(host='0.0.0.0', port=5000, debug=True)