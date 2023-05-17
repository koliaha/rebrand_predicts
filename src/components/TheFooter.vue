<template>
  <section class="footer bg-primary">
    <div class="container">
      <div class="py-[87px] text-white text-center">
        <div class="flex justify-center items-center gap-x-5">
          <a
            :href="item.url"
            class="bg-social w-[56px] h-[56px] border border-white rounded-full flex items-center justify-center"
            v-for="(item, index) in social_list"
            :key="index"
          >
            <img
              class="content-center"
              :src="imageUrl(item.icon)"
              :alt="item.icon"
            />
          </a>
        </div>
        <div class="mt-10">
          <a href="mailto:hi@gomobile.ru" class="social-link"
            ><span itemprop="email">hi@gomobile.ru</span></a
          >
        </div>
        <div class="mt-3">
          <a href="https://yandex.ru/maps/-/CCUK4Heu0B" target="_blank" class=""
            ><span itemprop="postalCode">115035</span>,
            <span itemprop="addressLocality">Москва</span>,
            <span itemprop="streetAddress">Садовническая набережная, 9</span></a
          >
        </div>
        <div class="flex justify-center mt-10">
          <a href="">
            <img src="../assets/img/logo.svg" alt="" />
          </a>
        </div>
        <p class="mt-10">
          Подробнее о других услугах
          <a target="_blank" href="https://goahead.ai/" class="text-purple">Go Ahead</a>
        </p>
        <p class="mt-10 leading-4">
          <a href="https://gomobile.ru/uploads/origin/files/1/politika_obrabotki_personalnyh_dannyh.pdf" target="_blank" class="text-sm text-gray"
            >Политика обработки персональных данных <br />
            (Политика конфиденциальности)</a
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const imageUrl = (icon) =>
  new URL(`/src/assets/img/social/${icon}.svg`, import.meta.url).href;
const social_list = [
  {
    icon: "in",
    url: "https://ru.linkedin.com/company/gomobilemarketing?original_referer=",
  },
  {
    icon: "yt",
    url: "https://www.youtube.com/channel/UCVC97CDdHPBes4yzmoT9J1g",
  },
  {
    icon: "tg",
    url: "https://t.me/goaheadgroup",
  },
  {
    icon: "vk",
    url: "https://vk.com/goahead.group",
  },
];
</script>
<style lang="scss">
.bg-social{
  transition: 0.4s ;
  &:hover{
    background: linear-gradient(270deg, #C873FF -88.02%, #000000 77.73%);
  }
}
</style>
