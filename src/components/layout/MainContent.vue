<script setup lang="ts">
import type { Component } from 'vue'
import {
  User,
  ShoppingCart,
  Money,
  TrendCharts,
  UserFilled,
  DocumentAdd,
  EditPen,
  DataLine,
  ArrowRight,
  PieChart,
  Plus,
  Download
} from '@element-plus/icons-vue'

const statsCards: { title: string; value: string; change: string; icon: Component; color: string }[] = [
  { title: '总用户数', value: '12,846', change: '+12.5%', icon: User, color: 'bg-blue-500' },
  { title: '总订单数', value: '3,284', change: '+8.2%', icon: ShoppingCart, color: 'bg-green-500' },
  { title: '总收入', value: '¥128,450', change: '+23.1%', icon: Money, color: 'bg-purple-500' },
  { title: '活跃用户', value: '2,156', change: '-3.2%', icon: TrendCharts, color: 'bg-orange-500' }
]

const recentActivities = [
  { user: '张三', action: '创建了新订单', time: '2分钟前', avatar: 'Z' },
  { user: '李四', action: '更新了个人资料', time: '15分钟前', avatar: 'L' },
  { user: '王五', action: '发布了新文章', time: '1小时前', avatar: 'W' },
  { user: '赵六', action: '完成了支付', time: '2小时前', avatar: 'Z' },
  { user: '钱七', action: '注册了新账户', time: '3小时前', avatar: 'Q' }
]

const quickActions: { title: string; icon: Component; color: string }[] = [
  { title: '添加用户', icon: UserFilled, color: 'text-blue-400' },
  { title: '创建订单', icon: DocumentAdd, color: 'text-green-400' },
  { title: '发布文章', icon: EditPen, color: 'text-purple-400' },
  { title: '生成报告', icon: DataLine, color: 'text-orange-400' }
]
</script>

<template>
  <div class="space-y-6">
    <!-- 页面标题 -->
    <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-[var(--foreground)]">仪表盘</h1>
        <p class="text-sm text-[var(--muted-foreground)]">欢迎回来，这是您的数据概览</p>
      </div>
      <div class="flex gap-2 mt-4 sm:mt-0">
        <el-button type="primary" :icon="Plus">新建</el-button>
        <el-button :icon="Download">导出</el-button>
      </div>
    </div>

    <!-- 统计卡片 -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(stat, index) in statsCards"
        :key="index"
        class="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all hover:border-[var(--primary)]/50"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-[var(--muted-foreground)]">{{ stat.title }}</p>
            <p class="mt-2 text-2xl font-bold text-[var(--foreground)]">{{ stat.value }}</p>
            <p
              class="mt-1 text-xs"
              :class="stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'"
            >
              {{ stat.change }} 较上月
            </p>
          </div>
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl"
            :class="stat.color"
          >
            <el-icon :size="24" class="text-white"><component :is="stat.icon" /></el-icon>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要内容区 -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <!-- 快捷操作 -->
      <div class="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
        <h3 class="mb-4 text-lg font-semibold text-[var(--foreground)]">快捷操作</h3>
        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="(action, index) in quickActions"
            :key="index"
            class="flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--secondary)] p-4 transition-all hover:border-[var(--primary)]/50 hover:bg-[var(--sidebar-hover)]"
          >
            <el-icon :size="28" :class="action.color"><component :is="action.icon" /></el-icon>
            <span class="text-sm text-[var(--foreground)]">{{ action.title }}</span>
          </div>
        </div>
      </div>

      <!-- 最近活动 -->
      <div class="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 lg:col-span-2">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-lg font-semibold text-[var(--foreground)]">最近活动</h3>
          <el-button text size="small" type="primary">查看全部</el-button>
        </div>
        <div class="space-y-4">
          <div
            v-for="(activity, index) in recentActivities"
            :key="index"
            class="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-[var(--sidebar-hover)]"
          >
            <el-avatar :size="40" class="bg-[var(--primary)] text-white">
              {{ activity.avatar }}
            </el-avatar>
            <div class="flex-1">
              <p class="text-sm text-[var(--foreground)]">
                <span class="font-medium">{{ activity.user }}</span>
                {{ activity.action }}
              </p>
              <p class="text-xs text-[var(--muted-foreground)]">{{ activity.time }}</p>
            </div>
            <el-icon class="text-[var(--muted-foreground)]"><ArrowRight /></el-icon>
          </div>
        </div>
      </div>
    </div>

    <!-- 图表区域占位 -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
        <h3 class="mb-4 text-lg font-semibold text-[var(--foreground)]">销售趋势</h3>
        <div class="flex h-64 items-center justify-center rounded-lg bg-[var(--secondary)]">
          <div class="text-center">
            <el-icon :size="48" class="text-[var(--muted-foreground)]"><TrendCharts /></el-icon>
            <p class="mt-2 text-sm text-[var(--muted-foreground)]">图表区域</p>
          </div>
        </div>
      </div>
      <div class="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
        <h3 class="mb-4 text-lg font-semibold text-[var(--foreground)]">用户分布</h3>
        <div class="flex h-64 items-center justify-center rounded-lg bg-[var(--secondary)]">
          <div class="text-center">
            <el-icon :size="48" class="text-[var(--muted-foreground)]"><PieChart /></el-icon>
            <p class="mt-2 text-sm text-[var(--muted-foreground)]">图表区域</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
