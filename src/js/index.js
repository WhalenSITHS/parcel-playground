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

const trans = new hoverEffect({
  parent: document.querySelector(".transition-image"),
  intensity1: 0.1,
  intensity2: 0.1,
  hover: true,
  angle2: Math.PI / 2,
  image1: require("../media/trans-1.jpg"),
  image2: require("../media/trans-2.jpg"),
  displacementImage:
    "https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true"
});

const test2 = function() {
  const transH3 = document.querySelector(".transition-h3");

  const transH3First = function() {
    transH3.textContent === `Whether It's Just You`;
  };
  const transH3Second = function() {
    transH3.textContent === `Or An Entire Team`;
  };
  if (transH3.textContent === `Whether It's Just You`) {
    setTimeout(function() {
      transH3.textContent = `Or An Entire Team`;
      //trans.next();
    }, 2000);
  } else {
    setTimeout(function() {
      // trans.previous();
      transH3.textContent = `Whether It's Just You`;
    }, 2000);
  }
};
test2();

/* const text2 = `Or An Entire Team`;
const text1 = `Whether It's Just You`;

const h3Arr = [text1, text2];
const changeText = async function() {
  const transH3 = document.querySelector(".transition-h3");
  if (transH3.textContent === h3Arr[0]) {
    await time;
  }
};
 */
