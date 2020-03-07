import AOS from "aos";
import anime from "animejs/lib/anime.es.js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
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

///AOS Animation on SVG
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

///////Hover Effect
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

//////3-d Model scene

function initModel() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);
  let camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.rotation.y = (45 / 180) * Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;
  let renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector(".model").appendChild(renderer.domElement);
  ////requiers gltfloader
  let loader = new GLTFLoader();
  loader.load("scene.gltf", function(gltf) {
    let headphones = gltf.scene.children[0];
    headphones.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);
    //animate();
  });
}

initModel();
