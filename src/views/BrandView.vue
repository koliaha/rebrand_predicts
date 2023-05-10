<template>
  <section class="brand" id="brand">
    <BrandHeader />
  </section>
  <section class="brand-sec brand-second">
    <div class="container">
      <p class="text-prime mb-40">Go Ahead — экосистема сервисов и технологий digital-маркетинга. <br />
        Группа компаний включает в себя:</p>
      <div class="brand-sec-list ">
        <div class="brand-sec-card brand-card-item brand-sec-card-logos" v-for="i in list" :key="i.id">
          <div class="brand-card__logo">
            <!-- <img :src="getImgUrl(i.id)" alt="logo" class="brand-card__logo-img"> -->
            <div class="brand-card__logo-title"><span :style="{ color: i.logo }">go</span>{{ i.title }}</div>
          </div>
          <p class="brand-sec-card__title text-second text-center">
            {{ i.subtitle }}
          </p>
        </div>
      </div>
      <p class="text-prime mb-40">Во всех визуальных материалах о Go Ahead в качестве компаний, входящих в группу,
        указываем
        вышеуказанные 5 брендов. К таким материалам могут относиться обложки для соцсетей, слайды презентаций,
        видеовизитка.</p>
      <p class="text-prime">Для маркетинговых задач мы можем ситуативно прибегать к упоминаниям других юнитов с
        приставкой «Go». Важно понимать, что полноценными компаниями они не являются и не фигурируют на визуальных
        материалах Go Ahead общего характера. К таким юнитам/продуктам можно отнести Go ASO, Go Consulting, Go Awards,
        Go :nnection и т д.</p>
    </div>
  </section>
  <section class="brand-third"  id="mission">
    <div class="brand-circle brand-circle-third">
      <img class="brand-circle-img" src="@/assets/img/bg/circle3.svg" alt="">
    </div>
    <div class="brand-circle brand-circle-forth">
      <img class="brand-circle-img" src="@/assets/img/bg/circle4.svg" alt="">
    </div>
    <div class="brand-circle brand-circle-fifth">
      <img class="brand-circle-img" src="@/assets/img/bg/circle5.svg" alt="">
    </div>
    <div class="container">
      <div class="brand-third__list">
        <div class="brand-third__item text-prime">Мы работаем на рынке мобильного маркетинга с 2016 года. За это время
          реализовали множество проектов для наших клиентов и партнеров, выиграли внушительное количество тендеров,
          поучаствовали в сотнях конференций и стали лидерами десятка отраслевых рейтингов.</div>
        <div class="brand-third__item text-prime flex-end">Мы с радостью рассказываем о нашем опыте и кейсах в блоге,
          анализируем текущую обстановку на рынке и не боимся делать прогнозы. Более того, у нас есть собственная
          команда стратегов, которая регулярно готовит исследования различных сегментов рынка.</div>
        <div class="brand-third__item text-prime">За 6 лет работы мы получили бесценный опыт, которым готовы делиться.
          Именно это служит основой нашей миссии, целей и долгосрочных планов.</div>
      </div>
    </div>
  </section>
  <section class="brand-sec brand-forth"  id="target">
    <!-- <div class="brand-circle brand-circle-sixth">
      <img class="brand-circle-img" src="@/assets/img/bg/circle6.svg" alt="">
    </div>
    <div class="brand-circle brand-circle-seventh">
      <img class="brand-circle-img" src="@/assets/img/bg/circle7.svg" alt="">
    </div> -->
    <div class="container brand-forth-content">
      <h1 class="text-title" id="mission">Наша миссия</h1>
      <p class="text-prime mb-40 brand-forth__text title__text">Помогать компаниям достигать своих целей и делать это
        лучше всех.</p>
      <h1 class="text-title mt-80"  id="price">Наши ценности</h1>
      <p class="text-prime mb-40 brand-forth__text title__text">Структура группы Go Ahead отражает наши ценности —
        свободу и развитие. Люди, которые
        приходят в компанию наемными сотрудниками, растят в ней свои направления, выделяют их в отдельные компании и
        получают долю бизнеса.</p>
      <p class="text-prime mb-40 brand-forth__text title__text">Основной принцип компании — человек должен заниматься
        тем, что он любит. Поэтому мы
        всегда открыты к инициативам со стороны сотрудников — даже если это открытие нового офиса или юнита.</p>
      <div class="brand-sec-list mt-80">
        <div class="bg-circle circle-brand circle-brand-fist" ></div>
        <div class="bg-circle circle-brand circle-brand-second" ></div>
        <div class="brand-sec-card" v-for="(i, index) in list_sec" :key="index">
          <div class="brand-card__logo">
            <div class="brand-card__logo-title">{{ i.title }}</div>
          </div>
          <p class="brand-sec-card__title text-second">
            {{ i.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BrandHeader from '@/components/BrandHeader.vue'
export default {
  name: 'HomeView',
  components: {
    BrandHeader,
  },
  data() {
    return {
      facebookColor: "#FC2E71",
      list: [{
        id: 1,
        title: 'mobile',
        subtitle: 'Go Mobile — агентство digital-маркетинга',
        logo: '#EF5600'
      },
      {
        id: 2,
        title: 'net',
        subtitle: 'Go NET — programmatic-платформа',
        logo: '#FC2E71'
      },
      {
        id: 3,
        title: 'predicts',
        subtitle: 'Go Predicts — технология привлечения трафика с оптимизацией на предиктивные события',
        logo: '#C873FF'
      },
      {
        id: 4,
        title: 'influence',
        subtitle: 'Go Influence — агентство influencer-маркетинга полного цикла',
        logo: '#FFA3EB'
      },
      {
        id: 5,
        title: 'design',
        subtitle: 'Go Design — дизайн-студия со специализацией на креативах для performance-маркетинга',
        logo: '#0053F1'
      }],
      list_sec: [
        {
          title: 'Дело',
          subtitle: 'Мы не работаем от звонка до звонка или строго с 11:00 до 20:00. Мы занимаемся делом, которое наши сотрудники искренне любят. Горящие глаза и желание сделать как можно лучше — вот залог успеха.',
        },
        {
          title: 'Развитие',
          subtitle: 'Мы растем с высокой скоростью и помогаем нашим сотрудникам расти вместе с компанией. Следим за трендами, активно обучаемся и обучаем всему новому.',
        },
        {
          title: 'Экспертиза',
          subtitle: 'Мы наращиваем опыт в разных сферах и не боимся браться за новые проекты. Мы можем реализовать то, что до нас еще не делал никто, и делаем это хорошо.',
        },
        {
          title: 'Люди',
          subtitle: 'Мы очень ценим наших сотрудников, помогаем им расти и прислушиваемся к каждому, ведь от них во многом зависит и наша эффективность как группы компаний. Мы заботимся о людях и результате.',
        },
        {
          title: 'Авантюризм',
          subtitle: 'В команде Go Ahead живет дух авантюризма. Мы не боимся больших и непонятных задач, всегда хотим больше новых проектов и невозможных челленджей, нам всегда интересно, что будет дальше. Нас не пугают hard KPI, и мы очень быстро учимся.',
        },
        {
          title: 'Свобода',
          subtitle: 'Мы можем реализовывать любые проекты, ведь всегда есть поддержка от команды.',
        },
      ]
    }
  },
  methods: {
    getImgUrl(id) {
      const images = require.context('@/assets/img/logos/', false, /\.svg$/)
      return images('./' + id + ".svg")
    }
  },
}
</script>
