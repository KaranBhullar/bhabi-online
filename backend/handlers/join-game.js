function joinGame(socket, rooms) {
  let response; 
  socket.on('join-game', (room) => {
    if (rooms.includes(room)) {
      console.log("Successfully joined room " + room);
      socket.join(room);
      return;
    }
    console.log("There are no rooms with code, " + room + " try a different one");
  
 
  });
  return response;
}

export default joinGame;