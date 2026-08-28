import json
import os
import re
import smtplib
from datetime import datetime, timezone
from email.message import EmailMessage
from pathlib import Path

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

load_dotenv()

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
MESSAGES_LOG = Path(__file__).parent / "contact_messages.log"

FRONTEND_ORIGIN = os.environ.get("FRONTEND_ORIGIN", "http://localhost:3000")
SMTP_HOST = os.environ.get("SMTP_HOST")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER")
SMTP_PASS = os.environ.get("SMTP_PASS")
CONTACT_RECEIVER_EMAIL = os.environ.get("CONTACT_RECEIVER_EMAIL", SMTP_USER)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": FRONTEND_ORIGIN}})


def validate_submission(data):
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    message = (data.get("message") or "").strip()

    if not name or len(name) > 200:
        return None, "Name is required."
    if not email or not EMAIL_RE.match(email):
        return None, "A valid email is required."
    if not message or len(message) > 5000:
        return None, "Message is required."

    return {"name": name, "email": email, "message": message}, None


def send_email(submission):
    msg = EmailMessage()
    msg["Subject"] = f"Portfolio contact from {submission['name']}"
    msg["From"] = SMTP_USER
    msg["To"] = CONTACT_RECEIVER_EMAIL
    msg["Reply-To"] = submission["email"]
    msg.set_content(
        f"From: {submission['name']} <{submission['email']}>\n\n{submission['message']}"
    )

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)


def store_locally(submission):
    entry = {**submission, "receivedAt": datetime.now(timezone.utc).isoformat()}
    with MESSAGES_LOG.open("a", encoding="utf-8") as f:
        f.write(json.dumps(entry) + "\n")


@app.get("/api/health")
def health():
    return jsonify({"status": "ok"})


@app.post("/api/contact")
def contact():
    data = request.get_json(silent=True) or {}
    submission, error = validate_submission(data)
    if error:
        return jsonify({"error": error}), 400

    if SMTP_HOST and SMTP_USER and SMTP_PASS:
        try:
            send_email(submission)
        except smtplib.SMTPException:
            app.logger.exception("Failed to send contact email, falling back to local log")
            store_locally(submission)
    else:
        app.logger.warning("SMTP not configured — storing contact message locally")
        store_locally(submission)

    return jsonify({"status": "ok"})


if __name__ == "__main__":
    app.run(debug=True, port=int(os.environ.get("PORT", "5000")))
