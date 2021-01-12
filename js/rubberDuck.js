let marc = "chrome-extension://pmmblmlopmppgnikehndlnkaminfjfkc/images/icon.png";
let song = "chrome-extension://pmmblmlopmppgnikehndlnkaminfjfkc/images/song.mp3";
let images = [];
let allDivs = [];
window.addEventListener("load", () => {
  images = Array.from(document.getElementsByTagName("img"));
  allDivs = Array.from(document.getElementsByTagName("div"));
  images.map(image => image.setAttribute("src", marc));
  console.log(allDivs);
  allDivs.map(element =>
    element.style.backgroundImage.includes("url")
      ? (element.style.backgroundImage = `url(${marc})`)
      : console.log("no")
  );
});

/* to do:
 *line 11-13 ?
 *onload is not working perfectly
 *keep original pic size (only for allDivs, img working fine)
 */
