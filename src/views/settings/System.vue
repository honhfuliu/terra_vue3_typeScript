<template>
  <div class="system p-6">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">系统设置</h2>
    <el-card class="mb-6">
      <template #header>
        <div class="flex items-center justify-between">
          <span>基本设置</span>
          <el-button type="primary" size="small">保存修改</el-button>
        </div>
      </template>
      <el-form label-width="120px">
        <el-form-item label="系统名称">
          <el-input v-model="systemInfo.name" placeholder="请输入系统名称" />
        </el-form-item>
        <el-form-item label="系统描述">
          <el-input v-model="systemInfo.description" type="textarea" placeholder="请输入系统描述" />
        </el-form-item>
        <el-form-item label="系统版本">
          <el-input v-model="systemInfo.version" placeholder="请输入系统版本" disabled />
        </el-form-item>
        <el-form-item label="自动备份">
          <el-switch v-model="systemInfo.autoBackup" />
        </el-form-item>
        <el-form-item label="备份频率">
          <el-select v-model="systemInfo.backupFrequency" placeholder="请选择备份频率">
            <el-option label="每天" value="daily" />
            <el-option label="每周" value="weekly" />
            <el-option label="每月" value="monthly" />
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <template #header>
        <div class="flex items-center justify-between">
          <span>通知设置</span>
          <el-button type="primary" size="small">保存修改</el-button>
        </div>
      </template>
      <el-form label-width="120px">
        <el-form-item label="邮件通知">
          <el-switch v-model="notificationInfo.email" />
        </el-form-item>
        <el-form-item label="短信通知">
          <el-switch v-model="notificationInfo.sms" />
        </el-form-item>
        <el-form-item label="系统通知">
          <el-switch v-model="notificationInfo.system" />
        </el-form-item>
        <el-form-item label="通知邮箱">
          <el-input v-model="notificationInfo.emailAddress" placeholder="请输入通知邮箱" />
        </el-form-item>
        <el-form-item label="通知手机号">
          <el-input v-model="notificationInfo.phoneNumber" placeholder="请输入通知手机号" />
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const systemInfo = ref({
  name: 'Core Admin',
  description: '一个功能强大的管理系统',
  version: '1.0.0',
  autoBackup: true,
  backupFrequency: 'daily'
})

const notificationInfo = ref({
  email: true,
  sms: false,
  system: true,
  emailAddress: 'admin@example.com',
  phoneNumber: '13800138000'
})
</script>

<style scoped>
.system {
  min-height: 100%;
}
</style>