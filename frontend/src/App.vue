<script setup>
  import Home from './templates/Home.vue';
  import Client from './controllers/client-io';
  import io from 'socket.io-client'
  const socket = new Client(); 
 
  const createGame = () => {
    socket.init("pee")
    socket.emit('create-game');
    console.log(socket.rooms)
  }
  const joinGame = (code) => {
    socket.init("piss")
    socket.emit('join-game', code);
  }
</script>

<template>
  <Home :socket @init="createGame"  @join-game="joinGame"/>
</template>
