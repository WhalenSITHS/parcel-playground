import AOS from "aos";
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
