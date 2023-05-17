<template>
  <div class="bg-primary text-white py-5 w-full">
    <div class="container flex justify-between px-5 md:px-0 relative">
      <router-link to="/">
        <img src="../assets/img/logo.svg" alt="" />
      </router-link>
      <div class="hidden md:flex items-center gap-x-10">
        <router-link to="/">Smart Events</router-link>
        <router-link to="/smart">Smart Retargeting</router-link>
      </div>
      <div
        class="nav-toggle block md:hidden"
        :class="{ expanded: navOpen }"
        @click="navOpen = !navOpen"
      >
        <div class="nav-toggle-area"></div>
        <div class="nav-toggle-bar"></div>
      </div>
    </div>
    <nav class="nav dropdown-list block md:hidden"  :class="{ expanded: navOpen }">
      <div class="nav-wrapper">
        <div class="burger-list">
          <router-link to="/">Smart Events</router-link>
          <router-link to="/smart">Smart Retargeting</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { ref,watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const navOpen = ref(false);

watch(() => route.path, () => {
  navOpen.value = false;
});
</script>
<style>
.nav {
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  color: #ffffff;
  cursor: pointer;
  /* right: 0;
  top: 0; */
  right: -100%;
  top:  -100%;
  position: fixed;
  padding: 20px;
  width: 250px;
  min-height: 500px;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border: 1px solid black;
  background: #262626;
  z-index: 1000;
}
.nav-wrapper {
  position: relative;
}
.nav.expanded {
  right: 0;
  top: 0;
  z-index: 1000;
}

.nav-toggle {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  height: 70px;
  /* right: 6rem; */
  /* right: -100%; */
  position: fixed;
  top: 8px;
  right: 8px;
  width: 70px;
  z-index: 1002;
  background: rgba(0, 0, 0, 0.2);
  padding: 30px 10px 10px;
  border-radius: 50%;
  transition: 0.8s;
}
.nav-toggle-area {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  z-index: 105;
}
.nav-toggle:hover {
  opacity: 0.8;
}

.nav-toggle .nav-toggle-bar,
.nav-toggle .nav-toggle-bar::after,
.nav-toggle .nav-toggle-bar::before {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  background: white;
  content: "";
  height: 4px;
  width: 50px;
}

.nav-toggle .nav-toggle-bar {
  margin-top: 0;
}

.nav-toggle .nav-toggle-bar::after {
  margin-top: 0.8rem;
}

.nav-toggle .nav-toggle-bar::before {
  margin-top: -0.8rem;
}

.nav-toggle.expanded .nav-toggle-bar {
  background: transparent;
  width: 40px;
}

.nav-toggle.expanded .nav-toggle-bar::after,
.nav-toggle.expanded .nav-toggle-bar::before {
  background: white;
  width: 40px;
  margin-top: 0;
  left: 5px;
}

.nav-toggle.expanded .nav-toggle-bar::after {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.nav-toggle.expanded .nav-toggle-bar::before {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.burger-list {
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 30px 0;
}
</style>
