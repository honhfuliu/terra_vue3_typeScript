<script setup lang="ts">
import { ref } from 'vue'
import {
  Grid,
  Odometer,
  DataAnalysis,
  User,
  List,
  Key,
  Document,
  Notebook,
  FolderOpened,
  PriceTag,
  ShoppingCart,
  Goods,
  Setting,
  Tools,
  Lock,
  Bell,
  QuestionFilled
} from '@element-plus/icons-vue'


// 侧边栏是否折叠
const props = defineProps<{
  isCollapsed: boolean
}>()

// 关闭抽抽屉
const emit = defineEmits<{
  closeMenu: []
}>()

// 当前选中的菜单索引
const activeMenu = ref('dashboard')

import type { Component } from 'vue'

interface MenuItem {
  index: string
  title: string
  icon: Component
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { index: 'dashboard', title: '仪表盘', icon: Odometer },
  { index: 'analytics', title: '数据分析', icon: DataAnalysis },
  {
    index: 'users',
    title: '用户管理',
    icon: User,
    children: [
      { index: 'users-list', title: '用户列表', icon: List },
      { index: 'users-roles', title: '角色权限', icon: Key }
    ]
  },
  {
    index: 'content',
    title: '内容管理',
    icon: Document,
    children: [
      { index: 'articles', title: '文章管理', icon: Notebook },
      { index: 'categories', title: '分类管理', icon: FolderOpened },
      { index: 'tags', title: '标签管理', icon: PriceTag }
    ]
  },
  { index: 'orders', title: '订单管理', icon: ShoppingCart },
  { index: 'products', title: '产品管理', icon: Goods },
  {
    index: 'settings',
    title: '系统设置',
    icon: Setting,
    children: [
      { index: 'settings-general', title: '通用设置', icon: Tools },
      { index: 'settings-security', title: '安全设置', icon: Lock },
      { index: 'settings-notifications', title: '通知设置', icon: Bell }
    ]
  }
]

// 处理菜单选择
const handleSelect = (index: string) => {
  activeMenu.value = index
  emit('closeMenu')
}
</script>

<template>
  <div class="flex h-full flex-col bg-[var(--sidebar-bg)] text-[var(--sidebar-text)]">
    <!-- Logo -->
    <div
      class="flex h-14 lg:h-16 items-center   px-4"
      :class="isCollapsed ? 'justify-center' : 'justify-start gap-3'"
    >
      <div class="flex h-8 w-8 items-center justify-center rounded-lg ">
        <el-icon :size="20" class="text-white"><Grid /></el-icon>
      </div>
      <transition name="fade">
        <span v-if="!isCollapsed" class="text-lg font-semibold ">
          后台管理
        </span>
      </transition>
    </div>

    <!-- 菜单 -->
    <el-scrollbar class="flex-1">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapsed"
        :collapse-transition="false"
        class="border-none !bg-transparent"
        @select="handleSelect"
      >
        <template v-for="item in menuItems" :key="item.index">
          <!-- 有子菜单 -->
          <el-sub-menu v-if="item.children" :index="item.index">
            <template #title>
              <el-icon><component :is="item.icon" /></el-icon>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              v-for="child in item.children"
              :key="child.index"
              :index="child.index"
            >
              <el-icon><component :is="child.icon" /></el-icon>
              <span>{{ child.title }}</span>
            </el-menu-item>
          </el-sub-menu>

          <!-- 无子菜单 -->
          <el-menu-item v-else :index="item.index">
            <el-icon><component :is="item.icon" /></el-icon>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>

    <!-- 底部 -->
    
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:deep(.el-menu) {
  border: none !important;
  --el-menu-bg-color: transparent;
  --el-menu-text-color: var(--sidebar-text);


  /* --el-menu-bg-color: transparent;
  --el-menu-text-color: var(--secondary-foreground);
  --el-menu-hover-bg-color: var(--sidebar-hover);
  --el-menu-active-color: var(--primary-foreground); */
}

:deep(.el-menu-item),
:deep(.el-sub-menu__title) {
  height: 44px;
  line-height: 44px;
  margin: 4px 8px;
  border-radius: 8px;
}

:deep(.el-menu-item:hover),
:deep(.el-sub-menu__title:hover) {
  background-color: var(--menu-hover) !important;
}

:deep(.el-menu-item.is-active) {
  color: var(--menu-active-text) !important;
  
}

:deep(.el-menu--collapse) {
  width: 64px;
}

:deep(.el-menu--collapse .el-menu-item),
:deep(.el-menu--collapse .el-sub-menu__title) {
  margin: 4px;
  padding: 0 !important;
  justify-content: center;
}

:deep(.el-sub-menu .el-menu-item) {
  padding-left: 48px !important;
}
</style>
