<template>
  <div class="avatar relative" :class="avatarClasses">
    <slot name="default">
      <img
        v-if="image"
        :src="image"
        class="e-avatar__image w-full h-full object-cover rounded-full"
      />
    </slot>
    <div v-if="showBadge" class="e-avatar__badge e-absolute e-top-0 e-right-0">
      <slot name="badge">
        <Badge :text="badgeText" :color="badgeColor" :size="badgeSize" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Size } from "@/types"
import { defineProps, ref, computed, PropType } from "vue"
const props = defineProps({
  size: {
    type: String as PropType<Size>,
    default: Size.md,
  },
  image: {
    type: String,
    default: "",
  },
  badgeText: {
    type: String,
    default: "",
  },
  badgeColor: {
    type: String,
    default: "primary",
  },
  badgeSize: {
    type: String as PropType<Size>,
    default: Size.md,
  },
  showBadge: {
    type: Boolean,
    default: false,
  },
})

const sizes = ref<Record<string, string>>({
  [Size.xs]: "w-8 h-8 text-xs",
  [Size.sm]: "w-10 h-10 text-sm",
  [Size.md]: "w-14 h-14 text-base",
  [Size.lg]: "w-20 h-20 text-2xl",
  [Size.xl]: "w-28 h-28 text-3xl",
  [Size["2xl"]]: "w-36 h-36 text-5xl",
})

const avatarClasses = computed(() => {
  const sizeClasses = sizes.value[props.size] || sizes.value[Size.xs]
  return [
    "flex items-center justify-center rounded-full bg-purple-500 text-white font-medium",
    sizeClasses,
  ]
})
</script>
