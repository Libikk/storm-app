<template>
      <v-card class="login-form">
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
        <button @click="postLogin">
          login
        </button>
        <p>The credentials are not verified for the example purpose.</p>
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
  max-width: 500px;

}
</style>

