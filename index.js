const bodysection = document.querySelector(".bodysection");
const showmodal = document.getElementById("showmodal");
const hamburgerButton = document.querySelector(".hamburger-button");
const navbarLinks = document.querySelector(".navbarLinks");

const modal = document.createElement("div");
const modalbody = document.createElement("div");
const text = document.createElement("h2");
const closeButton = document.createElement("button");

modal.className = "modal";
modalbody.className = "modalbody";
closeButton.className = "closeButton";

text.innerText = "Hello world";

closeButton.innerText = "close";

modalbody.append(text);
modal.appendChild(modalbody);

showmodal.addEventListener("click", () => {
  bodysection.appendChild(modal);
});

modal.addEventListener("click", (event) => {
  if (!event.target.closest(".modalbody")) {
    modal.remove();
  }
});

hamburgerButton.addEventListener("click", () => {
  navbarLinks.style.display =
    navbarLinks.style.display === "flex" ? "none" : "flex";
  hamburgerButton.innerHTML =
    navbarLinks.style.display === "flex" ? "&#10006;" : "&#9776;";
});
// Adjusting navigation display on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    navbarLinks.style.display = "flex";
    hamburgerButton.innerHTML = "&#9776;";
  } else if (window.innerWidth <= 800) {
    navbarLinks.style.display = "none";
  }
});
