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
            <Field name="name" v-slot="{ field, value, errorMessage }">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Имя*"
                  v-bind="field"
                  class="inputField max-w-[323px] px-3 py-2 outline-none"
                  :class="errorMessage && '!border-error'"
                />
                <p class="absolute -bottom-4 left-0 text-error text-[10px]">
                  {{ errorMessage }}
                </p>
              </div>
            </Field>
            <Field name="companyName" v-slot="{ field, value, errorMessage }">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Компания*"
                  v-bind="field"
                  class="inputField max-w-[323px] px-3 py-2 outline-none"
                  :class="errorMessage && '!border-error'"
                />
                <p class="absolute -bottom-4 left-0 text-error text-[10px]">
                  {{ errorMessage }}
                </p>
              </div>
            </Field>

            <Field name="email" v-slot="{ field, value, errorMessage }">
              <div class="relative">
                <input
                  type="email"
                  placeholder="Почта*"
                  v-bind="field"
                  class="inputField max-w-[323px] px-3 py-2 outline-none"
                  :class="errorMessage && '!border-error'"
                />
                <p class="absolute -bottom-4 left-0 text-error text-[10px]">
                  {{ errorMessage }}
                </p>
              </div>
            </Field>
            <Field name="phoneNumber" v-slot="{ field, value, errorMessage }">
              <div class="relative">
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__ *"
                  v-bind="field"
                  minlength="11"
                  maxlength="11"
                  class="inputField max-w-[323px] px-3 py-2 outline-none"
                  :class="errorMessage && '!border-error'"
                />
                <p class="absolute -bottom-4 left-0 text-error text-[10px]">
                  {{ errorMessage }}
                </p>
              </div>
            </Field>
            <Field name="services" v-slot="{ field, value, errorMessage }">
              <div class="relative">
                <input
                  type="tel"
                  placeholder="Услуга"
                  v-bind="field"
                  class="inputField max-w-[323px] px-3 py-2 outline-none"
                  :class="errorMessage && '!border-error'"
                />
                <p class="absolute -bottom-4 left-0 text-error text-[10px]">
                  {{ errorMessage }}
                </p>
              </div>
            </Field>
          </div>
          <div class="flex justify-center mt-16">
            <button class="btn" type="submit" :disabled="isLoading">
              <span v-if="isLoading">Подождите</span>
              <span v-else>Оставить заявку</span>
            </button>
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
        <transition name="modal" v-if="showModal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container">
                <div class="text-center text-[28px]">
                  Заявка успешно<br />отправлена
                </div>
                <button
                  class="modal-default-button absolute right-8 top-8"
                  @click="showModal = false"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L25 25" stroke="black" />
                    <path d="M1 25L25 0.999998" stroke="black" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
import { Field, useForm } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
export default {
  components: {
    Field,
  },
  setup() {
    const showModal = ref(false);
    // Create a schema
    const isLoading = ref(false);
    const schema = yup.object({
      email: yup
        .string()
        .required("Пожалуйста введите почту")
        .email("Введите корректную почту"),
      companyName: yup
        .string()
        .required("Пожалуйста введите название компании"),
      name: yup
        .string()
        .required("Пожалуйста введите имя")
        .matches(
          /^[a-zA-Zа-яА-Я\s]*$/,
          "Имя может содержать только буквы и пробелы"
        ),
      phoneNumber: yup
        .string()
        .required("Пожалуйста введите номер телефона")
        .length(11, "Например: 89999999999")
        .matches(/^\d+$/, "Номер телефона должен содержать только цифры"),
      services: yup.string(),
    });
    const form = useForm({
      validationSchema: schema,
      initialValues: {
        email: "",
        name: "",
        companyName: "",
        phoneNumber: "",
        services: "",
      },
    });
    const onSubmit = form.handleSubmit((values) => {
      console.log("Form has been submitted!", values);
      isLoading.value = true;
      const headers = {
        accept: "application/json",
        "Content-Type": "application/json",
      };
      try {
        axios
          .post(
            "https://form.api.gotechnology.io/api/v1/record/9f443561-be92-4182-b106-ce5626cbb092",
            JSON.stringify(
              {
                payload: values,
                is_test: false,
              },
              headers
            )
          )
          .then((response) => {
            if (response.status != 400) {
              showModal.value = true;
              setTimeout(() => {
                showModal.value = false;
              }, 1500);
            }
          });
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    });

    return {
      onSubmit,
      form,
      showModal,
      isLoading,
    };
  },
};
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  max-width: 570px;
  height: 325px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(270deg, #c873ff -122.45%, #ffffff 72.33%);
  border: 1px solid #262626;
  text-align: center;
  margin: 0px auto;
  padding: 20px 30px;
  transition: all 0.3s ease;
}
@media screen and (max-width: 600px) {
  .modal-container {
    max-width: 80%;
  }
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
