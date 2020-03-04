var roomIndex = window.location.search.charAt(3);

$("#title").text(roomName[roomIndex] + " | Golden Lake Hotel");
$("#room_name").text(roomName[roomIndex]);
$("#room_description").text(roomDescriptions[roomIndex]);
$("#main_img").attr("src", "img/rooms/room_" + roomIndex + ".jpg");
