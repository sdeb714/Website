var slider_images = [
  "Pictures/01.png",
  "Pictures/02.png",
  "Pictures/03.png",
  "Pictures/04.png",
  "Pictures/05.png",
  "Pictures/06.png",
  "Pictures/07.png",
];
var img = document.querySelector(".iceimage");

var i = 0;
function next() {
  if (i < slider_images.length - 1) {
    i++;
    img.src = slider_images[i];
  } else {
    i = 0;
    img.src = slider_images[i];
  }
}
function prev() {
  if (i > 0) {
    i--;
    img.src = slider_images[i];
  } else {
    i = slider_images.length - 1;
    img.src = slider_images[i];
  }
}
