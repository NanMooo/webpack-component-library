<template>
  <div class="test">
    <cl-aside width="200px">菜单</cl-aside>
    <cl-button type="warning" size="large">自定义按钮</cl-button>
    <div class="modal-demo">
      <button @click="toggleModal">open modal</button>
      <cl-modal v-if="isShowModal" @close="toggleModal"></cl-modal>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

let isShowModal = ref(false)
const toggleModal = () => {
  isShowModal.value = !isShowModal.value
}
</script>
<style lang="scss">
.cl-aside {
  background-color: #5daf34;
}
.modal-demo {
  padding: 30px;
}
</style>
