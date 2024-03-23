<template>
  <div>
    <input v-model="textToCopy" class="hidden" readonly />
    <Tooltip :text="copied ? 'Copied!' : 'Copy Text'">
      <button @click="copyText">Copy Text</button>
    </Tooltip>
    <button @click="copyText">Copy Text</button>
    <!-- <Toast ref="toast" :message="toastText" :type="toastType" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, defineModel, watchEffect } from "vue"
import { ToastType } from "@/types"
import Toast from "@/components/modals/Toast.vue"
import Tooltip from "../modals/Tooltip.vue"
const textToCopy = defineModel<string>("Text to Copy")
const copied = ref(false)
const toastType = ref<ToastType>("success")
const toastText = ref<string>("")
const toast = ref<InstanceType<typeof Toast> | null>(null)
console.log({ toast })
watchEffect(() => {
  console.log({ toast })
})
const copyText = async () => {
  try {
    await navigator.clipboard.writeText(textToCopy.value ?? "")
    console.log({ toast })
    copied.value = true
    toastText.value = "Copied to clipboard!"
    setTimeout(() => (copied.value = false), 2000) // Reset after 2 seconds
  } catch (err) {
    toastType.value = "error"
    toastText.value = "Failed to copy to clipboard!"
    console.error("Failed to copy: ", err)
  }
}
</script>

<style>
/* Add your styles here */
</style>
