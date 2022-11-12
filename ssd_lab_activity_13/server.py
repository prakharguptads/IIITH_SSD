from flask import Flask , request, flash, url_for, redirect, render_template ,session
from flask_sqlalchemy import SQLAlchemy
from flask_login import *


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///theater.db'
app.config['SECRET_KEY'] = 'secretkey'

db = SQLAlchemy(app)
login_manager = LoginManager()

# login_manager.init_app(app)

def __init__(self, username, email, password):
   self.username = username
   self.email = email
   self.password = password

class User(db.Model):
    username = db.Column(db.String(25), primary_key=True)
    email = db.Column(db.String(80), unique=True, nullable=True)
    password = db.Column(db.String(80), nullable=True)

class Theater(db.Model):
    seatno = db.Column(db.String(25), primary_key=True)
    price = db.Column(db.String(80), nullable=True)
    status = db.Column(db.String(80), nullable=True)

@login_manager.user_loader
def load_user(username):
    return User.query.get(username)

def test_connection():
    with app.app_context():
        db.create_all()
        app.run(debug=True)

@app.route('/user/signin',methods=['POST'])
def do_signin():
    if(request.method=='POST'):
        req=request.get_json()
        email = req['email']
        password = req['password']
        check_user = User.query.filter_by(email=email).first()
        if(check_user is not None):
            if(check_user.password==password):
                login_user(check_user)
                return "Logged In Successfull"
            else:
                return "Incorrect"
        else:
            return "No Such User"

@app.route('/user/signup', methods = ['POST'])
def signup():
    if(request.method == 'POST'):
        req = request.get_json()
        username = req['username']
        email = req['email']
        password = req['password']
        # check_user = User.query.filter_by(name=name).first()
        obj = User(username=username,email=email,password=password)
        db.session.add(obj)
        db.session.commit()
        return "Signup Successful"
    else:
        return "Signup Unsuccessful"

@app.route('/user/signout')
def logout():
    session.clear()
    return redirect(url_for('home'))

@app.route('/seats/available', methods = ['GET'])
def available():
    if(request.method == 'GET'):
        req = request.get_json()
        username = req['username']
        email = req['email']
        password = req['password']
        # check_user = User.query.filter_by(name=name).first()
        obj = User(username=username,email=email,password=password)
        db.session.add(obj)
        db.session.commit()
        return "Signup Successful"
    else:
        return "Signup Unsuccessful"

test_connection()