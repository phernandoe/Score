from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
@app.route('/genres')
def index():
	return render_template('index.html')

@app.route('/artists')
def artist():
	return render_template('artistList.html')

@app.route('/artist')
def artists():
	return render_template('artist.html');


