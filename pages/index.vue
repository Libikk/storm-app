<template>
  <div>
    <Layout>
      <div>
        <div v-if="$store.state.auth">
            You are login as {{ $store.state.auth.name }}
        </div>
        <span v-else>You are logged off.</span>

      </div>
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
