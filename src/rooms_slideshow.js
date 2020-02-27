var slideshowContainer = document.getElementById("room_img");
var roomNameUI = document.getElementById("room_name");
var roomDescriptionsUI = document.getElementById("room_desc");

roomName = [
  "Super Single",
  "Double Trouble",
  "Family Fun Time",
  "I'm the Queen"
];

roomDescriptions = [
  "Only for our sad single customer. Not recommended for a group bigger than 1. Towels for crying not included",
  'For those who are married but manages to make her mad. Feel free to ask for a paid upgrade to "I\'m a Queen" room. Towels not included',
  "Families going out for a family fun time of running around and having a good experience. Also recommended for a couple going out with their photographer or friend or that one third wheel guy. Wheels not included",
  "For those lovely couple who want to have some sexy fun fun time at night. Also recommended for the our sad single customer who have more cash to spend. Tissues are complementary, towels not included"
];

var i = 4;

roomDescriptionsUI.innerHTML = roomDescriptions[i - 1];
roomNameUI.innerHTML = roomName[i - 1];

function change_room(n) {
  i += n;

  //Stops negative overflow
  if (i < 0) {
    i = 3;
  }

  slideshowContainer.style.opacity = 0;
  roomNameUI.style.opacity = 0;
  roomDescriptionsUI.style.opacity = 0;

  //Index starts at 1
  var roomIndex = (i % 4) + 1;

  //Change image after 0.2s transition
  setTimeout(() => {
    slideshowContainer.style.backgroundImage =
      "url(../img/rooms/room_" + roomIndex + ".jpg";
    roomNameUI.innerHTML = roomName[roomIndex - 1];
    roomDescriptionsUI.innerHTML = roomDescriptions[roomIndex - 1];

    slideshowContainer.style.opacity = 1;
    roomNameUI.style.opacity = 1;
    roomDescriptionsUI.style.opacity = 1;
  }, 200);
}
