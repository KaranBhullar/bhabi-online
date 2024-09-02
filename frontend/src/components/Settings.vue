<script setup>
  import { ref } from 'vue';
  import OptionContent from './OptionContent.vue';
  import Modal from './Modal.vue'; 
  import icon from '../assets/Gear.vue'
  const isShown = ref(false)
  const flip = () => {isShown.value = !isShown.value}
</script>

<template>
  <Modal title="Settings" :content="OptionContent" :icon />
</template>