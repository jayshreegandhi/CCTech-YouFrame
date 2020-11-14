from flask import Flask, render_template, request, redirect, url_for,jsonify
import os
import time
import json

app = Flask(__name__)
# prevent caching static files
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['UPLOAD_FOLDER'] = "F:\\CCTech - Copy\\static\\images"

@app.route('/')
def main_page():
    return render_template('index.html')

@app.route('/data')
def filelist():
    data = os.listdir(app.config['UPLOAD_FOLDER'])
    print(json.dumps(data))
    return json.dumps(data)
    

@app.route('/Upload', methods=['POST'])
def upload():
    inputFile = request.files['file']
    fileName = inputFile.filename
    fileExtension = os.path.splitext(fileName)[1]
    data = inputFile.read()
    with open(os.path.join(app.config['UPLOAD_FOLDER'], "Image-" + str(time.time()) + fileExtension), 'wb') as f:
            f.write(data)
            f.close()
    return redirect(url_for('main_page'))

if __name__ == '__main__':
    app.run(debug=True)
