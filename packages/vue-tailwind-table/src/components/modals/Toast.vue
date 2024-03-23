<template>
  <div
    v-if="visible"
    class="fixed bottom-5 right-5 p-4 max-w-sm w-full bg-white rounded-lg border shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
    :class="{
      'bg-green-500': type === 'success',
      'bg-yellow-500': type === 'warning',
      'bg-red-500': type === 'error',
      'bg-sky-500': type === 'info',
    }"
  >
    <p class="text-white">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, defineProps, watch } from "vue"
import { ToastType } from "@/types"
const { duration, message, type } = defineProps({
  message: String,
  duration: {
    type: Number,
    default: 3000,
  },
  type: {
    type: String as PropType<ToastType>,
    default: "success",
  },
})

const visible = ref(false)
watch(
  () => message,
  (newVal) => {
    if (newVal) {
      visible.value = true
      setTimeout(() => {
        visible.value = false
      }, duration)
    }
  }
)
</script>
