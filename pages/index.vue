<template>
  <div>
    <Layout>
    <div v-if="$store.state.auth">
      <p>
        You are authenticated. You can see the
        <NuxtLink to="/secret">
          secret page
        </NuxtLink>!
      </p>
      <button @click="logout">
        Logout
      </button>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/login">
        login
      </NuxtLink>.
    </p>
    </Layout>
  </div>
</template>

<script>
import Layout from '../components/Layout';

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  components: {
    Layout
  },
  methods: {
    logout () {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
    }
  },
  data: () => ({
      drawer: null,
    }),
}
</script>
