<template>
  <section class="py-16 lg:py-24 overflow-hidden relative" id="form">
    <div class="container">
      <div
        class="absolute bg-cover z-0 w-[327px] h-[327px] lg:w-[427px] lg:h-[427px] -right-[100px] top-[130px] bg-[url('./assets/img/circles/1.svg')] hidden md:block"
      ></div>
      <div
        class="absolute bg-cover z-0 w-[193px] h-[193px] -left-[100px] bottom-[100px] bg-[url('./assets/img/circles/2.svg')] hidden md:block"
      ></div>
      <h2
        class="text-center text-[30px] leading-[39px] md:text-[40px] md:leading-[49px] relative"
      >
        Оставьте заявку и мы свяжемся с вами
      </h2>
      <div
        class="mt-10 bg-white border py-10 px-10 mx-5 md:mx-0 md:px-20 relative"
      >
        <form action="" @submit.prevent="onSubmit">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-9">
            <input
              type="text"
              placeholder="Имя*"
              class="inputField max-w-[323px] px-3 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Компания*"
              class="inputField max-w-[323px] px-3 py-2 outline-none"
            />
              <Field name="email" v-slot="{ field, value, errorMessage }">
                <div class="relative">
                  <input type="email" placeholder="Почта*"  v-bind="field" class="inputField max-w-[323px] px-3 py-2 outline-none" :class="errorMessage && '!border-error'"/>
                  <p class="absolute -bottom-4 left-0 text-error text-[10px]">{{ errorMessage }}</p>
                </div>
                </Field>
            <div>
              <input
                id="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__*"
                v-mask="'+7 (###) ### ## ##'"
                v-model="phone"
                class="inputField max-w-[323px] px-3 py-2 outline-none"
              />
              <p v-if="phoneError">{{ phoneError }}</p>
            </div>
            <input
              type="text"
              placeholder="Услуга"
              class="inputField max-w-[323px] px-3 py-2 outline-none"
            />
          </div>
          <div class="flex justify-center mt-16">
            <button class="btn" type="submit">Оставить заявку</button>
          </div>
          <p class="text-center mt-10 max-w-[630px] text-sm mx-auto">
            Нажимая кнопку «Оставить заявку», вы даёте свое
            <a
              href="https://gomobile.ru/promo/presentations/Soglasie_na_obrabotku_personalnyh_dannyh_gopredicts.io.pdf"
              class="text-purple"
              target="_blank"
              >согласие на обработку персональных данных</a
            >
            и соглашаетесь с
            <a
              href="https://gomobile.ru/uploads/origin/files/1/politika_obrabotki_personalnyh_dannyh.pdf"
              target="_blank"
              class="text-purple"
              >политикой обработки персональных данных</a
            >
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
<script >
import { Field, useForm } from 'vee-validate'
import * as yup from 'yup'

export default {
  components: {
    Field,
  },
  setup() {
    // Create a schema
    const schema = yup.object({
      email: yup.string().required('Пожалуйста введите почту').email('Введите корректную почту')
    })

    // Create form context
    const form = useForm({
      validationSchema: schema
    })

    // Submit handler
    const onSubmit = form.handleSubmit(values => {
      console.log('Form has been submitted!', values)
    })

    return {
      onSubmit,
      ...form
    }
  }
}
</script>
<style lang="scss">
.inputField {
  width: 100%;
  border: 1px solid white;
  border-bottom-color: #262626;
  &:focus {
    border: 1px solid #262626;
  }
}
</style>
