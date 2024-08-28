<script setup>
  import { ref } from 'vue';
  import JoinGames from '../components/JoinGames.vue';
  import Settings from '../components/Settings.vue';
  import Customize from '../components/Customize.vue';
import Client from '../controllers/client-io';

  // defineEmits(['init'])
  defineProps({socket: Client})

  const toggle = ref(false);
  const flip = () => {toggle.value = !toggle.value}
  
  // const check = () => {
  //   if (socket) {console.log(socket.id); return; }
  //   console.log("there is no socket connected")
  // }
  // const working = () => {
  //   console.log('pee')
  //   socket.emit('working')
  // }
  const showRooms = () => {
    // socket.emit('show-rooms')
    // socket.emit('show-sockets')
  }
  const submitCode = (code) => {
    // socket.emit('join-game', code)
    console.log(code)
  }
</script>

<template>
  <div>
    
    <!-- The div's class may not be needed -->
     <div class="flex w-max float-right m-4">
       <Settings /> 
      </div>
      <div class="flex flex-1 w-screen h-full"> 
        <div class="w-2/3  float-left">
          <div class="flex h-[calc(100vh-150px)] justify-center items-center">  
            <Customize />
          </div>
        </div>
        <div class=" w-4/5 float-right">
          <div class="flex h-[calc(100vh-150px)] justify-center items-center">
            <div v-show="toggle">
              <JoinGames toggle="toggle" @rooms="showRooms" @flip="flip" @submit-code="(code) => {socket.emit('join-game', code)}"/>
            </div>
            <div v-show="!toggle" class="flex flex-col">
              <button @click="flip" id="Join" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Join Game</button>
              <div class="divider">or</div>
              <button @click="$emit('init')" id="Create" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Create Game</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>