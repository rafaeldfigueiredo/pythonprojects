from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    headText = """
    <title>Cool page</title>
    <style>
        
    </style>
    """

    bodyText = """
    <p>Wow</p>
    """

    page = """
    <head>{}</head>
    <body>{}</body>""".format(headText,bodyText)

    return page

app.run(debug=True)