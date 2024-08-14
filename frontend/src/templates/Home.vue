<script setup>
  import { ref } from 'vue';
  import Render from '../components/Render.vue';
  let t = ref(false);

  const flip = () => {t.value = !t.value}
</script>

<template>
 
  <div class="w-full">
    <div class="w-1/3 float-left">
        <div class="h-screen flex justify-center items-center">
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"> NEEDS TO BE IMPLEMENTED</button>
        </div>
    </div>
    <div class=" w-2/3 float-right"> 
      <div class="h-screen flex justify-center items-center">
        <div v-show="t">
          <Render t="t" @te="flip"/>
        </div>
        <div v-show="!t" class="flex flex-col">
          <button @click="flip" id="Join" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Join Game</button>
          <div class="divider">or</div>
          <button id="Create" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Create Game</button>
        </div>
      </div>
    </div>
  </div>
</template>