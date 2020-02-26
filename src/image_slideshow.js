var i = 16;

function change_image(n) {
  i += n;

  var slideshowContainer = document.getElementById("slideshow");

  slideshowContainer.style.opacity = 0;

  setTimeout(() => {
    slideshowContainer.style.backgroundImage =
      "url(../img/slides/img" + (i % 30) + ".jpg";
    slideshowContainer.style.opacity = 1;
  }, 200);
}
