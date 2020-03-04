var roomCardRaw = `
<div class="room_card" id="room_card">
  <img src="img/rooms/room_1.jpg" alt="" class="room_img">
  <h2 class="room_name">Super Single</h2>
  <div class="room_content">
    <div class="room_details">
      <img src="img/common/size.svg" class="room_icon" alt="">
      <p>Room size number here</p>
    </div>
    <div class="room_details">
      <img src="img/common/window.svg" class="room_icon" alt="">
      <p>View here</p>
    </div>
    <div class="room_details">
      <img src="img/common/bed.svg" class="room_icon" alt="">
      <p>Bed size number here</p>
    </div>
  </div>
</div>
`;

var roomIndex = 0;

var gotoRoomsDetail = roomIndex => {
  window.location = "room_details.html?r=" + roomIndex;
};

for (roomIndex = 0; roomIndex < roomName.length; roomIndex++) {
  var roomCardUI = $(roomCardRaw);

  roomCardUI
    .children("img")
    .attr("src", "img/rooms/room_" + roomIndex + ".jpg");
  roomCardUI.children("h2").text(roomName[roomIndex]);
  roomCardUI.children("p").text(roomDescriptions[roomIndex]);

  roomCardUI.attr("onclick", "gotoRoomsDetail(" + roomIndex + ")");

  $("#rooms_container").append(roomCardUI);
}
