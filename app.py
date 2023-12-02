from flask import Flask, render_template, request, session, redirect, url_for
from flask_mail import Mail, Message

app = Flask(__name__)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'stardrakeuser@gmail.com'
app.config['MAIL_PASSWORD'] = 'Cbd492uen!'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

if __name__ == "__main__":
    app.run(debug=True)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        return 0
    else:
        return render_template("index.html")
    
@app.route("/contactus", methods=["GET", "POST"])
def contactus():
    if request.method == "POST":
        email = request.form.get("email")
        message = request.form.get("message")

        msg = Message()
        msg.recipients = ["abdllaa@gmail.com"]
        msg.sender = (email)
        msg.body = (message)

        mail.send(msg)
        return render_template("contact-us.html")
    else:
        return render_template("contact-us.html")
    
@app.route("/ourwork", methods=["GET", "POST"])
def ourwork():
    if request.method == "POST":
        return 0
    else:
        return render_template("our-work.html")    