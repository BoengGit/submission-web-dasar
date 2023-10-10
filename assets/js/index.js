document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const hamburger = document.querySelector("ul");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    hamburger.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    hamburger.classList.remove("scrolled");
  }
});

const hamburger = document.getElementById("hamburger");
const hamburgerList = document.getElementById("hamburgerList");
const main = document.getElementById("main");

hamburger.addEventListener("click", () => {
  hamburgerList.classList.toggle("hidden");
  main.classList.toggle("custom-main");
});
