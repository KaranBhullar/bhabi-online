<script setup>
  import { ref } from 'vue';
  import JoinOptions from '../components/JoinGames.vue';
  import Settings from '../components/Settings.vue';
  let toggle = ref(false);

  const flip = () => {toggle.value = !toggle.value}
</script>

<template>
  <!-- The div's class may not be needed -->
  <div class="flex float-right m-4">
    <Settings /> 
  </div>
  <div class="flex flex-1 w-screen h-screen"> 
    <div class="w-2/3  float-left">
        <div class="flex h-[calc(100vh-150px)] justify-center items-center">
            <div class="card bg-base-100 w-96 shadow-xl">
              <div class="flex justify-center">
                <div class="flex flex-col justify-end">
                  <button class="float-left my-2 mx-1 btn w-max btn-sm" ><</button>
                  <button class="float-left my-2 mx-1 btn w-max btn-sm" ><</button>
                  <button class="float-left my-2 mx-1 btn w-max btn-sm" ><</button>
                </div>
                <figure class="px-10 pt-10" >
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" 
                    class="rounded-xl" />
                </figure>
                <div class="flex float-right flex-col justify-end">
                  <button class=" my-2 mx-1 btn w-max btn-sm" >></button>
                  <button class=" my-2 mx-1 btn w-max btn-sm" >></button>
                  <button class=" my-2 mx-1 btn w-max btn-sm" >></button>
                </div>
              </div>
              <div class="h-6" />
              <div class="card-body">
                <input type="text" placeholder="Enter your name" class="input input-primary input-bordered w-full max-w-xs" />
                <!-- <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div> -->
                <div class="h-2" />
              </div>
            </div>
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