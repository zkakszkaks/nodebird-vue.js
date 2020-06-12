<template>
  <div>
    profile page
  </div>
</template>

<script>
  export default {
    layout: 'admin', // admin.vue 레이아웃을 사용 하겠다.
    data() {
      return {
        name: 'Nuxt.js',
      }
    },
    head() {
      return {
        title: '프로필'
      }
    },
  }
</script>

<style>
</style>