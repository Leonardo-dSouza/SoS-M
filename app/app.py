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
def homepage():
    return render_template("index.html")


@app.route("/perfil")
def perfil():
    return render_template("perfil.html")

@app.route("/relate")
def relate():
    return render_template("relate.html")

@app.route("/mapa")
def mapa():
    return render_template("mapa.html")

@app.route("/contatos")
def contatos():
    return render_template("contatos.html")

@app.route("/forum")
def forum():
    return render_template("forum.html")

@app.route("/medidas")
def medidas():
    return render_template("medidas.html")

@app.route("/sobre")
def sobre():
    return render_template("sobre.html")



if __name__ == "__main__":
    app.run(debug= True)