var slideshowContainer = document.getElementById("room_img");
var roomNameUI = document.getElementById("room_name");
var roomDescriptionsUI = document.getElementById("room_desc");

roomName = [
  "Double or Twin Room with Private External Bathroom",
  "Superior Twin",
  "Superior Double",
  "Junior Suite",
  "Executive Suite"
];

roomDescriptions = [
  "Only for our sad single customer. Not recommended for a group bigger than 1. Towels for crying not included",
  'For those who are married but manages to make her mad. Feel free to ask for a paid upgrade to "I\'m a Queen" room. Towels not included',
  "Families going out for a family fun time of running around and having a good experience. Also recommended for a couple going out with their photographer or friend or that one third wheel guy. Wheels not included",
  "For those lovely couple who want to have some sexy fun fun time at night. Also recommended for the our sad single customer who have more cash to spend. Tissues are complementary, towels not included",
  "For those lovely couple who want to have some sexy fun fun time at night. Also recommended for the our sad single customer who have more cash to spend. Tissues are complementary, towels not included"
];

var roomCardRaw = `            <div class="room_card" id="room_card">
<img src="img/rooms/room_1.jpg" alt="" class="room_img">
<h2 class="room_name">Super Single</h2>
<p class="room_content">Only for our sad single customer. Not recommended for a group bigger than 1.
    Towels for crying not included</p>
</div>`;

for (var i = 0; i < 5; i++) {
  var roomCardUI = $(roomCardRaw);
  roomCardUI.children("img").attr("src", "img/rooms/room_" + i + ".jpg");
  roomCardUI.children("h2").text(roomName[i]);
  roomCardUI.children("p").text(roomDescriptions[i]);
  $("#rooms_container").append(roomCardUI);
}
