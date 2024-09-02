<script setup>
  import { ref, watch } from 'vue'

  const picked = ref('1');
  const theme = ref(localStorage.getItem('theme') || "default");

  watch(theme, (d1) => {
    localStorage.setItem('theme', d1)
  });
</script>

<template>
  <div class="float-left menu h-3/4 p-0 [&_li>*]:rounded-none bg-gradient-to-b from-base-200 to-60%">
    <ul class="  h-full w-max">
      <li>
        <label>
          Theme
          <input class="hidden" type="radio" name="option" value="1" v-model="picked"/>
        </label>
      </li>
      <li>
        <label>
          Sound
          <input class="hidden" type="radio" name="option" value="2" v-model="picked"/>
        </label>
      </li>
      <li>
        <label>
          TEXT
          <input class="hidden" type="radio"  name="option" value="3" v-model="picked"/>
        </label>
      </li>
    </ul>

  </div>
  <div v-if="picked == 1" class="flex flex-col p-2 m-2">
    <div class="form-control">
      <label class="label cursor-pointer gap-4">
        <span class="label-text">Default</span>
        <input type="radio" name="theme-radios" class="radio radio-primary theme-controller" value="default" v-model="theme"/>
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer gap-4">
        <span class="label-text">Retro</span>
        <input type="radio" name="theme-radios" class="radio radio-primary theme-controller" value="dark" v-model="theme"/>
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer gap-4">
        <span class="label-text">Cyberpunk</span>
        <input type="radio" name="theme-radios" class="radio radio-primary theme-controller" value="light" v-model="theme"/>
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer gap-4">
        <span class="label-text">Valentine</span>
        <input type="radio" name="theme-radios" class="radio radio-primary theme-controller" value="mint" v-model="theme"/>
      </label>
    </div>
    <div class="form-control"> 
      <label class="label cursor-pointer gap-4">
        <span class="label-text">Aqua</span>
        <input type="radio" name="theme-radios" class="radio radio-primary theme-controller" value="a5" v-model="theme"/>
      </label>
    </div>
    <text > {{"--> " + theme}}  </text>

  </div>
  <div v-if="picked == 2">
    
  </div>
  <div v-if="picked == 3">

  </div>
</template>