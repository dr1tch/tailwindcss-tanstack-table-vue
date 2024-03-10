<template>
  <span class="e-badge" :class="badgeClasses">
    <span v-if="showText">{{ text }}</span>
  </span>
</template>

<script setup lang="ts">
import { BaseColor, Size } from "@/types"
import { computed, defineProps, PropType, ref } from "vue"

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "primary",
  },
  size: {
    type: String as PropType<Size>,
    default: "md",
  },
})

const colors = ref<Record<string, string>>({
  [BaseColor.error]: "bg-rose-500 text-white",
  [BaseColor.info]: "bg-cyan-500 text-white",
  [BaseColor.warning]: "bg-amber-500 text-white",
  [BaseColor.primary]: "bg-sky-500 text-white",
  [BaseColor.default]: "bg-slate-300 text-white",
  [BaseColor.success]: "bg-lime-500 text-white",
})

const sizes = ref<Record<string, string>>({
  [Size.dot]: "w-2 h-2",
  [Size.xs]: "w-3 h-3",
  [Size.sm]: "w-4 h-4",
  [Size.md]: "w-5 h-5",
  [Size.lg]: "min-w-[2rem] max-w-[4rem] px-1 h-6 text-sm font-medium",
  [Size.xl]: "min-w-[3rem] max-w-[5rem] px-1 h-8 text-base font-medium",
})

const badgeClasses = computed(() => {
  const colorClasses =
    colors.value[props.color] || colors.value[BaseColor.default]
  const sizeClasses = sizes.value[props.size] || sizes.value[Size.md]

  return [
    "flex items-center justify-center rounded-full",
    colorClasses,
    sizeClasses,
  ]
})

const showText = computed(() => [Size.lg, Size.xl].includes(props.size))
</script>
