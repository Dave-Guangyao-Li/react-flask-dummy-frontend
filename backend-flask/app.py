import os

from flask import Flask, jsonify
from dotenv import load_dotenv
from propelauth_flask import init_auth, current_user, current_org

# data
# Define your blog posts
blogPosts = [
    {
        "id": 1,
        "title": "Blog Post 1",
        "content": "This is the first blog post"
    },
    {
        "id": 2,
        "title": "Blog Post 2",
        "content": "This is the second blog post"
    }
]


load_dotenv()

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
    
@app.route("/blogs")
# @auth.require_user
def blog_info():
    return jsonify(blogPosts)