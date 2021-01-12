var marc = '../images/icon.png',
    images = document.getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("data-src", marc)
};