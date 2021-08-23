/* To show the QR code and p tag with instuctions, on non-mobile devices only */

const showCode = document.querySelector(".non-mobile");

const dir = document.querySelector(".computer-directions");

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))) {
    showCode.classList.add("overlay");
    showCode.style.visibility = "visible"
    dir.style.visibility = "visible"
} else {
      showCode.classList.remove("overlay");
    showCode.style.visibility = "hidden"
    dir.style.visibility = "hidden"
}