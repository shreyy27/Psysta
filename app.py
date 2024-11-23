from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/message', methods=['POST'])
def message():
    data = request.get_json()
    user_message = data.get('message', '')
    # Here you can integrate Emotionally Intelligent AI responses
    response = f"Thanks for sharing! Here's a positive thought: {user_message}"
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
