<script setup lang="ts">
import {
  Menu,
  Expand,
  Fold,
  Search,
  Bell,
  Moon,
  User,
  Setting,
  SwitchButton,
  ArrowDown
} from '@element-plus/icons-vue'

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
defineProps<{
  isCollapsed: boolean
}>()

const emit = defineEmits<{
  toggleSidebar: []
  toggleMobileMenu: []
}>()

const searchQuery = ref('')

const userMenuItems = [
  { label: '个人资料', icon: User, command: 'profile' },
  { label: '账户设置', icon: Setting, command: 'settings' },
  { label: '退出登录', icon: SwitchButton, command: 'logout', divided: true }
]

const handleCommand = (command: string) => {
  console.log('执行命令:', command)
}
</script>

<template>
  <header
    class="flex h-14 lg:h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--header-bg)] px-4 lg:px-6"
  >
    <!-- 左侧 -->
    <div class="flex items-center gap-3">
      
      <!-- 移动端菜单按钮 -->
      <el-button
        class="block lg:!hidden"
        :icon="Menu"
        text
        @click="emit('toggleMobileMenu')"
      />

      <!-- 桌面端折叠按钮 -->
      <el-button
        class="!hidden lg:!block"
        :icon="isCollapsed ? Expand : Fold"
        text
        @click="emit('toggleSidebar')"
      />

      <!-- 面包屑 -->
      <el-breadcrumb separator="/" class="hidden md:flex">
        <el-breadcrumb-item>
          <span>首页</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <span >仪表盘</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 右侧 -->
    <div class="flex items-center gap-2 lg:gap-4">
      <!-- 搜索框 -->
      <el-input
        v-model="searchQuery"
        placeholder="搜索..."
        :prefix-icon="Search"
        class="hidden md:block w-48 lg:w-64"
        clearable
      />

      <!-- 搜索按钮 - 移动端 -->
      <el-button class="md:hidden" :icon="Search" text circle />

      <!-- 通知 -->
      <el-badge :value="3" :max="99" class="!leading-none">
        <el-button :icon="Bell" text circle />
      </el-badge>

      <!-- 主题切换 -->
      <el-button :icon="Moon" text circle @click="toggleDark()" />

      <!-- 用户菜单 -->
      <el-dropdown trigger="click" @command="handleCommand">
        <div class="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 transition-colors">
          <el-avatar :size="32" >
            <el-icon><User /></el-icon>
          </el-avatar>
          <div class="hidden lg:block text-left">
            <p class="text-sm font-medium ">管理员</p>
            <p class="text-xs" >admin@example.com</p>
          </div>
          <el-icon class="hidden lg:block "><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="item in userMenuItems"
              :key="item.command"
              :command="item.command"
              :divided="item.divided"
            >
              <el-icon class="mr-2"><component :is="item.icon" /></el-icon>
              {{ item.label }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<style scoped>
:deep(.el-input__wrapper) {
  background-color: var(--secondary);
  border: 1px solid var(--border);
  box-shadow: none;
}

:deep(.el-input__wrapper:hover),
:deep(.el-input__wrapper.is-focus) {
  border-color: var(--primary);
}

:deep(.el-input__inner) {
  color: var(--foreground);
}

:deep(.el-input__inner::placeholder) {
  color: var(--muted-foreground);
}

:deep(.el-breadcrumb__separator) {
  color: var(--muted-foreground);
}

:deep(.el-button) {
  color: var(--foreground);
}

:deep(.el-button:hover) {
  background-color: var(--sidebar-hover);
}
</style>
