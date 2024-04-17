/*         Toggle Dark Mode               */

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", onClick);

function onClick() {
  this.classList.toggle("bx-moon");
  if (this.classList.toggle("bx-sun")) {
    body.style.background = "#081b29"; // black-color
    body.style.color = "#ededed"; //  white-color
    body.style.transition = "2s";
  } else {
    body.style.background = "#ffffff"; //  white-color
    body.style.color = "#081b29"; // black-color
    body.style.transition = "2s";
  }
}

console.log(nav);
