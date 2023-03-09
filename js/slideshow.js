let i = 0;
let images = [];
let time = 2000;

const slideshow = document.querySelector(".slide-img");
let body = document.querySelector("body");

images[0] = "./img/Slideshows/slideshow-01.jpeg";
images[1] = "./img/Slideshows/slideshow-02.jpeg";
images[2] = "./img/Slideshows/slideshow-03.jpeg";
images[3] = "./img/Slideshows/slideshow-04.jpeg";
images[4] = "./img/Slideshows/slideshow-05.jpeg";
images[5] = "./img/Slideshows/slideshow-06.jpeg";

function changeImg() {
  slideshow.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

let number = 0;
// ARRAY CONTAINING ALL CLICK SVGS
const stamps = [
  "./img/Click-svgs/circles.svg",
  "./img/Click-svgs/heart.svg",
  "./img/Click-svgs/moon.svg",
  "./img/Click-svgs/rainbow.svg",
  "./img/Click-svgs/shooting-star.svg",
  "./img/Click-svgs/waves.svg",
];

const stampsTag = document.querySelector("div.stamps");
console.log(stampsTag);

const addStamp = function (x, y) {
  const img = document.createElement("img");
  img.setAttribute("src", stamps[number]);
  const randID = crypto.randomUUID();
  img.setAttribute("id", randID);

  setTimeout(function () {
    const prevImg = document.getElementById(randID);
    stampsTag.removeChild(prevImg);
  }, 3000);

  // remove half the window width
  img.style.left = `${x - window.innerWidth / 2}px`;
  img.style.top = `${y}px`;
  stampsTag.appendChild(img);

  // // add some audio
  // const audio = document.createElement("audio");
  // audio.setAttribute("src", "plop.mp3");
  // audio.play();

  number = number + 1;
  if (number > stamps.length - 1) {
    number = 0;
  }
};

body.addEventListener("click", function (event) {
  addStamp(event.pageX, event.pageY);
});

const mainContainer = document.querySelector(".main-wrapper");

mainContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
