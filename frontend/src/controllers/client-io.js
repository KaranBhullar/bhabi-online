
class Client {
  constructor() {
    // this.socket = io;
    // this.name = name;
    this.data = [];
    this.io = undefined;
  }

  init(io, name) {
    this.io = io;
    this.name = name;
  }

  emit(signal, body=undefined) {
    this.io.emit(signal, body);
  }
}

export default Client;