
class Client {
  constructor() {
    // this.socket = io;
    // this.name = name;
    this.data = [];
    this.io = undefined;
  }

  init(io, name) {
    if (this.io) { return; }
      this.io = io;
      this.name = name;
      console.log('added new socket');
      console.log(this)
  }
  
  // initSocket = () => {
  //   if (!socket.io) {
  //     // socket = io('http://localhost:3000');
  //     // socket = new Client(io('http://localhost:3000'), "swag") //change name to grab from input box
  //     socket.init(io('http://localhost:3000'), "swag")
  //     console.log('added new socket');
  //     console.log(socket)
  //     return;
  //   }
  //   console.log('The socket already exists')
  // }

  emit(signal, body=undefined) {
    this.io.emit(signal, body);
  }
}

export default Client;