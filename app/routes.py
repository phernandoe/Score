from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
@app.route('/genres')
def index():
	return render_template('index.html')

@app.route('/')
@app.route('/artists')
def artists():
	return render_template('artists.html')
