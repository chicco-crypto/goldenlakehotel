var slideshowContainer = document.getElementById("room_img");
var roomNameUI = document.getElementById("room_name");
var roomDescriptionsUI = document.getElementById("room_desc");
var readMoreBtn = document.getElementById("read_more");

var i = 0;

roomDescriptionsUI.innerHTML = roomDescriptions[i];
roomNameUI.innerHTML = roomName[i];

function change_room(n) {
  i += n;

  //Stops negative overflow
  if (i < 0) {
    i = roomName.length;
  }

  slideshowContainer.style.opacity = 0;
  roomNameUI.style.opacity = 0;
  roomDescriptionsUI.style.opacity = 0;
  readMoreBtn.style.opacity = 0;

  //Index starts at 1
  var roomIndex = i % 5;

  console.log(roomIndex);

  //Change image after 0.2s transition
  setTimeout(() => {
    slideshowContainer.style.backgroundImage =
      "url(../img/rooms/room_" + roomIndex + ".jpg";
    roomNameUI.innerHTML = roomName[roomIndex];
    roomDescriptionsUI.innerHTML = roomDescriptions[roomIndex];
    readMoreBtn.href = "room_details.html?r=" + roomIndex;

    slideshowContainer.style.opacity = 1;
    roomNameUI.style.opacity = 1;
    roomDescriptionsUI.style.opacity = 1;
    readMoreBtn.style.opacity = 1;
  }, 200);
}
