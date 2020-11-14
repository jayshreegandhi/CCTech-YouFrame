# CCTech-YouFrame
Full-stack online photo-sharing application named "YouFrame"

#### YouFrame:

- The homepage of the website loads a dashboard of all the uploaded photos
- User can upload the image through the button at the top by selecting a photo from the PC and upload it. Only image file formats are allowed.
- On successful upload, this new photo appears at the 1st tile, shifting all other photos by 1 position

### References for UI

#### Desktop View
<img src="Desktop View.png" height="300" alt="Desktop Layout">

#### Mobile View
<img src="Mobile View.png" height="300" alt="Mobile Layout">

### Technical Info
#### Front-End
- The Front-End is made using plain HTML/CSS/JS

#### Back-End
- The Back-End is made using Python-Flask

#### Work Flow
- The image file is uploaded through the webpage.
- Javascript handles the uploading of the files and sending them to python server
- The server stores the uploaded image files. It also provieds the stored images back to javascript to view all the uploaded files.

#### Pre requisites to run the application:
#### Python

- Download Python Installer from https://www.python.org/downloads/ and execute it.
- Make sure you select the Install launcher for all users and Add Python to PATH checkbox.
- To check if python is installed execute the following on command prompt:
```
    python --version
```
- Install python flask. Execute the following on command prompt:
```
    pip3 install Flask
```
- Set flask enviornment. Execute the following on command prompt::
```
    set FLASK_ENV=development
```
#### Executing program
- Run the upload.py file through command prompt:
```
    python.exe filename.py
```
- Go to http://127.0.0.1:5000/ to run the application!
