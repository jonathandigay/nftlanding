// header actions
const menu = document.querySelector(".menu");
const navs = document.querySelector(".navs");
const nav = document.querySelectorAll(".nav");
const mode = document.querySelector(".mode");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  navs.classList.replace("navs-off", "navs-on");
});
overlay.addEventListener("click", () => {
  navs.classList.replace("navs-on", "navs-off");
});

nav.forEach((current) => {
  current.addEventListener("click", () => {
    navs.classList.replace("navs-on", "navs-off");
  });
});

mode.addEventListener("click", () => {
  const darmode = document.body.className;
  !darmode
    ? (document.body.classList.add("darkmode"),
      (mode.innerHTML = ` <i class="material-icons">sunny</i>`))
    : (document.body.classList.remove("darkmode"),
      (mode.innerHTML = ` <i class="material-icons">nightlight</i>`));
});
