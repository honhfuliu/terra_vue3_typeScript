<template>
  <div class="dashboard p-6">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">仪表盘</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <el-card class="stats-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 dark:text-gray-400 text-sm">总用户数</p>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">1,234</h3>
          </div>
          <div class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <span class="text-blue-600 dark:text-blue-400 text-xl">👤</span>
          </div>
        </div>
      </el-card>
      <el-card class="stats-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 dark:text-gray-400 text-sm">今日访问</p>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">567</h3>
          </div>
          <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <span class="text-green-600 dark:text-green-400 text-xl">👁</span>
          </div>
        </div>
      </el-card>
      <el-card class="stats-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 dark:text-gray-400 text-sm">活跃用户</p>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">345</h3>
          </div>
          <div class="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
            <span class="text-yellow-600 dark:text-yellow-400 text-xl">📊</span>
          </div>
        </div>
      </el-card>
      <el-card class="stats-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 dark:text-gray-400 text-sm">系统状态</p>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">正常</h3>
          </div>
          <div class="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
            <span class="text-purple-600 dark:text-purple-400 text-xl">✓</span>
          </div>
        </div>
      </el-card>
    </div>
    <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <el-card class="chart-card">
        <template #header>
          <div class="flex items-center justify-between">
            <span>用户增长趋势</span>
            <el-select v-model="timeRange" size="small" placeholder="选择时间范围">
              <el-option label="近7天" value="7d" />
              <el-option label="近30天" value="30d" />
              <el-option label="近90天" value="90d" />
            </el-select>
          </div>
        </template>
        <div class="h-64 bg-gray-50 dark:bg-gray-800 rounded-md flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">图表区域</p>
        </div>
      </el-card>
      <el-card class="chart-card">
        <template #header>
          <div class="flex items-center justify-between">
            <span>用户分布</span>
            <el-button size="small" type="primary" plain>
              导出
            </el-button>
          </div>
        </template>
        <div class="h-64 bg-gray-50 dark:bg-gray-800 rounded-md flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">图表区域</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const timeRange = ref('7d')
</script>

<style scoped>
.dashboard {
  min-height: 100%;
}

.stats-card {
  transition: all 0.3s ease;
}

.stats-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.chart-card {
  transition: all 0.3s ease;
}

.chart-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>