from flask import Flask, jsonify, Response
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

@app.route('/api/numbers', methods=['GET'])
def get_numbers():
    # Generate an array of 10 random numbers, each with 10 digits
    numbers = [random.randint(10**9, 10**10-1) for _ in range(10)]
    return jsonify(numbers)

@app.route('/api/threat', methods=['GET'])
def get_threat():
    threat = random.choice(potential_threats)
    return jsonify(threat)

@app.route('/video_feed')
def video_feed():
    # Logic to fetch and return video stream
    return Response(generate_video(), mimetype='multipart/x-mixed-replace; boundary=frame')

def generate_video():
    while True:
        # Logic to read frame from camera and encode as jpg
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

if __name__ == '__main__':
    app.run(debug=True)
