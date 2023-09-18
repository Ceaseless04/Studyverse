import os

from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_pymongo import PyMongo
from pymongo import MongoClient


# loading dotenv variblaes
load_dotenv()

app = Flask(__name__)

app.config['MONGO_URI'] = os.getenv('MONGO_URI')

client = MongoClient(os.getenv('MONGO_URI'))



app.db = client.form

mongo = PyMongo(app)

@app.route("/")
def index():
    collection = app.db.user_collection
    data = collection.find()
    result = []
    for item in data:
        name = item.get("name")
        age =item.get("age")
        period = item.get("period")
        env = item.get("env")
        hours = item.get("hours")
        style = item.get("style")

        result.append({
            "name": name,
            "age": age,
            "period": period,
            "env": env,
            "hours": hours,
            "style": style
        })
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)