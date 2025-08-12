<script setup lang="ts">
import { ref } from 'vue'

const isSidebarOpen = ref(true)

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
    <div class="flex h-screen bg-gray-100">
        <SidebarsAdminAside :isOpen="isSidebarOpen" />
        <div class="flex-1 flex flex-col overflow-hidden">
            <HeadersNavbarAdmin :isOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
            <slot />
        </main>
    </div>
    </div>
</template>