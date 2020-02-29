var roomCardRaw = `            <div class="room_card" id="room_card">
<img src="img/rooms/room_1.jpg" alt="" class="room_img">
<h2 class="room_name">Super Single</h2>
<p class="room_content">Only for our sad single customer. Not recommended for a group bigger than 1.
    Towels for crying not included</p>
</div>`;

for (var i = 0; i < roomName.length; i++) {
  var roomCardUI = $(roomCardRaw);

  roomCardUI.children("img").attr("src", "img/rooms/room_" + i + ".jpg");
  roomCardUI.children("h2").text(roomName[i]);
  roomCardUI.children("p").text(roomDescriptions[i]);

  $("#rooms_container").append(roomCardUI);
}
