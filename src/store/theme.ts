import { defineStore } from 'pinia'

const THEME_STORAGE_KEY = 'theme-dark-mode'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    // 深色模式状态
    isDarkMode: false
  }),
  
  getters: {
    // 当前主题模式
    currentTheme: (state) => state.isDarkMode ? 'dark' : 'light'
  },
  
  actions: {
    // 切换深色/浅色模式
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      this.updateDocumentTheme()
      this.saveThemeToStorage()
    },
    
    // 设置深色模式
    setDarkMode(dark: boolean) {
      this.isDarkMode = dark
      this.updateDocumentTheme()
      this.saveThemeToStorage()
    },
    
    // 从本地存储加载主题
    loadThemeFromStorage() {
      try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
        if (savedTheme !== null) {
          this.isDarkMode = savedTheme === 'true'
        }
      } catch (error) {
        console.error('缓存加载主题失败:', error)
      }
    },
    
    // 保存主题到本地存储
    saveThemeToStorage() {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, this.isDarkMode.toString())
      } catch (error) {
        console.error('缓存存储主题失败:', error)
      }
    },
    
    // 更新文档主题
    updateDocumentTheme() {
      // 设置主题模式
      if (this.isDarkMode) {
        // 深色模式变量
        document.documentElement.classList.add('dark')
      } else {
        // 浅色模式变量
        document.documentElement.classList.remove('dark')
      }
    },
    
    // 初始化主题
    initTheme() {
      this.loadThemeFromStorage()
      this.updateDocumentTheme()
    }
  }
})