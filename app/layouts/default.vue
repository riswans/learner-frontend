<script setup lang="ts">
import { ref } from 'vue'

const isSidebarOpen = ref(true)

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
    <!-- <div class="flex h-screen bg-gray-100">
        <HeadersNavbarAdmin :isOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
        <SidebarsAdminAside :isOpen="isSidebarOpen" />
        <main class="flex-1 transition-all duration-300 overflow-y-auto" :class="{
            'ml-64': isSidebarOpen,
            'ml-0': !isSidebarOpen,
        }">
            <div class="px-6 py-8 mt-16">
                <slot />
            </div>
        </main>
    </div> -->
    <div class="flex min-h-screen bg-gray-100">
        <SidebarsAdminAside :isOpen="isSidebarOpen" />
   
    </div>
</template>