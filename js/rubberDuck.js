let marc="chrome-extension://pmmblmlopmppgnikehndlnkaminfjfkc/images/icon.png"
let images = Array.from(document.getElementsByTagName("img"));

images.map(image => image.setAttribute("src", marc))