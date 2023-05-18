<template>
  <header class="bg-primary h-[700px] overflow-hidden relative">
    <div class="container relative h-full flex justify-center items-center">
      <div class="absolute bg-cover z-0 w-[277px] h-[277px] lg:w-[403px] lg:h-[403px] right-[-160px] md:right-[-225px] top-[0px] md:top-[130px] bg-[url('./assets/img/circles/6.svg')] "></div>
      <div class="absolute bg-cover z-0 w-[277px] h-[277px] lg:w-[403px] lg:h-[403px] -left-[125px] md:left-[-225px] -bottom-[90px] md:bottom-[30px] bg-[url('./assets/img/circles/6.svg')] "></div>
      <div class="text-white mb-4 relative">
        <h1 class="text-[50px] sm:text-[75px] lg:text-[100px] mb-5 text-center">Smart<br />Retargeting</h1>
        <div class="flex justify-center mt-20">
          <button class="btn" @click="scrollto('form')">Оставить заявку</button>
        </div>
      </div>
    </div>
  </header>
  <section class="py-16 lg:py-24">
    <div class="container">
      <div class="flex justify-between items-center flex-col lg:flex-row">
        <div class="max-w-[625px]">
          <h2 class="text-[27px] md:text-[40px] leading-[29px] md:leading-[49px] mb-5">
            Зачем нужен предиктивный ретаргетинг
          </h2>
          <p class="mb-10 max-w-[550px]">
            Предиктивный маркетинг помогает возвращать в приложение только
            нужных пользователей и не переплачивать за органических. Услуга
            Smart Retargeting от Go Predicts определяет, с какой вероятностью
            каждый юзер совершит необходимое бизнесу действие и как повысить эту
            вероятность.
          </p>
          <img
            class="max-w-[345px]  hidden lg:block"
            src="../assets/img/waves.svg"
            alt="waves"
          />
        </div>
        <div class="max-w-[526px]">
          <img class="w-full hidden lg:block" src="../assets/img/content5.png" alt="content1" />
          <img class="w-full lg:hidden" src="../assets/img/content5mob.png" alt="content1" />
        </div>
      </div>
    </div>
  </section>
  <section class="lg:border-x-0 lg:border overflow-hidden">
    <div class="container">
      <div class="flex justify-center items-stretch flex-col lg:flex-row">
        <div
          class="w-full lg:w-1/2 bg-primary text-white py-[60px] lg:py-[80px] lg:pb-[150px] lg:pr-[70px] relative"
        >
          <h2 class="text-[27px] md:text-[40px] leading-[29px] md:leading-[49px] mb-16">Пример</h2>
          <div class="lg:mb-32">
            <div class="flex items-start gap-x-5">
              <img src="../assets/img/count/smart1.svg" alt="count" />
              <p class="font-semibold">
                Пользователь устанавливает приложение и совершает в нем действия
              </p>
            </div>
            <div class="flex items-start gap-x-5 my-12">
              <img src="../assets/img/count/smart2.svg" alt="count" />
              <div class="flex flex-col">
                <p class="font-semibold">
                  Go Predicts в реальном времени анализирует поведение
                  пользователя и прогнозирует нужные метрики, как минимум:
                </p>
                <ul class="mt-3  pl-4">
                  <li class="dark">
                    Вероятность того, что пользователь больше не вернется в
                    приложение
                  </li>
                  <li class="dark my-4">
                    Вероятность того, что пользователь сам (органически)
                    совершит нужное действие
                  </li>
                  <li class="dark">
                    Вероятность того, что пользователь совершит нужное действие
                    если на него воздействовать ретаргетингом
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex items-start gap-x-5">
              <img src="../assets/img/count/smart3.svg" alt="count" />
              <p class="font-semibold">
                Go Predicts генерирует наиболее перспективные для ретаргетинга
                аудитории пользователей
              </p>
            </div>
          </div>
          <div
            class="h-full w-full bg-primary absolute -left-[100%] top-0"
          ></div>
          <div class="absolute w-[810px]  bottom-0 right-0 hidden lg:block">
            <img
            class="absolute h-[195px] bottom-0 right-0"
            src="../assets/img/bg2.svg"
            alt="waves"
          />
          </div>
          
          <div
            class="h-full w-full bg-primary absolute -right-[100%] top-0  lg:hidden"
          ></div>
        </div>
        <div class="w-full lg:pl-20 lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-end justify-center">
          <div class="max-w-[85%] lg:max-w-[465px] flex flex-col gap-4 relative">
            <img
              class="absolute top-14 -left-10"
              src="../assets/img/icons/arrow.svg"
              alt="arrow"
            />
            <div class="flex items-center justify-between bg-white border p-7">
              Пользователь давно не заходил в приложение
              <img
                class="w-[53px]"
                src="../assets/img/icons/person.png"
                alt=""
              />
            </div>
            <div class="flex items-center justify-center bg-white border p-12">
              <img
                class="w-[153px]"
                src="../assets/img/icons/logo.svg"
                alt=""
              />
            </div>
            <div class="flex items-center bg-white border p-7">
              Вероятность совершения нужного действия самостоятельно = 13%
              <br />
              <br />
              Вероятность совершения нужного действия в ответ на ретаргетинг =
              71%
              <br />
              <br />
              Вероятность покинуть приложение = 16%
            </div>
            <div class="flex items-center justify-between bg-white border p-7">
              Аудитория для ретаргетинга
              <img
                class="w-[103px]"
                src="../assets/img/icons/group.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16 lg:py-24 overflow-hidden relative">
    <div class="container">
      <div class="absolute bg-cover z-0 w-[361px] h-[361px] -right-[20px] top-[80px] bg-[url('./assets/img/circles/1.svg')] hidden md:block"></div>
      <div class="absolute bg-cover z-0 w-[322px] h-[322px] -left-[100px] -bottom-[100px] bg-[url('./assets/img/circles/5.svg')] hidden md:block"></div>
      <h2 class="text-center text-[27px] md:text-[40px] leading-[29px] md:leading-[49px] relative">
        Использование Smart Retargeting
      </h2>
      <swiper :slides-per-view="4"
          :space-between="20"
          :centered-slide="true"
          :navigation="{
            prevEl: '.slidePrev-btn',
            nextEl: '.slideNext-btn',
          }"
          :breakpoints="{
            320: {
              slidesPerView: 1.5,
            },
            720: {
              slidesPerView: 2.5,
            },
            950:{
              slidesPerView: 4,
            }
          }"
          :modules="[Navigation]"
          class="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 relative">
        <swiper-slide
          v-for="(item, id) in tech_list"
          :key="id"
          class="w-full bg-white border min-h-[278px]"
        >
          <div class="bg-primary text-white px-3 lg:px-7 py-5">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="px-5 lg:px-9 py-5">
            <ul class="" v-for="(it, index) in item.list" :key="index">
              <li>{{ it }}</li>
            </ul>
            <p class="mt-3 text-sm" v-if="item?.subtext">* {{ item?.subtext }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <section class="py-16 lg:py-24 bg-primary">
    <div class="container text-white">
        <h2 class="text-[27px] md:text-[40px] leading-[29px] md:leading-[49px] mb-5">Тарифы</h2>
        <div class="relative mt-16">
          <img
            class="absolute hidden md:block -top-16 right-0"
            src="../assets/img/waves1.svg"
            alt="waves1"
          />
          <img class="w-full hidden md:block" src="../assets/img/content6.svg" alt="content1" />
          <img class="w-full block md:hidden" src="../assets/img/content6mob.svg" alt="content1" />
        </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
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
    title: "До запуска",
    list: [
      "Настроенный трекинг событий в приложении",
      "Уже проведенные ретаргетинговые кампании",
    ],
  },
  {
    title: "Подготовительный этап",
    list: [
      "До 5 дней на обучение модели",
      "При необходимости – до месяца на сбор исторических данных",
    ],
  },
  {
    title: "Работа",
    list: ["До 24 часов на генерацию аудитории"],
  },
  {
    title: "Результат",
    list: ["Средний прирост CR по сравнению с обычными кампаниями = 30%*"],
    subtext: "без снижения органических показателей",
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
function scrollto(id) {
      const el = document.getElementById(id);
      el.scrollIntoView({ behavior: "smooth" });
    }
</script>
