from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")


@app.route("/textEditor")
def textEditor():
    return render_template("textEditor.html")


@app.route("/bin2dec")
def bin2dec():
    return render_template("bin2dec.html")

@app.route("/makeText")
def makeText():
    return render_template("makeText.html")

app.run(debug=True)
