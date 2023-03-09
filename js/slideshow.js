let i = 0;
let images = [];
let time = 2000;

const slideshow = document.querySelector(".slide-img");

images[0] = "./img/Slideshows/slideshow-01.jpeg";
images[1] = "./img/Slideshows/slideshow-02.jpeg";
images[2] = "./img/Slideshows/slideshow-03.jpeg";
images[3] = "./img/Slideshows/slideshow-04.jpeg";
images[4] = "./img/Slideshows/slideshow-05.jpg";
images[5] = "./img/Slideshows/slideshow-06.jpg";
// images[3] = "https://i.postimg.cc/cHb1HYZ2/image4.jpg";

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
