<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <div
    class="flex flex-col bg-gray-800 text-white border-r-1 border-gray-300 py-4"
    :class="{
    'w-64': isOpen,
    'w-16': !isOpen,
  }">
    <div class="flex-shrink-0 flex flex-col mb-3 w-full items-center">
      <a href="/" class="text-blue-600 text-3xl font-bold">📊</a>
      <h3 class="font-bold text-xl" :class="{
        'block': isOpen,
        'hidden': !isOpen,
      }">CMS APP</h3>
    </div>

  </div>
</template>