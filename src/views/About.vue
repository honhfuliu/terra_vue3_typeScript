<template>
  <div class="about">
    <h1>About Page</h1>
    <p>This is the about page!</p>
    <router-link to="/">Go to Home</router-link>
    <div>
      <div class="text-red-500">测试字体</div>
    </div>
    <div v-for="i in 50" :key="i" style="color: var(--text-light);">
      <div class="text-red-500">{{ i }}</div>
    </div>

  </div>
</template>

<script setup lang="ts">
// About page component
</script>

<style scoped>
.about {
  padding: 20px;
}

h1 {
  color: var(--text-color);
}

p {
  color: var(--text-light);
}

router-link {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

router-link:hover {
  background-color: var(--primary-hover);
}
</style>