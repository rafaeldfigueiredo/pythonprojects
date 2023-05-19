from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def textEditor():
    return render_template("textEditor.html")


@app.route("/bin2dec")
def bin2dec():
    return render_template("bin2dec.html")

app.run(debug=True)