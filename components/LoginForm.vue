<template>
      <v-card class="login-form">
        <header class="login-form__header">
          <img src="~/assets/padlock.png"/>
        </header>
        <body class="login-form__body">
          <v-text-field
            label="Login"
            type="text"
            :value="userName"
          />
          <v-text-field
            label="Password"
            type="password"
            :value="password"
          />
          <v-btn class="global-button__primary" @click="postLogin">
            login
          </v-btn>
        </body>
    </v-card>
</template>

<script>

import AuthService from '../api/authService';
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  props: {
    toggleModal: {
      type: Function,
      default: null,
    },
    isLoginPage: {
      type: Boolean,
      default: false
    }
  },
  middleware: 'notAuthenticated',
  data: () => ({
    userName: 'StormTest',
    password: '-!NmmQR2pbmJSQ7'
  }),
  methods: {
    redirectToLandingPage() {
        this.$router.push('/');
    },
    async postLogin() {
      const { userName, password } = this
      const response = await AuthService.login({ userName, password }).catch(console.error)
      if (response) {
        this.$store.commit('setAuth', response) // mutating to store for client rendering
        Cookie.set('auth', response.auth_token) // saving token in cookie for server rendering
        this.toggleModal && this.toggleModal()
        if (this.isLoginPage) this.redirectToLandingPage();
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  margin: 20px auto;
  align-items: center;
  padding: 35px;
  max-width: 370px;

  .login-form__header {
    img {
      width: 100%;
    }
  }
  .login-form__body {
    margin: 20px 0;
  }

}
</style>

