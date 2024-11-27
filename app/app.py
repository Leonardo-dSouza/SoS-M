from flask import Flask, jsonify, redirect, render_template, request, session # type: ignore
from flask_mysqldb import MySQL  # type: ignore
import io

app = Flask(__name__)



app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'senha'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_DB'] = 'SoS-M'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)


@app.route("/homepage")
def login():
    return render_template("homepage.html")


@app.route("/")
def home():
    return render_template("index.html")






if __name__ == "__main__":
    app.run(debug= True)