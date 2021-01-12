let marc =
  "chrome-extension://pmmblmlopmppgnikehndlnkaminfjfkc/images/icon.png";
let song = "chrome-extension://pmmblmlopmppgnikehndlnkaminfjfkc/images/song.mp3"
let images = [];
let bgImages = [];
window.addEventListener("load", () => {
    /* get images */
  images = Array.from(document.getElementsByTagName("img"));
  /* get div with background images */
  bgImages = Array.from(document.getElementsByTagName("div"));
  /* set src and background-image to marc */
  images.map(image => image.setAttribute("src", marc));
  console.log(bgImages);
  bgImages.map(element =>
    element.style.backgroundImage.includes("url")
      ? (element.style.backgroundImage = `url(${marc})`)
      : console.log("no")
  );
  /* make marc sing */ /* marc is sometimes not singing.  DOMException: play() failed because the user didn't interact with the document first*/
  var audio_player = document.createElement("audio")
  audio_player.src="chrome-extension://pmmblmlopmppgnikehndlnkaminfjfkc/images/song.mp3";
  document.getElementsByTagName("body")[0].appendChild(audio_player)
  audio_player.play()
});



/* to do:
*toggle on and off
*onload is not working perfectly
*keep original pic size (only for divs, img working fine)
*/