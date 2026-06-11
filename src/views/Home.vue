<template>
  <div class="container" >
    <div class="w-[200px] bg-[var(--sidebar-bg)]">
      <div class=" top-0 sticky h-14 text-center content-center z-50 bg-[var(--sidebar-bg)]">
           {{ title }}
        </div>
      <div class="h-screen h-full">
        <Sidebar />
      </div>
    </div>
    <div class="content" style="">
      <div class="w-[100%] sticky top-0 h-14  w-full bg-[var(--navbar-bg)]">
        <Navbar />
      </div>
      <div>
        <AppMain />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/layout/components/Navbar.vue'
import AppMain from '@/layout/components/AppMain.vue'
import Sidebar from '@/layout/components/Sidebar.vue'

const title = import.meta.env.VITE_APP_TITLE
</script>

<style scoped lang="scss">
.container {
  display: flex; 
  flex-direction: row; 
  flex: 1; 
  flex-basis: auto; 
  box-sizing: border-box;
}
.content {
  display: flex; 
  flex-direction: column; 
  flex: 1; 
  flex-basis: auto; 
  box-sizing: border-box;
}
</style>