import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

# dataset = pd.read_json("jsonfile.json")


# Dummy Data
dftrain = pd.read_csv('https://storage.googleapis.com/tf-datasets/titanic/train.csv') # training data
dfeval = pd.read_csv('https://storage.googleapis.com/tf-datasets/titanic/eval.csv') # testing data
y_train = dftrain.pop('survived')
y_eval = dfeval.pop('survived')

x_train, x_test, y_train, y_test = dftrain(dftrain.drop('survived'), dftrain['survived'],test_size=0.8)

#number of trees you will be using to train model. tune!!
model = RandomForestClassifier(n_estimators=10)
model.fit(x_train, y_train) # training the model
model.score(x_test, y_test) 
