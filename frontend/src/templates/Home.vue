<script setup>
  import { ref } from 'vue';
  import JoinOptions from '../components/JoinGames.vue';
  import Settings from '../components/Settings.vue';
  let toggle = ref(false);

  const flip = () => {toggle.value = !toggle.value}
</script>

<template>
 
  <div class="w-full h-full">
    <div class="float-right m-4">
      <Settings /> 
    </div>
   
    <div class="w-1/3 float-left">
        <div class="  flex justify-center">
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"> NEEDS TO BE IMPLEMENTED</button>
        </div>
    </div>
    <div class=" w-2/3 float-right"> 
      <div class="flex justify-center items-center">
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