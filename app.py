from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        return 0
    else:
        return render_template("index.html")
    
@app.route("/contactus", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        return 0
    else:
        return render_template("contact-us.html")