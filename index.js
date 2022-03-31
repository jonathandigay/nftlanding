// header actions
const menu = document.querySelector(".menu");
const navs = document.querySelector(".navs");
const mode = document.querySelector(".mode");
const overlay = document.querySelector(".overlay");
menu.addEventListener("click", () => {
  navs.classList.replace("navs-off", "navs-on");
});
overlay.addEventListener("click", () => {
  navs.classList.replace("navs-on", "navs-off");
});
mode.addEventListener("click", () => {
  const Class = document.body.className;
  !Class
    ? document.body.classList.add("darkmode")
    : document.body.classList.remove("darkmode");
});
