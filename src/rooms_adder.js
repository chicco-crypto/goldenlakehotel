var roomCardRaw = `
<div class="room_card" id="room_card">
  <img src="img/rooms/room_1.jpg" alt="" class="room_img">
  <h2 class="room_name">Super Single</h2>
  <div class="room_content">
    <div class="room_details">
      <img src="img/common/size.svg" class="room_icon" alt="">
      <p id="room_size">Room size number here</p>
    </div>
    <div class="room_details">
      <img src="img/common/window.svg" class="room_icon" alt="">
      <p id="room_view">View here</p>
    </div>
    <div class="room_details room_details--long">
      <img src="img/common/bed.svg" class="room_icon" alt="">
      <p id="bed_size">Bed size number here</p>
      </div>
      <div href="#" class="secondary_btn secondary_btn--turn">Read More
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 482.239 482.239" height="18"
      viewBox="0 0 482.239 482.239" width="18">
      <path
          d="m206.812 34.446-206.812 206.673 206.743 206.674 24.353-24.284-165.167-165.167h416.31v-34.445h-416.31l165.236-165.236z" />
  </svg></div>
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

  var roomDetails = roomCardUI
    .children(".room_content")
    .children(".room_details");

  roomDetails
    .children("#room_size")
    .text(roomSpecifics["room_size"][roomIndex]);
  roomDetails
    .children("#room_view")
    .text(roomSpecifics["room_view"][roomIndex]);
  roomDetails.children("#bed_size").text(roomSpecifics["bed_size"][roomIndex]);

  roomCardUI.attr("onclick", "gotoRoomsDetail(" + roomIndex + ")");

  $("#rooms_container").append(roomCardUI);
}
