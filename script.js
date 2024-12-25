document.getElementById('imageUpload').addEventListener('change', function(event) {
    const files = event.target.files;
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    for (const file of files) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.style.maxWidth = '100px';
        img.style.margin = '5px';
        gallery.appendChild(img);
    }
});
