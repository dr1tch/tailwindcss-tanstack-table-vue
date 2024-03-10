<template>
  <Story
    title="Font-size"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <Variant title="Badge + Controls">
      <template #default>
        <div class="flex items-center space-x-2">
          <Badge :text="text" :color="color" :size="size" />
        </div>
      </template>
      <template #controls>
        <HstText v-model="text" title="Text" />
        <HstSelect v-model="color" title="Color" :options="badgeColors" />
        <HstSelect v-model="size" title="Size" :options="badgeSizes" />
      </template>
    </Variant>
    <Variant title="Error">
      <template #default>
        <div class="flex items-center space-x-2">
          <Badge text="42" color="error" size="xl" />
          <Badge text="42" color="error" size="lg" />
          <Badge text="" color="error" size="md" />
          <Badge text="" color="error" size="sm" />
          <Badge text="" color="error" size="xs" />
          <Badge text="" color="error" size="dot" />
        </div>
      </template>
    </Variant>
    <Variant title="Info">
      <template #default>
        <div class="flex items-center space-x-2">
          <Badge text="42" color="info" size="xl" />
          <Badge text="42" color="info" size="lg" />
          <Badge text="" color="info" size="md" />
          <Badge text="" color="info" size="sm" />
          <Badge text="" color="info" size="xs" />
          <Badge text="" color="info" size="dot" />
        </div>
      </template>
    </Variant>
    <Variant title="Success">
      <template #default>
        <div class="flex items-center space-x-2">
          <Badge text="42" color="success" size="xl" />
          <Badge text="42" color="success" size="lg" />
          <Badge text="" color="success" size="md" />
          <Badge text="" color="success" size="sm" />
          <Badge text="" color="success" size="xs" />
          <Badge text="" color="success" size="dot" />
        </div>
      </template>
    </Variant>
    <Variant title="Warning">
      <template #default>
        <div class="flex items-center space-x-2">
          <Badge text="42" color="warning" size="xl" />
          <Badge text="42" color="warning" size="lg" />
          <Badge text="" color="warning" size="md" />
          <Badge text="" color="warning" size="sm" />
          <Badge text="" color="warning" size="xs" />
          <Badge text="" color="warning" size="dot" />
        </div>
      </template>
    </Variant>
    <Variant title="Primary">
      <template #default>
        <div class="flex items-center space-x-2">
          <Badge text="42" color="primary" size="xl" />
          <Badge text="42" color="primary" size="lg" />
          <Badge text="" color="primary" size="md" />
          <Badge text="" color="primary" size="sm" />
          <Badge text="" color="primary" size="xs" />
          <Badge text="" color="primary" size="dot" />
        </div>
      </template>
    </Variant>
    <Variant title="Default">
      <template #default>
        <div class="flex items-center space-x-2">
          <Badge text="42" color="default" size="xl" />
          <Badge text="42" color="default" size="lg" />
          <Badge text="" color="default" size="md" />
          <Badge text="" color="default" size="sm" />
          <Badge text="" color="default" size="xs" />
          <Badge text="" color="default" size="dot" />
        </div>
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import Badge from "@/components/Badge.vue"
import { BadgeColorOptions, BadgeSizeOptions } from "./stories.utils"
import { ref } from "vue"
const text = ref("24")
const color = ref("error")
const size = ref("xl")
const badgeColors = ref(BadgeColorOptions)
const badgeSizes = ref(BadgeSizeOptions)
</script>
