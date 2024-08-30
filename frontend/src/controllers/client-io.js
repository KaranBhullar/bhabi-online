import io from 'socket.io-client'
class Client {
  constructor() {
    // this.socket = io;
    // this.name = name;
    this.data = [];
    this.io = undefined;
  }

  init(name) {
    if (typeof this.io !== 'undefined') { 
      console.log('IF STATEMENT'); return; 
      
    } else {

      this.io = io('http://localhost:3000');
      this.name = name;
      console.log('added new socket');
      console.log(this)
    }
  }
  
  emit(signal, body=undefined) {
    this.io.emit(signal, body);
  }
}

export default Client;