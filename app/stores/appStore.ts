export const useAppStore = defineStore("appStore", () => {
 const themes = ref(false);
 const bgDashbord = ref("bg-blue-600 text-gray-100");

async function fetchMessages(data:any){
    console.log('ssss')
    themes.value = data;
    console.log("Themes:", themes.value);
    if(data){
        bgDashbord.value = "bg-gray-800 text-gray-100";
    }else{
        bgDashbord.value = "bg-blue-600 text-gray-100";
    }
}

  return {
    themes,
    fetchMessages,
    bgDashbord,
  };
})

