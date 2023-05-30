import os

from flask import Flask
from dotenv import load_dotenv
from propelauth_flask import init_auth, current_user, current_org

load_dotenv()

os.environ['PROPELAUTH_AUTH_URL'] = 'https://864666172.propelauthtest.com'
os.environ['PROPELAUTH_API_KEY'] = 'dd0cc1204684a2c84d01fd631a98ff550a0a964bc9f38a7f65aabcd1e9ed63478e7e0d0d24c4a5792cce20922a65e06e'

app = Flask(__name__)
auth = init_auth(os.getenv("PROPELAUTH_AUTH_URL"), os.getenv("PROPELAUTH_API_KEY"))

@app.route("/whoami")
@auth.require_user
def who_am_i():
    """This route is protected by require_user"""
    return {"user_id": current_user.user_id}


@app.route("/org/<org_id>")
@auth.require_org_member()
def org_info(org_id):
    return {"org_id": current_org.org_id, 
      "org_name":   current_org.org_name}