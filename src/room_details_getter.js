var roomIndex = window.location.search.charAt(3);

$("#title").text(roomName[roomIndex] + " | Golden Lake Hotel");
$("#room_name").text(roomName[roomIndex]);

$("#room_size").text(roomSpecifics["room_size"][roomIndex]);
$("#room_view").text(roomSpecifics["room_view"][roomIndex]);
$("#bed_size").text(roomSpecifics["bed_size"][roomIndex]);

$("#room_description").text(roomDescriptions[roomIndex]);

for (var i = 0; i < noOfImage[roomIndex]; i++) {
  var pathToImage = "img/rooms/" + roomRawName[roomIndex] + "/img";

  var imageElem = $("<img>");
  imageElem.attr("src", pathToImage + (i + 1) + ".jpg");
  imageElem.attr("id", "image" + (i + 1));
  imageElem.attr("onclick", "setMainImg(this)");
  imageElem.addClass("secondary_img");

  $(".room_gallery").append(imageElem);
}

var currentSecondaryRoom = "image1";

$("#" + currentSecondaryRoom).addClass("active");
$("#main_img").attr("src", "img/rooms/" + roomRawName[roomIndex] + "/img1.jpg");

var setMainImg = (elem) => {
  $("#main_img").attr("src", elem.src);
  $("#" + currentSecondaryRoom).removeClass("active");
  currentSecondaryRoom = elem.id;
  elem.classList.add("active");
};
