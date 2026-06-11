<script setup lang="ts">
import { ref, computed } from 'vue'
import HeaderNav from './HeaderNav.vue'
import SidebarNav from './SidebarNav.vue'
import MainContent from './MainContent.vue'

const isCollapsed = ref(false)
const isMobileMenuOpen = ref(false)
// 侧边栏宽度
const sidebarWidth = computed(() => {
  return isCollapsed.value ? '64px' : '240px'
})
// 切换侧边栏
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}
// 切换移动端抽屉
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
// 关闭移动端抽屉
const closeMobileMenu = () => {
  console.log('关闭移动端抽屉')
  isMobileMenuOpen.value = false
}
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <!-- 侧边栏 - 桌面端 -->
    <aside
      class="hidden lg:flex flex-col   transition-all duration-300 ease-in-out"
      :style="{ width: sidebarWidth }"
    >
      <SidebarNav :is-collapsed="isCollapsed" />
    </aside>

    <!-- 侧边栏 - 移动端遮罩 -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
      @click="closeMobileMenu"
    />

    <!-- 侧边栏 - 移动端抽屉 -->
    <aside
      class="fixed inset-y-0 left-0 z-50 w-64 transform  border-r  transition-transform duration-300 ease-in-out lg:hidden"
      :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <SidebarNav :is-collapsed="false" @close-menu="closeMobileMenu" />
    </aside>

    <!-- 主内容区 -->
    <div class="flex flex-1 flex-col overflow-hidden">
      <!-- 头部 -->
      <HeaderNav
        :is-collapsed="isCollapsed"
        @toggle-sidebar="toggleSidebar"
        @toggle-mobile-menu="toggleMobileMenu"
      />

      <!-- 主区域 -->
      <main class="flex-1 overflow-auto  p-4 lg:p-6">
        <MainContent />
      </main>
    </div>
  </div>
</template>
