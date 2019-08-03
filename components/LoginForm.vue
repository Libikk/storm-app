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
    toggleModal: Function
  },
  middleware: 'notAuthenticated',
  data: () => ({
    userName: 'StormTest',
    password: '-!NmmQR2pbmJSQ7'
  }),
  methods: {
    postLogin() {
      const { userName, password } = this
      AuthService.login({ userName, password }).then(res => {
        this.$store.commit('setAuth', res) // mutating to store for client rendering
        Cookie.set('auth', res.auth_token) // saving token in cookie for server rendering
        this.toggleModal()
      })
      .catch(console.error)
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

