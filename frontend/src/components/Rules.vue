<script setup>
  import RulesContent from './RulesContent.vue';
  import Modal from './Modal.vue';
  import icon from '../assets/Book.vue'
</script>

<template>
  <div  >
    <Modal title="Rules" :content="RulesContent" :icon/>
  </div>

</template>