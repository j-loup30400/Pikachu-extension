let pikachu = "chrome-extension://ihllibafhmpeldffdnbfgejlcllcmcbj/icon.png"

window.addEventListener("load", () => {
    let picturesFromInternet = document.querySelectorAll("img");
    let picturesFromInternetArray = Array.from(picturesFromInternet)
 picturesFromInternetArray.map(pictures => pictures.setAttribute("src", pikachu)) 
})


