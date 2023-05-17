<template>
  <div class="bg-primary text-white py-5 w-full" v-if="false">
    <div class="container flex justify-between px-5 md:px-0 relative">
      <a href="">
        <img src="../assets/img/logo.svg" alt="" />
      </a>
      <div class="hidden md:flex items-center gap-x-10">
        <router-link to="/">Smart Events</router-link>
        <router-link to="/smart">Smart Retargeting</router-link>
      </div>
    </div>
    <nav class="nav dropdown-list block md:hidden">
      <div class="nav-wrapper">
        <div
          class="nav-toggle"
          :class="{ expanded: navOpen }"
          @click="navOpen = !navOpen"
        >
          <div class="nav-toggle-area"></div>
          <div class="nav-toggle-bar"></div>
        </div>
        <a href="/test">
          <h3 class="burger-title">DSP Media Programmatic</h3>
        </a>
        <div class="burger-list text-prime mt-20">
          <a href="#service">Клиентский сервис</a>
          <a href="#form">Оставить заявку</a>
        </div>
        <a href="/test/ssp">
          <h3 class="burger-title mt-60">SSP</h3>
        </a>
        <div class="burger-list text-prime mt-20">
          <a href="/test/ssp/#advantages">Преимущества</a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { ref } from "vue";
const navOpen = ref(false);
</script>
<style>
.nav {
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  color: #ffffff;
  cursor: pointer;
  min-height: 540px;
  max-height: 100vh;
  /* right: 0;
  top: 0; */
  right: 5%;
  top: 5%;
  position: fixed;
  max-width: 625px;
  width: 55%;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-top: 70px;
  z-index: 10000;
}
.nav-wrapper {
  position: relative;
}
.nav.expanded {
  right: 0;
  top: 0;
  z-index: 10000;
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
  top: 3rem;
  width: 70px;
  z-index: 102;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
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
  width: 70%;
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
}

.nav-toggle.expanded .nav-toggle-bar::after,
.nav-toggle.expanded .nav-toggle-bar::before {
  background: white;
  margin-top: 0;
  left: 16%;
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
  display: flex;
  flex-direction: column;
  height: 110px;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  gap: 20px;
}
.burger-list a {
  color: white;
}
.burger-title {
  font-size: 18px;
  line-height: 22px;
  color: #fc2e71;
}
</style>
