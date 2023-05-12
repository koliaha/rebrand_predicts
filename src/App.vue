<script setup>
import TheFooter from './components/TheFooter.vue'
import TheNav from './components/TheNav.vue'
import TheForm from './components/TheForm.vue'
// import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <TheNav/>
  <router-view />
  <TheForm/>
  <TheFooter/>
</template>

<style scoped>

</style>
