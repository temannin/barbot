from flask import Flask, json
from flask import jsonify

import sqlite3

connection = sqlite3.connect("aquarium.db")
print(connection.total_changes)

# https://stackoverflow.com/questions/45655382/database-schema-for-recipe-ingredient-measurement-amount

app = Flask(__name__)

@app.route("/")
def home():
    test ={}
    test["Test"] = "Tyler"
    return jsonify(test)

@app.route("/drinks")
def getDrinks():
    drink = {}
    drink["name"] = "Vodka Cranberry"
    drink["description"] = "Cool cocktail"
    return jsonify([drink])