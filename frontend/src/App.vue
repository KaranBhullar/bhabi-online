<script setup>
  import Home from './templates/Home.vue';
  import Client from './controllers/client-io';
  import io from 'socket.io-client'
  const socket = new Client(); 

  // const initSocket = () => {
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
  const createGame = () => {
    socket.init(io('http://localhost:3000'), "pee")
    socket.emit('create-game');
  }
  const joinGame = () => {
    socket.init(io('http://localhost:3000'), "piss")
    socket.emit('join-game');
  }
</script>

<template>
  <Home :socket @init="createGame"  @join-game="joinGame"/>
</template>
