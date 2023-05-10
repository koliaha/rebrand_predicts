<template>
  <section class="py-10 pt-12">
    <div class="container">
      <div class="text-white grid grid-cols-2 gap-5">
        <div
          v-for="(item, id) in smart_list"
          :key="id"
          class="w-full bg-primary py-11 px-16"
        >
          <h2 class="text-[45px]">{{ item.title }}</h2>
          <p>{{ item.subtitle }}</p>
          <div class="flex mt-7">
            <a href="" class="btn btn-light">Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-24">
    <div class="container">
      <h2 class="text-center text-[40px] leading-[49px]">
        Технология Go Predicts органично встраивается в любую маркетинговую
        стратегию
      </h2>
      <div class="grid grid-cols-4 gap-5 mt-10 justify-items-center">
        <div
          v-for="(item, id) in tech_list"
          :key="id"
          class="w-full bg-white border border-black py-3 px-7"
        >
          <div class="mx-auto w-[80px] h-[80px] flex items-center">
            <img
              class="mx-auto"
              :src="imageUrl('tech', item.icon)"
              :alt="item.icon"
            />
          </div>

          <p class="">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-24">
    <div class="container">
      <h2 class="text-center text-[40px] leading-[49px]">
        Возможности системы
      </h2>
      <div class="grid grid-cols-3 gap-5 mt-10">
        <div
          v-for="(item, id) in system_list"
          :key="id"
          class="flex items-start gap-x-4 max-w-[350px]"
        >
          <img
            class="mx-auto w-[55px]"
            :src="imageUrl('count', item.count)"
            :alt="item.count"
          />
          <div>
            <h3 class="mb-[7px]">{{ item.title }}</h3>
            <p class="">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-24">
    <div class="container">
      <h2 class="text-center text-[40px] leading-[49px]">
        Кейс
      </h2>
      <div class="grid grid-cols-2 mt-10 border border-black">
        <div
          class="bg-primary text-white py-[60px] px-[100px]"
        >
            <h2 class="mb-[7px] font-normal text-[28px]">Domino’s Pizza<br/>& Go Predicts</h2>
            <p class="mt-4 mb-8">Благодаря оптимизации кампании по Smart Events в Google и Facebook* снизили показатели CPO и ДРР. За период с октября 2021 по февраль 2022 увеличили бюджет предиктивных кампаний в 4 раза.</p>
            <p class="text-[10px]">*соцсеть признана экстремистской в РФ</p>
        </div>
        <div
          class="bg-white py-[60px] px-[100px]"
        >
            <h2 class="mb-[7px] text-[28px]">Задачи</h2>
            <ul class="list-disc pl-6 mt-3">
              <li class="mb-2">Привлечь эффективный трафик в приложение клиента</li>
              <li class="mb-2">Снизить показатель ДРР</li>
              <li class="mb-2">Оптимизировать СРА за совершенный заказ</li>
              <li class="mb-2">Увеличить LTV привлекаемых пользователей</li>
            </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="py-24">
    <div class="container">
      <h2 class="text-center text-[40px] leading-[49px]">
        Go Predicts подходит для любых компаний, которые отвечают следующим
        критериям
      </h2>
      <div class="flex justify-center gap-5 mt-10">
        <div
          v-for="(item, id) in predict_list"
          :key="id"
          class="bg-primary text-white py-7 px-16 max-w-[488px]"
        >
            <h2 class="mb-[7px] text-center text-[28px]">{{ item.title }}</h2>
            <ul class="list-disc">
              <li v-for="(i,index) in item.list" class="mb-2" :key="index">
              {{ i }}</li>
            </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const imageUrl = (folder, icon) =>
  new URL(`/src/assets/img/${folder}/${icon}.svg`, import.meta.url).href;
const smart_list = [
  {
    title: "Smart Events",
    subtitle:
      "Услуга, которая оптимизирует рекламные кампании по предиктивным событиям",
    link: "",
    theme: "",
  },
  {
    title: "Smart Retargeting",
    subtitle:
      "Услуга, которая сортирует пользователей на несколько сегментов и оставляет только тех, кто совершит покупку после просмотра ретаргетированной рекламы",
    link: "",
    theme: "",
  },
];
const tech_list = [
  {
    icon: "traffic",
    text: "Собирает кастомное событие и отправляет его в аналитику вашего мобильного приложения",
  },
  {
    icon: "cursor",
    text: "No code настройка – просто выберите ключевое событие для вашего бизнеса",
  },
  {
    icon: "audience",
    text: "Позволяет сегментировать аудиторию и вести рекламные кампании на нужный сегмент",
  },
  {
    icon: "top",
    text: "Самостоятельно определяет, какой сегмент аудитории наиболее ценен для бизнеса",
  },
  {
    icon: "support",
    text: "Понятный интерфейс с обучающими видео, поддержка и консультации бесплатно",
  },
  {
    icon: "development",
    text: "Интегрируется с каналами с оптимизацией на событие (+30% прирост целевой метрики кампании)",
  },
  {
    icon: "mechanics",
    text: "Оптимизация каналов, в которых недоступна автооптимизация на событие",
  },
];
const system_list = [
  {
    count: 1,
    title: "Привлечение реально прибыльных клиентов",
    text: "даже для бизнесов с длительным циклом окупаемости",
  },
  {
    count: 2,
    title: "Покупка премиальных пользователей",
    text: "из расчета будущей окупаемости привлеченных таким образом клиентов",
  },
  {
    count: 3,
    title: "Упрощение РК подрядчиков",
    text: "например, использование pCPA вместо метрик, не связанных с целевым событием напрямую (Install Rate, Retention Rate)",
  },
  {
    count: 4,
    title: "Возможность игнорировать некоторые виды фрода",
    text: "не оплачивая неокупаемых пользователей/ботов",
  },
  {
    count: 5,
    title: "Точная оценка новых каналов привлечения пользователей",
    text: "не только оцениваются чисто первичные характеристики (CPI, CR, CPA), но и строится прогноз окупаемости привлеченных пользователей",
  },
];
const predict_list = [
  {
    title: "Бизнес",
    list: [
      "Устойчивая экономическая модель для расчета окупаемости",
      "Минимум 10 000 пользователей объем исторических данных",
      "Среди них не менее 30% целевых пользователей. Когда целью является pLTV, подразумеваются пользователи, которые достаточно часто совершают покупки",
    ],
  },
  {
    title: "Технологии",
    list: [
      "Одна из распространенных трекинговых систем, например, в случае мобильных приложений: Adjust, AppMetrica, AppsFlyer",
      "Настроенный трекинг пользовательских событий в сервисе рекламодателя",
      "Настроенный трекинг события монетизации",
      "Возможность предоставления API-доступа к данным трекинговой системы",
    ],
  },
];
</script>
