<template>
  <section class="content" id="brand">
    <ContentHeader />
  </section>
  <section class="content-main">
    <div class="container">
      <div class="content-title-wrapper">
        <h1 class="text-title" id="tone">Tone of voice</h1>
        <div class="bg-circle circle-content circle-content-fist"></div>
      </div>
      <p class="text-prime mb-80 title__text">У Go Ahead смешанный ToV.</p>
      <div class="content-main-list mt-80">
        <div class="content-main-item">
          <img
            src="@/assets/img/content/micro.png"
            alt="micro"
            class="content-main-item__img"
          />
          <div class="content-main-item__text text-prime">
            <b>В статьях и на конференциях</b> мы эксперты. Мы пишем нейтральные
            тексты в корпоративном информационном стиле. Наши материалы помогают
            разобраться в сложных вопросах, а выступления и исследования полезны
            всему рынку digital.
          </div>
        </div>
        <div class="content-main-item">
          <img
            src="@/assets/img/content/hands.png"
            alt="micro"
            class="content-main-item__img"
          />
          <div class="content-main-item__text text-prime">
            <b>С сотрудниками</b> мы общаемся как с близкими друзьями, просто и
            без фамильярностей. Это помогает нам строить максимально теплые
            взаимоотношения, благодаря чему сотрудники всегда чувствуют себя «в
            своей тарелке», не боятся обращаться за помощью или советом, открыто
            высказывают свои идеи, делятся мнением.
          </div>
        </div>
        <div class="content-main-item">
          <img
            src="@/assets/img/content/mess.png"
            alt="micro"
            class="content-main-item__img"
          />
          <div class="content-main-item__text text-prime">
            <b>С клиентами и партнерами</b> общаемся на равных, но при этом
            дружелюбно и уважительно. Мы всегда за то, чтобы перейти на «ты» для
            более комфортной коммуникации, однако мы не против оставаться на
            «вы», так как уважаем желания каждого собеседника.
          </div>
        </div>
      </div>
      <div class="content-title-wrapper">
        <h1 class="text-title" id="audio">Аудитория</h1>
        <div class="bg-circle circle-content circle-audio-fist"></div>
      </div>
      <p class="text-prime mb-40 title__text content-main__text-auditory">
        Наша аудитория — это сотрудники других маркетинговых агентств, текущие и
        потенциальные клиенты, топ-менеджмент российских и зарубежных компаний,
        маркетологи, фрилансеры.
      </p>
      <h1 class="text-title mt-120 mb-40" id="units">Написание юнитов</h1>
      <div class="content-main-cards">
        <div class="content-main-card">
          <div class="card-top">
            <h2 class="content-card__title">Можно</h2>
            <p class="content-card__subtitle text-second">
              Название пишется в два слова с заглавных букв и через пробел — Go
              Ahead, Go Mobile, Go Influence.
            </p>
            <p class="content-card__subtitle text-second">
              Исключение: Go :nnection, Go NET и другие аббревиатуры, например,
              ASO.
            </p>
          </div>
          <div class="line"></div>
          <div class="card-bottom">
            <p class="card-bottom__item">
              <b>Go Ahead</b>— группа специализированных сервисов и технологий
              digital-маркетинга
            </p>
            <p class="card-bottom__item">
              <b>Go Mobile</b> — eдиная точка входа для бизнесов в мобильный
              маркетинг
            </p>
          </div>
        </div>
        <div class="content-main-card">
          <div class="card-top">
            <h2 class="content-card__title">Нельзя</h2>
            <p class="content-card__subtitle text-second">
              Не стоит использовать в названии кавычки, все заглавные буквы,
              игнорировать пробел и комбинировать написание любым способом.
            </p>
            <p class="content-card__subtitle text-second"><br /></p>
          </div>
          <div class="line"></div>
          <div class="card-bottom text-center">
            <div class="card-bottom__left text-second">
              <div class="line-through">"Go Ahead"</div>
              <div class="line-through">«Go Ahead»</div>
              <div class="line-through">Goahead</div>
            </div>
            <div class="card-bottom__right text-second">
              <div class="line-through">goAhead</div>
              <div class="line-through">GOAHEAD</div>
              <div class="line-through">GoAhead</div>
            </div>
          </div>
        </div>
        <div class="content-main-card">
          <div class="card-top">
            <h2 class="content-card__title">Соблюдение иерархии</h2>
            <p class="content-card__subtitle text-second">
              Мы всегда показываем впереди топ 5 юнитов (и желательно в порядке
              приоритизации):
            </p>
            <p class="content-card__subtitle text-second"><br /></p>
          </div>
          <div class="line"></div>
          <div class="card-bottom">
            <div class="card-bottom__left text-second">
              <div>1. Go Mobile</div>
              <div>2. Go NET</div>
              <div>3. Go Predicts</div>
            </div>
            <div class="card-bottom__right text-second">
              <div>4. Go Influence</div>
              <div>5. Go Design</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  name: "HomeView",
  components: {
    ContentHeader,
  },
};
</script>
