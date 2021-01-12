/* let marc = '../images/icon.png'; */
let marc="chrome-extension://pmmblmlopmppgnikehndlnkaminfjfkc/images/icon.png"
let images = document.getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", marc)
};