from app import app
from flask import render_template
import numpy as np
import random as rand


def loadCsv(path):
	text = np.genfromtxt(path, delimiter=",", skip_header=1, dtype=object)
	return text


def genNumbers(number):
	indexes = []
	indexes.append(rand.sample(range(1,number), 6))
	return indexes


randomIndexes = genNumbers(25)

classical = loadCsv("app/static/data/classical_rating.csv")
classicalSongs = classical[:25, 0]
classicalRatings = classical[:25, 1]
classicalInfo = (list(classicalSongs[randomIndexes]), list(classicalRatings[randomIndexes]))

country = loadCsv("app/static/data/country_rating.csv")
countrySongs = country[:25, 0]
countryRatings = country[:25, 1]
countryInfo = (list(countrySongs[randomIndexes]), list(countryRatings[randomIndexes]))

festival = loadCsv("app/static/data/festival_rating.csv")
festivalSongs = festival[:25, 0]
festivalRatings = festival[:25, 1]
festivalInfo = (list(festivalSongs[randomIndexes]), list(festivalRatings[randomIndexes]))

jazz = loadCsv("app/static/data/jazz_rating.csv")
jazzSongs = jazz[:25, 0]
jazzRatings = jazz[:25, 1]
jazzInfo = (list(jazzSongs[randomIndexes]), list(jazzRatings[randomIndexes]))

hiphop = loadCsv("app/static/data/hiphop_rating.csv")
hiphopSongs = hiphop[:25, 0]
hiphopRatings = hiphop[:25, 1]
hiphopInfo = (list(hiphopSongs[randomIndexes]), list(hiphopRatings[randomIndexes]))

rock = loadCsv("app/static/data/rock_rating.csv")
rockSongs = rock[:25, 0]
rockRatings = rock[:25, 1]
rockInfo = (list(rockSongs[randomIndexes]), list(rockRatings[randomIndexes]))

@app.route('/')
@app.route('/index')
@app.route('/genres')
def index():
	return render_template('index.html', classicalInfo=classicalInfo, countryInfo=countryInfo, festivalInfo=festivalInfo, jazzInfo=jazzInfo, hiphopInfo=hiphopInfo, rockInfo=rockInfo)

@app.route('/artists')
def artist():
	return render_template('artistList.html')

@app.route('/artist')
def artists():
	return render_template('artist.html')

@app.route('/login')
def login():
	return render_template('login.html')


@app.route('/recommend')
def recommend():
	return render_template('recommend.html')

