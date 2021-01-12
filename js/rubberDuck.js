let marc =
  "chrome-extension://pmmblmlopmppgnikehndlnkaminfjfkc/images/icon.png";
let images = [];
let bgImages = [];
window.addEventListener("load", () => {
  images = Array.from(document.getElementsByTagName("img"));
  bgImages = Array.from(document.getElementsByTagName("div"));
  images.map(image => image.setAttribute("src", marc));
  console.log(bgImages);
  bgImages.map(element =>
    element.style.backgroundImage.includes("url")
      ? (element.style.backgroundImage = `url(${marc})`)
      : console.log("no")
  );
});
