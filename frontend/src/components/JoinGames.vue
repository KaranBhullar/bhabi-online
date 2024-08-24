<script setup>
  import { ref } from 'vue';
  defineProps({toggle : Boolean})
  const code = ''
</script>

<template>
  <div v-show="toggle" >
    <div >
      <button class="btn btn-ghost btn-xs sm:btn-sm" @click="$emit('flip')" >  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 1024 1024"
          stroke="currentColor">

          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" />

          <path 
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/>
        </svg>
        Back
      </button>
    </div>
    <div class="py-8 flex flex-col">
 
      <div class="flex flex-row space-x-3">
      <label class="input input-bordered flex items-center gap-2">
        <input v-model="code" type="text" class="grow " placeholder="Enter Code"/>
        <kbd class="kbd kbd-sm">Enter</kbd>
      </label>

      <button @click="$emit('submitCode', code)" class="btn btn-xs sm:btn-sm md:btn-md btn-square btn-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20 7V8.2C20 9.88016 20 10.7202 19.673 11.362C19.3854 11.9265 18.9265 12.3854 18.362 12.673C17.7202 13 16.8802 13 15.2 13H4M4 13L8 9M4 13L8 17" />
        </svg>
      </button>
      </div>

      <div class="divider" />
      <button @click="$emit('rooms')" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Join a Random Game</button>

    </div>
  </div>
</template>