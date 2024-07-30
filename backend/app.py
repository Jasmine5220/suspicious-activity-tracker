from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# List of potential threats
potential_threats = [
    "Fire detected", 
    "Smoke detected", 
    "Intrusion detected", 
    "Suspicious activity detected", 
    "Unidentified object detected", 
    "High temperature detected", 
    "Gas leak detected"
]

# Store random usernames and passwords
user_credentials = {
    "user1": "password1",
    "user2": "password2",
    "user3": "password3",
    "user4": "password4",
    "user5": "password5"
}


@app.route('/api/threat', methods=['GET'])
def get_threat():
    threat = random.choice(potential_threats)
    return jsonify(threat)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    user_id = data.get('userId')
    password = data.get('password')
    
    if user_id in user_credentials and user_credentials[user_id] == password:
        return jsonify({"message": "Successfully logged in"}), 200
    elif user_id not in user_credentials:
        return jsonify({"message": "Username doesn't exist"}), 404
    else:
        return jsonify({"message": "Username or password wrong"}), 401

if __name__ == '__main__':
    app.run(debug=True)
