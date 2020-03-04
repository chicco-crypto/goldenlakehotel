var roomIndex = window.location.search.charAt(3);

$("#title").text(roomName[roomIndex] + " | Golden Lake Hotel");
$("#room_name").text(roomName[roomIndex]);

$("#room_size").text(roomSpecifics["room_size"][roomIndex]);
$("#room_view").text(roomSpecifics["room_view"][roomIndex]);
$("#bed_size").text(roomSpecifics["bed_size"][roomIndex]);

$("#room_description").text(roomDescriptions[roomIndex]);
$("#main_img").attr("src", "img/rooms/room_" + roomIndex + ".jpg");
