import AOS from "aos";
import anime from "animejs/lib/anime.es.js";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import hoverEffect from "hover-effect";
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

new hoverEffect({
  parent: document.querySelector(".transition-image"),
  intensity1: 0.1,
  intensity2: 0.1,
  angle2: Math.PI / 2,
  image1: require("../media/trans-1.jpg"),
  image2: require("../media/trans-2.jpg"),
  displacementImage:
    "https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true"
});
