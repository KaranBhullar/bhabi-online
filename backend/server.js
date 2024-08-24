import fastify from "fastify";
import fastifyIO from "fastify-socket.io";
import fastifyCors from "@fastify/cors";
import createGame from "./handlers/create-game.js";
import joinGame from "./handlers/join-game.js";

const server = fastify();
const rooms = ['1lbbl'];

server.register(fastifyCors, {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
});

server.register(fastifyIO, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }
});

server.get("/", (req, res) => {
  server.io.emit("hello");
  console.log("working")
  return {hello : "world"}
});
  
server.ready().then(() => {
  // we need to wait for the server to be ready, else `server.io` is undefined
  server.io.on('connection', (socket) => {
    console.info('Socket connected!', socket.id)
    
    socket.on('working', () => console.log('button has been clicked by ', socket.id));
    // socket.on('show-rooms', () => {
    //   console.log(server.io.of('/').adapter.rooms.get('Room Name'));
    // })
 

    createGame(server.io, socket, rooms)
    
    joinGame(socket, rooms) 
  });
  
  
  server.io.of("/").adapter.on("join-room", async (room, id) => {
    console.log(`socket ${id} has joined room ${room}`);
    // for 
    // console.log(s)
  });
});

server.listen({ port: 3000 }, function (err) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address});
    console.log('Server started @ port 3000')
});
