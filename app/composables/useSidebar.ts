import { ref, onMounted } from "vue";

export const useSidebar = () => {
  const isSidebarOpen = ref(false);
  const isDark = ref(false);

  const setDark = (val: "dark" | "light") => {
    if (val === "dark") {
      document.documentElement.classList.add("dark");
      isDark.value = true;
    } else {
      document.documentElement.classList.remove("dark");
      isDark.value = false;
    }
  };

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  // This will handle the initial state and logic
  onMounted(() => {
    // You can add logic here to check for user preference or initial state
  });

  return {
    isSidebarOpen,
    isDark,
    setDark,
    toggleSidebar,
  };
};
