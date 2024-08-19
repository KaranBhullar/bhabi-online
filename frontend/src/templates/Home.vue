<script setup>
  import { ref } from 'vue';
  import JoinOptions from '../components/JoinGames.vue';
  import Settings from '../components/Settings.vue';
  import Customize from '../components/Customize.vue';
  let toggle = ref(false);

  const flip = () => {toggle.value = !toggle.value}
</script>

<template>
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
          <JoinOptions toggle="toggle" @flip="flip"/>
        </div>
        <div v-show="!toggle" class="flex flex-col">
          <button @click="flip" id="Join" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Join Game</button>
          <div class="divider">or</div>
          <button id="Create" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Create Game</button>
        </div>
      </div>
    </div>
  </div>
</template>