<script setup lang="ts">
const emit = defineEmits(['toggle-sidebar'])
const props = defineProps<{
    isOpen: boolean
}>()
</script>

<template>
    <header
        class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 bg-blue-900 text-white shadow-lg">
        <button @click="emit('toggle-sidebar')" class="p-2 mr-2 text-white hover:bg-blue-800 rounded-lg">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                </path>
            </svg>
        </button>

        <div class="flex-1 text-xl font-bold">
            Flowbite
        </div>

        <div class="flex items-center">
            <img src="https://i.pravatar.cc/300" alt="User Avatar" class="w-8 h-8 rounded-full" />
        </div>
    </header>
</template>