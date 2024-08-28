import generate from "../middleware/gen-room-id.js";

function createGame(io, socket, rooms) {
  let roomName;
  socket.on('create-game', () => {
    roomName = generate(5)
    socket.join(roomName)
    rooms.push(roomName)
    console.log(io.of("/").adapter.rooms)
  });


  return roomName;
}

export default createGame;