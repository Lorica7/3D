/* On desktop only

when hover or click picture the QR code appears as overlay */

const showCode = document.querySelector(".non-mobile");

const dir = document.querySelector(".computer-directions");

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))) {
    showCode.classList.add("overlay");
    showCode.style.visibility = "visible"
    dir.style.visibility = "visible"
}