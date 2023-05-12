<template>
  <header class="bg-primary h-[700px]">
    <div class="container relative h-full flex justify-center items-center">
      <div class="text-white mb-4">
        <h1 class="text-[100px] mb-5 text-center">Smart<br />Retargeting</h1>
        <div class="flex justify-center mt-20">
          <a href="" class="btn">Оставить заявку</a>
        </div>
      </div>
    </div>
  </header>
  <section class="py-24">
    <div class="container">
      <div class="flex justify-between">
        <div class="max-w-[625px]">
          <h2 class="text-[40px] leading-[49px] mb-5">
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
            class="max-w-[345px]"
            src="../assets/img/waves.svg"
            alt="waves"
          />
        </div>
        <div class="max-w-[450px]">
          <img class="w-full" src="../assets/img/content5.png" alt="content1" />
        </div>
      </div>
    </div>
  </section>
  <section class="border">
    <div class="container">
      <div class="flex justify-center items-stretch">
        <div
          class="w-1/2 bg-primary text-white py-[80px] pb-[150px] pr-[70px] relative"
        >
          <h2 class="text-[40px] leading-[49px] mb-16">Пример</h2>
          <div class="mb-20">
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
                <ul class="mt-3 list-disc pl-4">
                  <li>
                    Вероятность того, что пользователь больше не вернется в
                    приложение
                  </li>
                  <li class="my-4">
                    Вероятность того, что пользователь сам (органически)
                    совершит нужное действие
                  </li>
                  <li>
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
          <img
            class="absolute bottom-0 left-0"
            src="../assets/img/bg2.svg"
            alt="waves"
          />
        </div>
        <div class="w-1/2 flex flex-col items-end justify-center">
          <div class="max-w-[465px] flex flex-col gap-4 relative">
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
  <section class="py-24">
    <div class="container">
      <h2 class="text-center text-[40px] leading-[49px]">
        Использование Smart Retargeting
      </h2>
      <div class="grid grid-cols-4 gap-5 mt-10">
        <div
          v-for="(item, id) in tech_list"
          :key="id"
          class="w-full bg-white border"
        >
          <div class="bg-primary text-white px-7 py-5">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="px-9 py-5">
            <ul class="list-disc" v-for="(it, index) in item.list" :key="index">
              <li>{{ it }}</li>
            </ul>
            <p class="mt-3 text-sm">* {{ item?.subtext }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-24 bg-primary">
    <div class="container text-white">
        <h2 class="text-[40px] leading-[49px] mb-5">Тарифы</h2>
        <div class="relative mt-16">
          <img
            class="absolute -top-16 right-0"
            src="../assets/img/waves1.svg"
            alt="waves1"
          />
          <img class="w-full" src="../assets/img/content4.svg" alt="content1" />
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
</script>
