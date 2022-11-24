<template>
  <div class="cl-modal">
    <button @click="closeHanlder">close</button>
    <div>card body</div>
    <button @click="closeHanlder">cancel</button>
    <button @click="closeHanlder">deactivate</button>
  </div>
</template>
<script>
export default {
  name: 'ClModal',
}
</script>
<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['close'])
const closeHanlder = () => {
  emit('close')
}
</script>
<style lang="scss">
.cl-modal {
  width: 300px;
  padding: 30px;
  border: 1px solid gray;
  border-radius: 10px;
}
</style>
