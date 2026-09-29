from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json(silent=True) or request.form
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    message = (data.get("message") or "").strip()
    if not name or not email:
        return jsonify({"ok": False, "error": "Name and email are required"}), 400
    return jsonify({
        "ok": True,
        "message": "Data submitted successfully",
        "data": {"name": name, "email": email, "message": message}
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
