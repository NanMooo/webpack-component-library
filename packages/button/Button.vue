<template>
  <button class="cl-button" :class="[buttonType, buttonSize]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'ClButton',
}
</script>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    required: false,
    type: String,
    default: 'default',
  },
  size: {
    required: false,
    type: String,
    default: 'default',
  },
})

const buttonType = computed(() => 'cl-button--' + props.type)
const buttonSize = computed(() => 'cl-button-' + props.size)
</script>
