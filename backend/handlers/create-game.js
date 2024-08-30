import generate from "../middleware/gen-room-id.js";

function createGame(io, socket, rooms) {
  let roomName;
  socket.on('create-game', () => {
    if (socket.rooms.size > 1) {console.log(socket.rooms); return;} 
    roomName = generate(5)
    socket.join(roomName)
    rooms.push(roomName)
    // console.log(io.of("/").adapter.rooms)
    console.log(socket.rooms)
  });


  return roomName;
}

export default createGame;