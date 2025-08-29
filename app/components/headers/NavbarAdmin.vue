<script setup lang="ts">

const emit = defineEmits(['toggle-sidebar'])
const props = defineProps<{
    isOpen: boolean
}>()

const isDark = ref(false);

const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};
</script>

<template>
    <header :class="useAppStore().bgDashbord"
        class="flex-shrink-0 flex justify-between items-center p-4 shadow-md transition-colors duration-200 border-b-1 border-gray-300">
        <div class="relative w-full max-w-lg mx-4 md:mx-auto">
            <button @click="emit('toggle-sidebar')" class="p-2 mr-2 hover:bg-blue-800 rounded-lg">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </button>
        </div>

        <!-- Ikon dan Profil Pengguna -->
        <div class="flex flex-1 justify-end space-x-4">
            <button @click="useAppStore().themes = !useAppStore().themes"
                class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <svg v-if="useAppStore().themes" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"
                    fill="currentColor" stroke="none">
                    <path
                        d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.747 5.747a.75.75 0 011.061 0l1.59 1.59a.75.75 0 01-1.061 1.06l-1.59-1.59a.75.75 0 010-1.061zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM7.747 18.253a.75.75 0 010-1.061l1.59-1.59a.75.75 0 111.061 1.061l-1.59 1.59a.75.75 0 01-1.06 0zM12 17.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM18.253 17.253a.75.75 0 011.061 0l1.59 1.59a.75.75 0 11-1.061 1.061l-1.59-1.59a.75.75 0 010-1.06zM20.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25a.75.75 0 01-.75-.75zM17.253 7.747a.75.75 0 011.061 0l1.59 1.59a.75.75 0 01-1.061 1.061l-1.59-1.59a.75.75 0 010-1.061z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1111.21 3A7 7 0 0021 12.79z"></path>
                </svg>
            </button>

            <div class="relative">
                <button
                    class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 01-3.46 0"></path>
                    </svg>
                </button>
                <span
                    class="absolute top-1 right-1 h-2 w-2 rounded-full bg-orange-400 border-2 border-white dark:border-gray-800"></span>
            </div>

            <div class="flex items-center space-x-2 border-l pl-4 border-gray-200 dark:border-gray-700">
                <img class="h-10 w-10 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User Profile" />
                <div class="text-sm font-semibold hidden md:block">Musharaf</div>
                <button
                    class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500 dark:text-gray-400"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>