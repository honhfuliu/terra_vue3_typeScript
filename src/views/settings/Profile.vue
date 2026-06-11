<template>
  <div class="profile p-6 bg-[--background-color]">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">个人资料</h2>
    <el-card class="mb-6">
      <template #header>
        <div class="flex items-center justify-between">
          <span>基本信息</span>
          <el-button type="primary" size="small">保存修改</el-button>
        </div>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <el-form label-width="120px">
          <el-form-item label="用户名">
            <el-input v-model="userInfo.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="userInfo.email" type="email" placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="userInfo.phone" placeholder="请输入手机号码" />
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="userInfo.gender">
              <el-radio label="male">男</el-radio>
              <el-radio label="female">女</el-radio>
              <el-radio label="other">其他</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div class="flex flex-col items-center justify-center">
          <el-avatar :size="120">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait&image_size=square" alt="用户头像" />
          </el-avatar>
          <el-button type="primary" plain class="mt-4">
            更换头像
          </el-button>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-2  bg-[--primary-color]">支持 JPG、PNG 格式，最大 2MB</p>
        </div>
      </div>
    </el-card>
    <el-card>
      <template #header>
        <div class="flex items-center justify-between">
          <span>修改密码</span>
          <el-button type="primary" size="small">保存修改</el-button>
        </div>
      </template>
      <el-form label-width="120px">
        <el-form-item label="旧密码">
          <el-input v-model="passwordInfo.oldPassword" type="password" placeholder="请输入旧密码" />
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="passwordInfo.newPassword" type="password" placeholder="请输入新密码" />
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="passwordInfo.confirmPassword" type="password" placeholder="请确认新密码" />
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userInfo = ref({
  username: '管理员',
  email: 'admin@example.com',
  phone: '13800138000',
  gender: 'male'
})

const passwordInfo = ref({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})
</script>

<style scoped>
.profile {
  min-height: 100%;
}
</style>