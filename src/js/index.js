import AOS from "aos";
import anime from "animejs/lib/anime.es.js";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

AOS.init();
const checkBox = document.querySelector(".navigation_checkbox");
const links = document.querySelectorAll(".navigation_link");
const linkarr = Array.from(links);
linkarr.forEach(el =>
  el.addEventListener("click", () => {
    checkBox.checked = false;
  })
);

let stroke = anime({
  targets: "#svg-header path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutQuad",
  duration: 5000,
  direction: "alternate",
  loop: true
});

let fill = anime({
  targets: "#svg-header path",
  fill: "#66fcf1",
  easing: "easeInOutQuad",
  duration: 2000,
  direction: "alternate",
  loop: true
});

/* stroke(); */
fill();
