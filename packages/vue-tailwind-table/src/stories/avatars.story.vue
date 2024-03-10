<template>
  <Story
    title="Font-size"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <Variant title="Avatar + Controls">
      <template #default>
        <div class="flex items-center space-x-2">
          <Avatar
            :size="size"
            :image="sampleImg"
            :show-badge="showBadge"
            :badge-color="badgeColor"
            :badge-size="badgeSize"
            :badge-text="badgeText"
          />

          <Avatar
            :size="size"
            :show-badge="showBadge"
            :badge-color="badgeColor"
            :badge-size="badgeSize"
            :badge-text="badgeText"
          >
            {{ text }}
          </Avatar>
        </div>
      </template>
      <template #controls>
        <HstText v-model="text" title="Avatar text" />
        <HstSelect v-model="size" title="Avatar size" :options="avatarSizes" />
        <HstCheckbox v-model="showBadge" title="Show badge" />
        <HstText v-model="badgeText" title="Badge text" />
        <HstSelect
          v-model="badgeColor"
          title="Badge color"
          :options="badgeColors"
        />
        <HstSelect
          v-model="badgeSize"
          title="Badge size"
          :options="badgeSizes"
        />
      </template>
    </Variant>
    <Variant title="Avatar + Text">
      <template #default>
        <div class="flex items-center space-x-2">
          <Avatar size="2xl"> EV </Avatar>
          <Avatar size="xl"> EV </Avatar>
          <Avatar size="lg"> EV </Avatar>
          <Avatar size="md"> EV </Avatar>
          <Avatar size="sm"> EV </Avatar>
          <Avatar size="xs"> EV </Avatar>
        </div>
      </template>
    </Variant>
    <Variant title="Avatar + Text + Badge">
      <template #default>
        <div class="flex items-center space-x-2">
          <Avatar size="2xl" :show-badge="true" badge-size="xl" badge-text="24">
            EV
          </Avatar>
          <Avatar size="xl" :show-badge="true" badge-size="lg" badge-text="24">
            EV
          </Avatar>
          <Avatar :show-badge="true" size="lg" badge-size="md"> EV </Avatar>
          <Avatar :show-badge="true" size="md" badge-size="sm"> EV </Avatar>
          <Avatar :show-badge="true" size="sm" badge-size="xs"> EV </Avatar>
          <Avatar :show-badge="true" size="xs" badge-size="dot"> EV </Avatar>
        </div>
      </template>
    </Variant>
    <Variant title="Avatar + Image + Badge">
      <template #default>
        <div class="flex items-center space-x-2">
          <Avatar
            size="2xl"
            :image="sampleImg"
            :show-badge="true"
            badge-size="xl"
            badge-text="24"
          />
          <Avatar
            size="xl"
            :image="sampleImg"
            :show-badge="true"
            badge-size="lg"
            badge-text="24"
          />
          <Avatar
            :image="sampleImg"
            :show-badge="true"
            size="lg"
            badge-size="md"
          />
          <Avatar
            :image="sampleImg"
            :show-badge="true"
            size="md"
            badge-size="sm"
          />
          <Avatar
            :image="sampleImg"
            :show-badge="true"
            size="sm"
            badge-size="xs"
          />
          <Avatar
            :image="sampleImg"
            :show-badge="true"
            size="xs"
            badge-size="dot"
          />
        </div>
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Avatar from "@/components/Avatar.vue"
import {
  BadgeColorOptions,
  BadgeSizeOptions,
  AvatarSizeOptions,
} from "./stories.utils"

const sampleImg = ref(
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
)
const text = ref("EV")
const size = ref("xl")
const showBadge = ref(true)
const badgeSize = ref("xl")
const badgeColor = ref("error")
const badgeText = ref("24")
const badgeColors = ref(BadgeColorOptions)
const badgeSizes = ref(BadgeSizeOptions)
const avatarSizes = ref(AvatarSizeOptions)
</script>
