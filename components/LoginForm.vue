<template>
      <v-card class="login-form">
        <header class="login-form__header">
          <img src="~/assets/padlock.png"/>
        </header>
        <body class="login-form__body">
          <v-text-field
            label="Login"
            type="text"
            value="StormTest"
          />
          <v-text-field
            label="Password"
            type="password"
            value="-!NmmQR2pbmJSQ7"
          />
          <v-btn class="global-button__primary" @click="postLogin">
            login
          </v-btn>
        </body>
    </v-card>
</template>

<script>

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  props: {
    toggleModal: Function
  },
  middleware: 'notAuthenticated',
  methods: {
    postLogin () {
      setTimeout(() => { // we simulate the async request with timeout.
        const auth = {
          accessToken: 'someStringGotFromApiServiceWithAjax'
        }
        this.toggleModal()
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/')
      }, 1000)
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

