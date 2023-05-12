<template>
  <header class="bg-primary h-[700px]">
    <div class="container relative h-full flex items-center">
      <img
        src="../assets/img/header.png"
        alt=""
        class="absolute bottom-0 max-w-[700px] -right-10"
      />
      <div class="text-white mb-4">
        <h1 class="text-[100px] mb-5">Go Predicts</h1>
        <p class="text-2xl mb-[50px] max-w-[453px]">
          Это услуга привлечения трафика с оптимизацией на предиктивные события
        </p>
        <div class="flex">
          <a href="" class="btn">Оставить заявку</a>
        </div>
      </div>
    </div>
  </header>
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
      <div class="flex justify-between">
        <div class="max-w-[470px]">
          <h2 class="text-[40px] leading-[49px] mb-5">
            Зачем нужна закупка по предиктивным событиям
          </h2>
          <p class="mb-10">
            Инвестиции в привлечение пользователя в большинстве случаев не
            окупаются быстро
          </p>
          <img src="../assets/img/waves.svg" alt="waves" />
        </div>
        <div class="max-w-[600px]">
          <img class="w-full" src="../assets/img/content1.svg" alt="content1" />
        </div>
      </div>
    </div>
  </section>
  <section class="py-24">
    <div class="container">
      <div class="flex justify-center items-stretch h-[670px]">
        <div class="w-1/2 bg-primary text-white p-[100px] relative">
          <h2 class="text-[40px] leading-[49px] mb-5">
            Решение: pLTV — это оптимизация на предиктивные события
          </h2>
          <p class="mb-10">
            Рекламодатель сразу видит и оплачивает клиентов с максимальным
            потенциалом за весь срок их жизни, а не тех, кто просто сделал одну
            покупку
          </p>
          <div
            class="h-full w-full bg-primary absolute -left-[100%] top-0"
          ></div>
          <img
            class="absolute bottom-0 left-0"
            src="../assets/img/bg2.svg"
            alt="waves"
          />
        </div>
        <div class="w-1/2 flex flex-col items-center justify-center">
          <div class="max-w-[465px]">
            <h3 class="text-center mb-5">Посмотрим на примере:</h3>
            <img
              class="w-full"
              src="../assets/img/content2.svg"
              alt="content1"
            />
            <img
              class="w-full mt-4"
              src="../assets/img/content3.svg"
              alt="content1"
            />
            <p class="mt-10">
              Мы сознательно платим больше денег за Катю, зная, что ее LTV будет
              больше и <b>она принесет нам большую прибыль</b>
            </p>
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
  <section class="py-24 bg-primary">
    <div class="container text-white">
      <h2 class="text-center text-[40px] leading-[49px]">Self-service</h2>
      <div class="flex justify-center gap-x-3 mt-20">
        <div class="max-w-[487px]">
          <img src="../assets/img/self/1.png" alt="" />
          <div class="h-[146px] flex items-center justify-center">
            <img src="../assets/img/self/waves.svg" alt="" />
          </div>
        </div>
        <div class="max-w-[487px]">
          <div class="h-[146px] flex items-center justify-center">
            <img src="../assets/img/self/waves.svg" alt="" />
          </div>
          <img src="../assets/img/self/2.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section class="py-24">
    <div class="container">
      <h2 class="text-center text-[40px] leading-[49px]">Кейс</h2>
      <div class="grid grid-cols-2 mt-10 border border-black">
        <div class="bg-primary text-white py-[60px] px-[100px]">
          <h2 class="mb-[7px] font-normal text-[28px]">
            Domino’s Pizza<br />& Go Predicts
          </h2>
          <p class="mt-4 mb-8">
            Благодаря оптимизации кампании по Smart Events в Google и Facebook*
            снизили показатели CPO и ДРР. За период с октября 2021 по февраль
            2022 увеличили бюджет предиктивных кампаний в 4 раза.
          </p>
          <p class="text-[10px]">*соцсеть признана экстремистской в РФ</p>
        </div>
        <div class="bg-white py-[60px] px-[100px]">
          <h2 class="mb-[7px] text-[28px]">Задачи</h2>
          <ul class="list-disc pl-6 mt-3">
            <li class="mb-2">
              Привлечь эффективный трафик в приложение клиента
            </li>
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
      <h3 class="text-center text-[28px] leading-[34px]">Что делали</h3>
      <div class="flex justify-between gap-3 flex-wrap mt-10">
        <div
          v-for="(item, index) in slide_list"
          :key="index"
          class="max-w-[387px] w-full h-[381px] bg-white border border-primary"
        >
          <div class="bg-primary h-[205px] flex items-center justify-center">
            <img
              class="h-[90%]"
              :src="imageUrl('slides', item.img, 'png')"
              alt="slides"
            />
          </div>
          <div class="flex items-start gap-x-4 max-w-[350px] px-5 py-8">
            <img
              class="mx-auto w-[55px]"
              :src="imageUrl('count', item.count)"
              :alt="item.count"
            />
            <div>
              <p class="">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-gradient text-center border max-w-[996px] w-full h-[164px] p-5 flex items-center mx-auto mt-10"
      >
        <p class="font-semibold max-w-[684px] w-full mx-auto">
          С октября работа по предиктивной модели стала приносить первые
          положительные результаты. Мы определили оптимальный Smart Event и
          начали этап масштабирования эффективного трафика
        </p>
      </div>
      <div class="bg-primary text-white mt-20 py-14 px-24">
        <h3 class="text-center text-[28px] leading-[34px]">Результаты</h3>
        <div class="grid grid-cols-4 gap-5 mt-10">
          <div class="max-w-[200px]">
            <div class="h-[45px] flex items-center">
              <svg
                width="35"
                height="25"
                viewBox="0 0 35 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3399 19.2391L2.49099 8.39019L0 10.8812L13.3399 24.2211L35 2.56106L32.509 0.0700684L13.3399 19.2391Z"
                  fill="white"
                />
              </svg>
            </div>
            <p>Оптимизировали кампании с использованием Smart Event</p>
          </div>
          <div class="max-w-[200px]">
            <h3 class="text-[30px]">-25%</h3>
            <p>
              ДРР за период с октября 2021 по февраль 2022 по сравнению с
              обычными РК
            </p>
          </div>
          <div class="max-w-[200px]">
            <h3 class="text-[30px]">-23%</h3>
            <p>показатель СРО</p>
          </div>
          <div class="max-w-[200px]">
            <h3 class="text-[30px]">x4</h3>
            <p>бюджет предиктивных кампаний с октября по февраль</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-24 bg-primary">
    <div class="container text-white">
      <div class="flex justify-between items-center">
        <div class="max-w-[387px]">
          <h2 class="text-[40px] leading-[49px] mb-5">Тарифы</h2>
          <p class="mb-10">
            Тариф зависит от количества предиктивных событий и приложений и
            может меняться в зависимости от целей.
            <br />
            <br />
            Если вам не подходит ни один из представленных тарифов, мы можем
            рассчитать стоимость индивидуально.
          </p>
          <div class="flex">
            <a href="" class="btn btn_light">Оставить заявку</a>
          </div>
        </div>
        <div class="max-w-[690px] relative">
          <img
            class="absolute -top-16 -right-20"
            src="../assets/img/bg3.svg"
            alt="content1"
          />
          <img class="w-full" src="../assets/img/content4.svg" alt="content1" />
          <img
            class="absolute -bottom-16 left-0"
            src="../assets/img/bg3.svg"
            alt="content1"
          />
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
            <li v-for="(i, index) in item.list" class="mb-2" :key="index">
              {{ i }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const imageUrl = (folder, icon, format = "svg") =>
  new URL(`/src/assets/img/${folder}/${icon}.${format}`, import.meta.url).href;
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

const slide_list = [
  {
    img: "1",
    text: "Накопили 30 000 установок, среди них — не менее 40% с конверсией",
    count: "1",
  },
  {
    img: "2",
    text: "Составили для клиента рекомендации по непромеченным событиям на карте событий",
    count: "2",
  },
  {
    img: "3",
    text: "Сформировали дерево поведения пользователей",
    count: "3",
  },
  {
    img: "4",
    text: "Собрали дополнительные сырые данные по Push API и получили ключ отправки s2s-событий",
    count: "4",
  },
  {
    img: "5",
    text: "Обучили модель и разбили пользователей на кластеры по LTV",
    count: "5",
  },
  {
    img: "6",
    text: "Запустили отправку Smart Events. В июле создали тестовую рекламную кампанию с оптимизацией по предиктивному событию",
    count: "6",
  },
  {
    img: "7",
    text: "Обновили настройки и обогатили Smart Event дополнительной информацией",
    count: "7",
  },
];
</script>
