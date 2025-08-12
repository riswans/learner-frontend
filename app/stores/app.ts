export const useApps = defineStore("app", () => {
 const themes = ref(false);

async function fetchMessages(data:any){
    themes.value = data;
}

  return {
    themes,
    fetchMessages
  }
})