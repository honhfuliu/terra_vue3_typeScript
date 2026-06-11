<template>
  <svg
    :class="['icon', className]"
    :style="iconStyle"
    :width="size"
    :height="size"
    aria-hidden="true"
  >
    <use :xlink:href="symbolId"></use>
  </svg>
</template>

<script setup lang="ts">


const props = defineProps<{
  // 图标名称（对应 src/assets/icons 下的文件名）
  name: string
  // 图标大小
  size?: number | string
  // 图标颜色
  color?: string
  // 自定义类名
  className?: string
}>()

// 设置默认值
const size = props.size || 24
const color = props.color || ''
const className = props.className || ''

const symbolId = computed(() => `#icon-${props.name}`)

const iconStyle = computed(() => {
  return {
    color: color,
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size
  }
})
</script>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>