<script setup>
import { ref } from 'vue';
 
  defineProps({
    title : String,
    content : Object,
    icon : Object
  })

  const toggle = ref(false)
  const flip = () => {toggle.value = !toggle.value}
</script>

<template>
  <div  class="modal-wrapper" @click="flip">
    
    <div
      class="modal "
      :class="{ 'modal-open': toggle }">
      <div class="modal-box p-0 size-3/5 flex-grow"  @click.stop="" >
        <p class="ml-3 mt-2 font-medium"> {{ title }} </p>
        <div class="divider m-0">
          
        </div>
        <content />
        <div class="float-right modal-action clear-both p-3">
          <button class="btn btn-sm" @click="flip"> Close </button>
        </div>
      </div>
    </div>
  </div>

  <button @click="flip" >
    <icon />
  </button>

</template>