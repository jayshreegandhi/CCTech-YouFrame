function main() {
    fetch('/data')
        .then(response => response.json())
        .then(jsonList => {
            jsonList.forEach(imagePath => {
                console.log(imagePath);
                createImage(imagePath);
            });
        });
}

function uplaodFile() {
    const input = document.createElement("input");
    input.id = "fileInput";
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.addEventListener('change', showImage, false);
    input.click();
}

function showImage(event) {
    event.preventDefault();
    if(this.files[0].type.indexOf("image")==-1){
        alert("Invalid Type. Please Upload image files only.");
    }
    else{
            for (let i = 0; i < this.files.length; i++) {
            const file = this.files[i];

            uploadFileToServer(file);

            //creating the grid element and appending it
            const image = document.createElement('img');
            image.src = URL.createObjectURL(file);
            image.id = file.name;
            image.alt = file.name;
            image.className = 'preview-img';
            image.onload = function () {
                URL.revokeObjectURL(this.src);
            }

            const image_title = document.createElement('h3');
            image_title.innerHTML = file.name;

            const content_div = document.createElement('div');
            content_div.className = "content";
            content_div.appendChild(image);

            const gallery = document.getElementById('gallery');
            gallery.insertBefore(content_div, gallery.childNodes[0]);
        }
    }
}

function createImage(imagePath) {
    //creating the grid element and appending it
    const image = document.createElement('img');
    image.src = imagePath;
    image.id = imagePath;
    image.alt = imagePath;
    image.className = 'preview-img';

    const image_title = document.createElement('h3');
    image_title.innerHTML = imagePath;

    const content_div = document.createElement('div');
    content_div.className = "content";
    content_div.appendChild(image);

    const gallery = document.getElementById('gallery');
    gallery.insertBefore(content_div, gallery.childNodes[0]);
}

function uploadFileToServer(file) {
    const url = "/Upload";
    const formData = new FormData();
    formData.append('file', file);

    const options = {
        method: "POST",
        body: formData
    };

    fetch(url, options)
        .then(function (response) { console.log(response.statusText) });
}
