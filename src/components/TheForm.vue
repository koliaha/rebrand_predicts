<template>
  <section class="py-24">
    <div class="container">
      <h2 class="text-center text-[30px] leading-[39px] md:text-[40px] md:leading-[49px]">
        Оставьте заявку и мы свяжемся с вами
      </h2>
      <div class="mt-10 bg-white border py-10 px-10 mx-5 md:mx-0 md:px-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-9">
            <TheInput/>
            <TheInput/>
            <TheInput/>
            <TheInput/>
            <TheInput/>
        </div>
        <div class="flex justify-center mt-16">
            <button class="btn">Оставить заявку</button>
        </div>
        <p class="text-center mt-10 max-w-[630px] text-sm mx-auto">
            Нажимая кнопку «Оставить заявку», вы даёте свое <a href="" class="text-purple" target="_blank">согласие на обработку персональных данных</a>  и соглашаетесь с <a href="" target="_blank" class="text-purple">политикой обработки персональных данных</a>
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import TheInput from './TheInput.vue'
</script>
<style lang=""></style>
