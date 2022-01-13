
<template>
  <section class="page-base">
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
      <form ref="form" @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="お名前"
          rules="required|max:30"
        >
          <v-text-field
            v-model="name"
            :counter="30"
            :error-messages="errors"
            label="Name"
            required
            type="text"
            name="user_name"
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="メールアドレス"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
            type="email"
            name="user_email"
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="お問い合わせ内容"
          rules="required|max:2000"
        >
          <v-textarea
            v-model="message"
            name="message"
            label="Message"
            :counter="2000"
            :error-messages="errors"
            required
            class="mb10"
          ></v-textarea>
        </validation-provider>

        <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid"
        >
          送信
        </v-btn>
        <v-btn @click="clear">
          クリア
        </v-btn>
      </form>
    </validation-observer>
  </section>
</template>
<script>
import emailjs from 'emailjs-com'
import { required, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')
  extend('required', {
    ...required,
    message: '{_field_} は入力必須です',
  })
  extend('max', {
    ...max,
    message: '{_field_} は {length}文字 以下で入力してください',
  })
  extend('email', {
    ...email,
    message: 'メールアドレス形式で入力してください',
  })

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data () {
    return {
      name: '',
      email: '',
      message: '',
    }
  },    
  methods: {
    submit () {
      this.$refs.observer.validate()
      const serviceId = process.env.VUE_APP_EMAILJS_SERVICE_ID
      const templateId = process.env.VUE_APP_EMAILJS_TEMPLATE_ID
      const userId = process.env.VUE_APP_EMAILJS_USER_ID
      emailjs.sendForm(serviceId, templateId, this.$refs.form, userId)
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    },
    clear () {
      this.name = ''
      this.email = ''
      this.message = ''
      this.$refs.observer.reset()
    },
  }
}
</script>
<style lang="scss" scoped>
.contact {
  padding-bottom: 0px;
}
</style>