from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def textEditor():
    return render_template("textEditor.html")
app.run(debug=True) 