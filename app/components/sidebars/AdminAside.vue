<script setup lang="ts">
// Menggunakan defineProps untuk menerima prop dari parent
const props = defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <aside
    class="fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out transform"
    
  >
    <div class="flex items-center justify-between h-16 text-2xl font-bold">
      Flowbite
    </div>

    <ul class="space-y-2 mt-4">
      <li>
        <NuxtLink to="/" class="block px-4 py-2 rounded-lg hover:bg-gray-700">
          Dashboard
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/settings" class="block px-4 py-2 rounded-lg hover:bg-gray-700">
          Settings
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>